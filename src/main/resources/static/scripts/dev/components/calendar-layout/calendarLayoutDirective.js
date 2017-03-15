function calendarLayoutDirective($state, $timeout, eventsFactory, notificationsFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/calendar-layout/calendar-layout.tmpl.html',
        controller: function () {
            var self = this;

            self.currentDate = new Date();
            self.currentEvent = null;

            self.uiConfig = {
                calendar: {
                    editable: false,
                    header: {
                        left: 'month agendaWeek agendaDay',
                        center: 'title',
                        right: 'today prev,next'
                    },
                    height: 500,
                    dayClick: function (date) {
                        self.currentDate = new Date(date);
                        openModal('createEventModal');
                    },

                    eventClick: function (calEvent, jsEvent, view) {
                        self.currentEvent = calEvent;
                        openModal('detailedEventModal');
                    },
                    lang: 'ru'
                }
            };

            self.eventSources = [];

            eventsFactory.getEvents().then(function () {
                self.eventSources.push(
                    {
                        events: eventsFactory.events
                            .map(function (event) {
                                return {
                                    uuid: event.uuid,
                                    title: event.title,
                                    start: event.date,
                                    comment: event.comment
                                }
                            })
                    });

                self.eventSources.push({
                    events: notificationsFactory.notifications.filter(function(e) {
                        return !e.type.startsWith('eventType');
                    }).
                    map(function(n) {
                        return  {
                            uuid: n.uuid,
                            title: n.heading,
                            start: new Date(n.date),
                            comment: n.text,
                            custom: true
                        }
                    })
                })
            });

            self.save = function () {
                var event = {
                    title: self.eventTitle,
                    comment: self.eventComment,
                    date: self.currentDate
                };

                eventsFactory.addEvent(event).then(function () {
                    closeModal('createEventModal');
                    reloadState();
                });
            };

            self.update = function () {
                var event = {
                    uuid: self.currentEvent.uuid,
                    title: self.currentEvent.title,
                    comment: self.currentEvent.comment,
                    date: self.currentEvent.start._i
                };

                console.log(event);

                eventsFactory.updateEvent(event).then(function () {
                    closeModal('detailedEventModal');
                    reloadState();
                });
            };

            self.delete = function () {
                var event = {uuid: self.currentEvent.uuid};

                eventsFactory.removeEvent(event).then(function () {
                    closeModal('detailedEventModal');
                    reloadState();
                });
            };

            function closeModal(id) {
                var el = angular.element(document).find('#' + id);
                el.modal('hide');
            }

            function openModal(id) {
                var el = angular.element(document).find('#' + id);
                el.modal('show');
            }

            function reloadState() {
                $timeout(function () {
                    $state.reload();
                }, 500);
            }
        },
        controllerAs: 'ctrl'
    }
}