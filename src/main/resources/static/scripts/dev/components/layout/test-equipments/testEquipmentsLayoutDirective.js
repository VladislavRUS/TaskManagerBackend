function testEquipmentsLayoutDirective($stateParams, $timeout, $state,
    testEquipmentsFactory, notificationsFactory, dialogWrapFactory, toastFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/layout/test-equipments/test-equipments-layout.tmpl.html',
        controller: function() {
            var self = this;

            self.storage = testEquipmentsFactory;
            self.vendor = $stateParams.vendor;
            self.nf = notificationsFactory;

            self.onAdd = function() {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/test-equipment/add/add-test-equipment-dialog.tmpl.html', {
                    vendor: self.vendor
                });

            };

            self.vendorFilter = function(testEquipment) {
                return testEquipment.vendor === self.vendor;
            };

            self.onClick = function(testEquipment) {
                $state.go('test-equipments-detailed', { uuid: testEquipment.uuid });
            };
        },
        controllerAs: 'ctrl'
    }
}