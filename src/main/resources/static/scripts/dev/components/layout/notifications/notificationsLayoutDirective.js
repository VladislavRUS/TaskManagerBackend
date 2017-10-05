function notificationsLayoutDirective(notificationsFactory) {
    return {
        scope: {},
        bindToController: {
        },
        templateUrl: 'scripts/dev/components/layout/notifications/notifications-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.currentType = null;
            self.storage = notificationsFactory;

            self.setType = function(type) {
                self.currentType = type;
            };

            self.getNotificationAlertType = function(n) {
				return n.type.split(':')[1];
			};

            self.getRowClass = function (n) {
                var color = n.type.split(':')[1];

                if (color === 'red') {
                    return 'negative';

                } else if (color === 'green') {
                    return 'positive';

                } else if (color === 'yellow') {
                    return 'warning';
                }
			};

            self.typeFilter = function(notification) {

                if (self.currentType) {
                    var nDesignation = notification.type.split(':')[0];
                    var currentTypeDesignation = self.currentType.designation;

                    return nDesignation == currentTypeDesignation;

                } else {
                    return true;
                }
            };

            self.getNumberOfNotificationsByType = function (typeDesignation) {
                var cnt = 0;

                for (var i = 0; i < self.storage.notifications.length; i++) {
                    var n = self.storage.notifications[i];
                    var nDesignation = n.type.split(':')[0];

                    if (nDesignation === typeDesignation) {
                        cnt++;
                    }
                }

                return cnt;
            }
        },
        controllerAs: 'ctrl'
    }
}