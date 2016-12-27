function notificationsLayoutDirective() {
    return {
        scope: {},
        bindToController: {
            notifications: '<'
        },
        templateUrl: 'scripts/dev/components/layout/notifications/notifications-layout.tmpl.html',
        controller: function() {
            var self = this;
        },
        controllerAs: 'notificationsLayoutCtrl'
    }
}