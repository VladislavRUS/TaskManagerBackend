function AddStepDialogController(dialogWrapFactory, researchDetailsFactory, toastFactory) {

    var self = this;

    self.detail = dialogWrapFactory.getParams().detail;
    self.step = dialogWrapFactory.getParams().step || {};
    self.update = dialogWrapFactory.getParams().update;

    self.onSave = function() {
        var p = self.update ?
            researchDetailsFactory.updateStep(self.step) :
            researchDetailsFactory.createStep(self.detail, self.step);

        p.then(function() {
            toastFactory.successToast('Этап сохранен!');
            dialogWrapFactory.closeDialog();
        });
    };

    self.onDelete = function() {
        researchDetailsFactory.deleteStep(self.step).then(function() {
            toastFactory.successToast('Этап удален!');
            dialogWrapFactory.closeDialog();
        });
    }

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }
}