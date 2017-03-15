function eventItemDirective(eventsFactory) {
    return {
        scope: {},
        bindToController: {
            item: '<'
        },
        templateUrl: 'scripts/dev/components/event/item/event-item.tmpl.html',
        controller: function() {
            var self = this;

            self.remove = function() {

                eventsFactory.removeEvent(self.item);
            }
        },
        controllerAs: 'eventItemCtrl'
    }
}