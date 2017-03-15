function eventsLayoutDirective(eventsFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {
            events: '<'
        },
        templateUrl: 'scripts/dev/components/layout/events/events-layout.tmpl.html',
        controller: function() {
            var self = this;
        },
        controllerAs: 'eventsLayoutCtrl'
    }
}