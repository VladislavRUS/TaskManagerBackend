function equipmentItemDirective() {
    return {
        scope: {},
        bindToController: {
            item: '='
        },
        templateUrl: 'scripts/dev/components/equipment/item/equipment-item.tmpl.html',
        controller: function() {
            var self = this;
            self.expired = new Date(self.item.expirationDate).getTime() < new Date().getTime();

        },
        controllerAs: 'equipmentItemCtrl'
    }
}