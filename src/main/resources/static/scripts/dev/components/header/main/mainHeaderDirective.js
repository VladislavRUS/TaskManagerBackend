function mainHeaderDirective($state) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/header/main/main-header.tmpl.html',
        controller: function() {
            var self = this;

            self.currentState = function() {
                return $state.current.name;
            }
        },
        controllerAs: 'mainHeaderCtrl'
    }
}