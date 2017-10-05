function calendarLayoutDirective($timeout, $q, $window, $state, $rootScope, uiCalendarConfig,
    eventsFactory, notificationsFactory, dialogWrapFactory, toastFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/calendar-layout/calendar-layout.tmpl.html',
        controller: function($scope) {
            var self = this;

            self.currentDate = new Date();
            self.currentEvent = {};
            self.update = false;

            $scope.eventSources = [];

            $scope.uiConfig = {
                calendar: {
                    editable: false,
                    header: {
                        left: 'month',
                        center: 'title',
                        right: 'today prev,next'
                    },
                    displayEventTime: false,
                    height: 600,
                    dayClick: function(date) {

                        dialogWrapFactory.openDialog('scripts/dev/components/dialog/calendar/event/event-calendar-dialog.tmpl.html', {
                            update: false,
                            event: {
                                date: new Date(date)
                            }
                        });
                    },

                    eventClick: function(calEvent, jsEvent, view) {
                        dialogWrapFactory.openDialog('scripts/dev/components/dialog/calendar/event/event-calendar-dialog.tmpl.html', {
                            update: true,
                            event: {
                                title: calEvent.title,
                                date: calEvent.start._i,
                                comment: calEvent.comment,
                                custom: calEvent.custom || false,
                                uuid: calEvent.uuid,
                                link: calEvent.link,
                                linkText: calEvent.linkText
                            }
                        });
                    },

                    dayRender: function(date, cell) {
                        var day = new Date(date);

                        if (day.getDay() === 6 || day.getDay() === 0) {
                            $(cell).css({
                                'background-color': '#ffc4b7'
                            });
                        }
                    },

                    lang: 'ru'
                }
            };

            self.updateEventSources = function() {
                $scope.eventSources.length = 0;

                var p1 = notificationsFactory.getNotifications();
                var p2 = eventsFactory.getEvents();

                $q.all(p1, p2).then(function() {
                    var userEvents = eventsFactory.events.map(function(event) {
                        return {
                            uuid: event.uuid,
                            title: event.title,
                            start: new Date(event.date),
                            comment: event.comment,
                            color: '#2196F3'
                        }
                    });

                    $scope.eventSources.push({
                        events: userEvents
                    });

                    var notificationEvents = notificationsFactory.notifications.

                    filter(function(n) {
                        return n.type.split(':')[0] !== 'event';

                    }).map(function(n) {
                        return {
                            uuid: n.uuid,
                            title: n.title,
                            start: n.date,
                            comment: n.text,
                            link: n.link,
                            linkText: n.linkText,
                            custom: true,
                            color: getNotificationColor(n)
                        }
                    });

                    $scope.eventSources.push({
                        events: notificationEvents
                    });
                });

            };

            function getNotificationColor(n) {
                var type = n.type.split(':')[1];

                if (type === 'yellow') {
                    return '#FFC107';

                } else if (type === 'red') {
                    return '#F44336';

                } else return 'blue';
            }

            $rootScope.$on('updateEvents', function() {
                self.updateEventSources();
            });

            self.updateEventSources();
        },

        controllerAs: 'ctrl'
    }
}