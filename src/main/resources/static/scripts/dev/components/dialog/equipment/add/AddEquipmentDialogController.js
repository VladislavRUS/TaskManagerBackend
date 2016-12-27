function AddEquipmentDialogController(dialogWrapFactory, equipmentsFactory) {
    var self = this;

    self.onSave = function () {
        var equipment = {
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