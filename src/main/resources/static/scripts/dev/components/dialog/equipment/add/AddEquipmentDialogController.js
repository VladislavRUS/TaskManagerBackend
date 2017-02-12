function AddEquipmentDialogController(dialogWrapFactory, equipmentsFactory) {
    var self = this;

    self.vendor = dialogWrapFactory.getParams().vendor;

    self.onSave = function () {
        var equipment = {
            vendor: self.vendor,
            name: self.name,
            type: self.type,
            number: self.number,
            expirationDate: self.expirationDate
        };

        equipmentsFactory.createEquipment(equipment);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}