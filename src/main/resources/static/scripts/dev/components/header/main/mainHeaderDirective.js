function mainHeaderDirective($state, notificationsFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/header/main/main-header.tmpl.html',
        controller: function() {
            var self = this;

            self.storage = notificationsFactory;

            self.currentState = function() {
                return $state.current.name;
            }

        },
        controllerAs: 'mainHeaderCtrl'
    }
}