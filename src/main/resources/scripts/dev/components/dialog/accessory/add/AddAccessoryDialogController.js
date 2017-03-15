function AddAccessoryDialogController(dialogWrapFactory, detailsFactory) {
    var self = this;

    self.onSave = function() {
        var detail = dialogWrapFactory.getParams().detail;
        
        var accessory = {
            detailUUID: detail.uuid,
            name: self.name,
            designation: self.designation
        };
        
        detailsFactory.addAccessoryToDetail(accessory);
        dialogWrapFactory.close();
    };

    self.onCancel = function() {
        dialogWrapFactory.close();
    }
}