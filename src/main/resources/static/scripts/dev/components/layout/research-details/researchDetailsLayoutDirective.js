function researchDetailsLayoutDirective($state, researchDetailsFactory, dialogWrapFactory, toastFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/layout/research-details/research-details-layout.tmpl.html',
        controller: function() {
            var self = this;
            var modalId = 'createResearchDetailModal';

            self.storage = researchDetailsFactory;

            self.onAdd = function() {
                dialogWrapFactory.openDialog('scripts/dev/components/dialog/research-detail/add/add-research-detail-dialog.tmpl.html', {
                    vendor: self.vendor
                });
            };

            self.save = function() {
                var researchDetail = {
                    requirements: self.requirements,
                    contract: self.contract,
                    name: self.name,
                    vendor: self.vendor,
                    head: self.head,
                    customer: self.customer
                };


            };

            self.onClick = function(researchDetail) {
                $state.go('research-details-detailed', { uuid: researchDetail.uuid });
            };
        },
        controllerAs: 'ctrl'
    }
}