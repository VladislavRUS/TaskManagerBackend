function mainHeaderDirective($state, notificationsFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/header/main/main-header.tmpl.html',
        controller: function () {
            var self = this;

            self.storage = notificationsFactory;

            self.currentState = function () {
                return $state.current.name;
            };

            self.inState = function (dropdownName) {
                switch (dropdownName) {

                    case 'university':
                        return self.orState(['details']);

                    case 'progress': {
                        return self.orState(['io']);
                    }

                    case 'calendar': {
                        return self.orState(['calendar']);
                    }
                }


                return false;
            };

            self.orState = function (states) {
                for (var i = 0; i < states.length; i++) {
                    if (states[i] == $state.current.name) {
                        return true;
                    }
                }
            }

        },
        controllerAs: 'mainHeaderCtrl'
    }
}