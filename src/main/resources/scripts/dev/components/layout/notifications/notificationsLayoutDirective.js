function notificationsLayoutDirective(notificationsFactory) {
    return {
        scope: {},
        bindToController: {
            notifications: '<'
        },
        templateUrl: 'scripts/dev/components/layout/notifications/notifications-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.currentType = '';
            self.storage = notificationsFactory;

            self.setType = function(type) {
                self.currentType = type;
            };

            self.secondWord = function(word) {
                return word.split('-')[1];
            };

            self.typeFilter = function(n) {
                var type = n.type;

                if (self.currentType) {
                    return n.type == self.currentType;

                } else {
                    return true;
                }
            }
        },
        controllerAs: 'ctrl'
    }
}