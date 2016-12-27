function detailItemDirective($document, $timeout, $q, dialogWrapFactory, dateFactory, detailsFactory, notificationsFactory) {
    return {
        scope: {},
        bindToController: {
            item: '<'
        },
        templateUrl: 'scripts/dev/components/detail/item/detail-item.tmpl.html',
        controller: function() {
            var self = this;

            self.expired = new Date(self.item.expirationDate).getTime() < new Date().getTime();

            self.toggleContracts = function() {
                self.isOpened = !self.isOpened;

                if (self.isOpened) {
                    $timeout(function() {
                        var contract = angular.element(document.getElementById(self.item.uuid + '-table'));
                        $document.scrollToElement(contract, 100, 300);
                    }, 200);
                }
            };

            self.contractStatus = function(contract) {
                var expiresIn = dateFactory.expiresIn(contract.quoter, contract.year);

                if (expiresIn == -1) {
                    return '_expired'
                }

                if (expiresIn == 100) {
                    return '_ok'
                }

                return '_soon';
            };

            self.addContract = function() {
                dialogWrapFactory.open('scripts/dev/components/dialog/contract/add/add-contract-dialog.tmpl.html', {
                    detail: self.item
                })
            };

            self.editContract = function(contract) {
                var deferred = $q.defer();

                dialogWrapFactory.open('scripts/dev/components/dialog/contract/edit/edit-contract-dialog.tmpl.html', {
                    contract: contract,
                    deferred : deferred
                });

                deferred.promise.then(function() {

                });
            }
        },
        controllerAs: 'detailItemCtrl'
    }
}