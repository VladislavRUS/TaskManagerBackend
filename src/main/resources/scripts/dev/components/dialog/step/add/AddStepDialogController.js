function AddStepDialogController(dialogWrapFactory, detailsProgressFactory) {
    var self = this;

    self.detail = dialogWrapFactory.getParams().detail;

    self.onSave = function () {
        var step = {
            stepEquipmentUUID: self.detail.uuid,
            number: self.number,
            expirationDate: self.expirationDate
        };

        detailsProgressFactory.addStepToDetail(self.detail, step);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}