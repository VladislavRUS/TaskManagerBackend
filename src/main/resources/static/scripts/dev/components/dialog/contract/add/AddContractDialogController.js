function AddContractDialogController(dialogWrapFactory, dampersFactory, toastFactory) {
    var self = this;

    self.update = dialogWrapFactory.getParams().update;
    self.damper = dialogWrapFactory.getParams().damper;

    if (self.update) {
        self.contract = dialogWrapFactory.getParams().contract;

    } else {
        self.contract = {
            amount: 1,
            quoter: 1,
            year: new Date().getFullYear()
        };
    }

    self.onSave = function() {
        if (self.update) {
            dampersFactory.updateContract(self.contract).then(function() {
                toastFactory.successToast('Договор обновлен!')
            });

        } else {
            dampersFactory.addContractToDamper(self.damper, self.contract).then(function() {
                toastFactory.successToast('Договор создан!')
            });
        }

        dialogWrapFactory.closeDialog();
    }

    self.onDelete = function() {
        dampersFactory.deleteContract(self.contract).then(function() {
            toastFactory.successToast('Договор удален!')
        });

        dialogWrapFactory.closeDialog();
    }

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }
}