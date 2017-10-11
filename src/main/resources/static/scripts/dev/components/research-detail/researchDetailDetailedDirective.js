function researchDetailDetailedDirective($timeout, $state, researchDetailsFactory,
    modalFactory, notificationsFactory, toastFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {
            researchDetail: '<'
        },
        templateUrl: 'scripts/dev/components/research-detail/research-detail-detailed.tmpl.html',
        controller: function() {
            var self = this;
            self.nf = notificationsFactory;
            self.update = false;
            self.doneFilter = false;

            var stepModal = 'createStepModal';

            self.toggleDone = function() {
                self.doneFilter = !self.doneFilter;
            };

            self.stepFilter = function(step) {
                return self.doneFilter ? !step.done : true;
            };

            self.onUpdate = function() {
                researchDetailsFactory.updateResearchDetail(self.researchDetail).then(function() {
                    toastFactory.successToast('НИОКР успешно обновлен!')
                });
            };

            self.addStep = function() {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/step/add/add-step-dialog.tmpl.html', {
                    update: false,
                    detail: self.researchDetail
                });
            };

            self.updateStep = function(step) {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/step/add/add-step-dialog.tmpl.html', {
                    update: true,
                    step: angular.copy(step),
                    detail: self.researchDetail
                });
            };

            self.onDelete = function() {
                researchDetailsFactory.deleteResearchDetail(self.researchDetail).then(function() {
                    $state.go('research-details');
                });
            };
        },
        controllerAs: 'ctrl'
    }
}