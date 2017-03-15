function equipmentsLayoutDirective(equipmentsFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {
            vendor: '@'
        },
        templateUrl: 'scripts/dev/components/layout/equipments/equipments-layout.tmpl.html',
        controller: function () {
            var self = this;

            self.storage = equipmentsFactory;

            self.addEquipment = function () {
                dialogWrapFactory.open('scripts/dev/components/dialog/equipment/add/add-equipment-dialog.tmpl.html', { vendor: self.vendor });
            };

            self.equipmentFilter = function (equipment) {
                if (!self.equipmentSearch) {
                    return equipment.vendor == self.vendor;
                }
            }
        },
        controllerAs: 'equipmentsLayoutCtrl'
    }
}