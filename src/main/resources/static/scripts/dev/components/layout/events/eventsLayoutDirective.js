function eventsLayoutDirective(eventsFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/layout/events/events-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.storage = eventsFactory;

            self.addEvent = function() {
                dialogWrapFactory.open('scripts/dev/components/dialog/event/add/add-event-dialog.tmpl.html')
            }
        },
        controllerAs: 'eventsLayoutCtrl'
    }
}