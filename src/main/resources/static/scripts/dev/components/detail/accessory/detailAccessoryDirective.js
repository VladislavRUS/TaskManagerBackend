function detailAccessoryDirective() {
    return {
        scope: {},
        bindToController: {
            accessory: '<'
        },
        templateUrl: 'scripts/dev/components/detail/accessory/detail-accessory.tmpl.html',
        controller: function() {
            var self = this;
        },
        controllerAs: 'detailAccessoryCtrl'
    }
}