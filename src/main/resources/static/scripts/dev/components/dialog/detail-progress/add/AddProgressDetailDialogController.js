function AddProgressDetailDialogController(dialogWrapFactory, detailsProgressFactory) {
    var self = this;

    self.onSave = function () {
        var detail = {
            description: self.description,
            agreement: self.agreement,
            number: '1'
        };

        detailsProgressFactory.createDetail(detail);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}