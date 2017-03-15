function EditAccessoryDialogController(detailsFactory, dialogWrapFactory) {
    var self = this;
    self.accessory = JSON.parse(JSON.stringify(dialogWrapFactory.getParams().accessory));

    self.onSave = function () {
        detailsFactory.updateAccessory(self.accessory);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }

}