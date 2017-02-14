function detailsLayoutDirective(printFactory, detailsFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {
        },
        templateUrl: 'scripts/dev/components/layout/details/details-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.storage = detailsFactory;

            self.addDetail = function() {
                dialogWrapFactory.open('scripts/dev/components/dialog/detail/add/add-detail-dialog.tmpl.html');
            };

            self.print = function() {
                printFactory.sendToPrint('details');
            }
        },
        controllerAs: 'detailsLayoutCtrl'
    }
}