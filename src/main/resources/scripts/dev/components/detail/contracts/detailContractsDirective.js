function detailContractsDirective($q, dialogWrapFactory, dateFactory, detailsFactory) {
    return {
        scope: {},
        bindToController: {
            detail: '<'
        },
        templateUrl: 'scripts/dev/components/detail/contracts/detail-contracts.tmpl.html',
        controller: function () {
            var self = this;
            self.opened = false;

            self.toggle = function () {
                self.opened = !self.opened;
            };

            self.addContract = function () {
                dialogWrapFactory.open('scripts/dev/components/dialog/contract/add/add-contract-dialog.tmpl.html', {
                    detail: self.detail
                });
            };

            self.editContract = function (contract) {
                var deferred = $q.defer();

                dialogWrapFactory.open('scripts/dev/components/dialog/contract/edit/edit-contract-dialog.tmpl.html', {
                    contract: contract,
                    deferred: deferred
                });

                deferred.promise.then(function () {

                });
            };


            self.contractStatus = function (contract) {
                var expiresIn = dateFactory.expiresIn(contract.quoter, contract.year);

                if (expiresIn == -1) {
                    return '_expired'
                }

                if (expiresIn == 100) {
                    return '_ok'
                }

                return '_soon';
            };

            self.setDone = function (contract) {
                var copy = JSON.parse(JSON.stringify(contract));
                copy.isDone = !copy.isDone;

                detailsFactory.updateContract(copy);
            };

            self.deleteContract = function (contract) {
                detailsFactory.deleteContract(self.detail, contract);
            }
        },
        controllerAs: 'detailContractsCtrl'
    }
}