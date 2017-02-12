function detailsProgressLayoutDirective(detailsProgressFactory, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/layout/details-progress/details-progress-layout.tmpl.html',
        controller: function() {
            var self = this;
            self.storage = detailsProgressFactory;

            self.addDetail = function() {
                dialogWrapFactory.open('scripts/dev/components/dialog/detail-progress/add/add-progress-detail-dialog.tmpl.html');
            };
        },
        controllerAs: 'detailsProgressLayoutCtrl'
    }
}