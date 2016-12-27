function notificationsLayoutDirective() {
    return {
        scope: {},
        bindToController: {
            notifications: '<'
        },
        templateUrl: 'scripts/dev/components/layout/notifications/notifications-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.currentType = null;

            self.filterType = function(notification) {
                if (self.currentType) {
                    return notification.type.value == self.currentType.value;

                } else {
                    return true;
                }
            };

            self.go = function(link) {
                window.location.href = window.location.origin + '#/' + link;
            };

            self.setCurrentType = function(type) {
                self.currentType = type;
            };

            self.types = function() {
                var arr = [];

                self.notifications.forEach(function(n) {
                    if (!self.containsType(arr, n.type)) {
                        n.type.amount = 1;
                        arr.push(n.type);

                    } else {
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].value == n.type.value) {
                                arr[i].amount++;
                                break;
                            }
                        }
                    }
                });

                return arr;
            };

            self.containsType = function(arr, type) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].value == type.value) {
                        return true;
                    }
                }
                return false;
            }
        },
        controllerAs: 'notificationsLayoutCtrl'
    }
}