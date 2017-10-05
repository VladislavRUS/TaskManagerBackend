function AddAccessoryDialogController(dialogWrapFactory, dampersFactory, toastFactory) {
    var self = this;

    self.update = dialogWrapFactory.getParams().update;
    self.damper = dialogWrapFactory.getParams().damper;
    self.accessory = dialogWrapFactory.getParams().accessory;

    self.onSave = function() {
        if (self.update) {
            dampersFactory.updateAccessory(self.accessory).then(function() {
                toastFactory.successToast('Комплектующее обновлено!')
            });

        } else {
            dampersFactory.addAccessoryToDamper(self.damper, self.accessory).then(function() {
                toastFactory.successToast('Комплектующее создано!')
            });
        }

        dialogWrapFactory.closeDialog();
    };

    self.onDelete = function() {
        dampersFactory.deleteAccessory(self.accessory).then(function() {
            toastFactory.successToast('Комплектующее удалено!')
        });

        dialogWrapFactory.closeDialog();
    }

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }
}