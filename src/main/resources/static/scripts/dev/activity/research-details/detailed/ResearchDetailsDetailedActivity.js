function ResearchDetailsDetailedController($rootScope, $stateParams, researchDetailsFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    researchDetailsFactory.getResearchDetail(uuid).then(function (r) {
        self.researchDetail = r;
    });

    $rootScope.$emit('updateNotifications');
}