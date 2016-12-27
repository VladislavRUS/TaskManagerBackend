function EditContractDialogController(dialogWrapFactory, detailsFactory) {
    var self = this;

    self.contract = JSON.parse(JSON.stringify(dialogWrapFactory.getParams().contract));

    self.onSave = function () {
        var contract = {
            uuid: self.contract.uuid,
            agreement: self.contract.agreement,
            customer: self.contract.customer,
            amount: self.contract.amount,
            quoter: self.contract.quoter,
            year: self.contract.year,
            prepaidNote: self.contract.prepaidNote
        };

        detailsFactory.updateContract(contract);
        dialogWrapFactory.close();
    };

    self.onCancel = function () {
        dialogWrapFactory.close();
    }
}