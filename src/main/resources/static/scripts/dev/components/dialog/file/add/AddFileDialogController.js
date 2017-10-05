function AddFileDialogController($timeout, $state, dialogWrapFactory, fileFactory, toastFactory) {
    var self = this;

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    };

    self.addFile = function() {
        self.animated = true;

        var fileInfo = {
            name: self.name,
            objectUuid: dialogWrapFactory.getParams().uuid
        };

        fileFactory.createFile('file', fileInfo).then(function() {
            self.animated = false;

            dialogWrapFactory.closeDialog();
            toastFactory.successToast('Файл добавлен!');

            $state.reload();
            // $timeout(function() {

            //     window.location.reload();

            // }, 1000);

        }, function() {
            self.animated = false;
            self.errShow = true;
            self.errMessage = 'Размер файла превышает допустимые 50 МБ!';

            $timeout(function() {
                self.errShow = false;

            }, 10000);
        })
    };
}