function detailContractDirective() {
    return {
        scope: {},
        bindToController: {
            contract: '<'
        },
        templateUrl: 'scripts/dev/components/detail/contract/detail-contract.tmpl.html',
        controller: function() {
            var self = this;
        },
        controllerAs: 'detailContractCtrl'
    }
}