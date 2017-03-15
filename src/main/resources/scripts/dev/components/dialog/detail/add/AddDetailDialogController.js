function AddDetailDialogController(dialogWrapFactory, detailsFactory) {
    var self = this;

    self.onSave = function () {
        var detail = {
            name: self.name,
            description: self.description,
            expirationDate: self.expirationDate,
            inspectionMethods: self.inspectionMethods || '-',
            controlType: self.controlType || '-',
            meansMeasurement: self.meansMeasurement || '-',
            guarantee: self.guarantee || '-',
            fiatLabeling: self.fiatLabeling || '-',
            note: self.note || '-'
        };

        detailsFactory.createDetail(detail);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}