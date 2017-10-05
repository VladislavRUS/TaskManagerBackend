function filesDirective($state, $stateParams, $rootScope, $timeout, fileFactory, dialogWrapFactory, toastFactory) {
    return {
        scope: {},
        bindToController: {
            object: '<'
        },
        templateUrl: 'scripts/dev/components/files/files.tmpl.html',
        controller: function() {
            var self = this;
            var modalId = 'createFileModal';
            self.animated = false;

            self.files = [];

            fileFactory.getFiles(self.object).then(function(files) {
                self.files = self.files.concat(files);
            });

            self.onAdd = function() {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/file/add/add-file-dialog.tmpl.html', {
                    uuid: self.object.uuid
                });
            };

            self.onDelete = function(file) {
                fileFactory.deleteFile(file).then(function() {
                    $state.reload();
                })
            };

            self.resetFile = function() {
                self.name = '';
                self.file = null;
            };

            self.onOpen = function(file) {
                var decoded = fileFactory.decode(file.data);
                fileFactory.makeFile(decoded, file.name + file.extension);
            }
        },
        controllerAs: 'ctrl'
    }
}