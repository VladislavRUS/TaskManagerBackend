function AddTestEquipmentDialogController(dialogWrapFactory, testEquipmentsFactory, toastFactory) {
    var self = this;

    self.testEquipment = {
        vendor: dialogWrapFactory.getParams().vendor
    };

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }

    self.onSave = function() {
        var testEquipment = angular.copy(self.testEquipment);

        testEquipmentsFactory.createTestEquipment(testEquipment).then(function() {
            toastFactory.successToast('Испытательное оборудование создано!')
            dialogWrapFactory.closeDialog();

        }, function() {
            alert('Ошибка!')
        });
    };

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }
}