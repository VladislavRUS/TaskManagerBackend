function detailContractDirective(dateFactory) {
    return {
        scope: {},
        bindToController: {
            contract: '<'
        },
        templateUrl: 'scripts/dev/components/detail/contract/detail-contract.tmpl.html',
        controller: function() {
            var self = this;
            
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
        },
        controllerAs: 'detailContractCtrl'
    }
}