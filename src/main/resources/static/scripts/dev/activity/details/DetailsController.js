function DetailsController($stateParams, $document, $timeout, $rootScope, detailsFactory, loginFactory) {
    var self = this;
    self.loginFactory = loginFactory;

    if (self.loginFactory.loggedIn) {
        detailsFactory.getDetails();
    }

    var uuid = $stateParams.uuid;

    if (uuid !== undefined) {
        $timeout(function() {
            var detail = angular.element(document.getElementById(uuid));
            $document.scrollToElement(detail, 50, 300);

        }, 200);
    }
}