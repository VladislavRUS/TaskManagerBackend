function AddDamperDialogController(dialogWrapFactory, dampersFactory, toastFactory) {
    var self = this;

    self.damper = {};

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }

    self.onSave = function() {
        var damper = angular.copy(self.damper);

        dampersFactory.createDamper(damper).then(function() {

            toastFactory.successToast('Виброизолятор создан!')
            dialogWrapFactory.closeDialog();

        }, function() {
            alert('Ошибка!')
        });
    };
}