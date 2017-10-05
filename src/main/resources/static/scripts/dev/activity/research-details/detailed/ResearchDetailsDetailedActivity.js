function ResearchDetailsDetailedController($rootScope, $stateParams, researchDetailsFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    if (researchDetailsFactory.researchDetails.length === 0) {
        researchDetailsFactory.getResearchDetails();
    }

    self.getResearchDetail = function () {
        return researchDetailsFactory.findResearchDetail(uuid);
	};

    $rootScope.$emit('updateNotifications');
}