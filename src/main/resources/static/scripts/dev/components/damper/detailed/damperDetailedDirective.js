function damperDetailedDirective($state, $timeout, dampersFactory, notificationsFactory, dialogWrapFactory, toastFactory) {
    return {
        scope: {},
        bindToController: {
            damper: '<'
        },
        templateUrl: 'scripts/dev/components/damper/detailed/damper-detailed.tmpl.html',
        controller: function() {
            var self = this;
            self.showAlert = false;
            self.currentContract = {};
            self.nf = notificationsFactory;
            self.update = false;
            self.currentAccessory = {};
            self.hideDone = false;
            self.accessoryTypes = {
                'component': 'Комплектующее',
                'material': 'Расходный материал'
            };

            var currentModal = null;

            self.toggleDone = function() {
                self.hideDone = !self.hideDone;
            };

            self.filterContract = function(contract) {
                if (self.hideDone) {
                    return !contract.done;

                } else {
                    return true;
                }
            };

            self.onUpdate = function() {
                dampersFactory.updateDamper(self.damper).then(function() {
                    toastFactory.successToast('Виброизолятор успешно обновлен!')
                });
            };

            self.addContract = function(modal) {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/contract/add/add-contract-dialog.tmpl.html', {
                    damper: self.damper,
                });
            };

            self.updateContract = function(contract, modal) {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/contract/add/add-contract-dialog.tmpl.html', {
                    contract: angular.copy(contract),
                    update: true
                });
            };

            self.saveContract = function() {
                if (self.update) {
                    dampersFactory.updateContract(self.currentContract).then(function() {
                        modalFactory.closeModal();

                        toastFactory.successToast('Договор обновлен!')

                    });

                } else {
                    dampersFactory.addContractToDamper(self.damper, self.currentContract).then(function() {
                        modalFactory.closeModal();

                        toastFactory.successToast('Договор создан!')
                    });
                }
            };

            self.addAccessory = function(type) {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/accessory/add/add-accessory-dialog.tmpl.html', {
                    damper: self.damper,
                    accessory: {
                        type: type
                    },
                    update: false
                })
            };

            self.updateAccessory = function(accessory, modal) {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/accessory/add/add-accessory-dialog.tmpl.html', {
                    damper: self.damper,
                    accessory: angular.copy(accessory),
                    update: true
                })
            };

            self.deleteAccessory = function() {
                dampersFactory.deleteAccessory(self.currentAccessory).then(function() {
                    modalFactory.closeModal();
                })
            };

            self.onDelete = function() {
                dampersFactory.deleteDamper(self.damper).then(function() {
                    $state.go('dampers');
                })
            };

            self.deleteContract = function() {

                dampersFactory.deleteContract(self.currentContract).then(function() {
                    modalFactory.closeModal();
                });
            }
        },
        controllerAs: 'ctrl'
    }
}