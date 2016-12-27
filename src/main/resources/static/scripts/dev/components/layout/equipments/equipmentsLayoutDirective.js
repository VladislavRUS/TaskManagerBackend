function equipmentsLayoutDirective(equipmentsFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/layout/equipments/equipments-layout.tmpl.html',
        controller: function() {
            var self = this;

            self.storage = equipmentsFactory;

            self.addEquipment = function() {
                dialogWrapFactory.open('scripts/dev/components/dialog/equipment/add/add-equipment-dialog.tmpl.html');
            }
        },
        controllerAs: 'equipmentsLayoutCtrl'
    }
}