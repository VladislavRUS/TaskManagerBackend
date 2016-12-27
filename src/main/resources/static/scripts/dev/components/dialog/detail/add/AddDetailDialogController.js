function AddDetailDialogController(dialogWrapFactory, detailsFactory) {
    var self = this;

    self.onSave = function () {
        var detail = {
            name: self.name,
            description: self.description,
            expirationDate: self.expirationDate
        };

        detailsFactory.createDetail(detail);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}