function ResearchDetailsController($rootScope, researchDetailsFactory) {
    var self = this;

    researchDetailsFactory.getResearchDetails();
    $rootScope.$emit('updateNotifications');
}