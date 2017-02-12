function DetailsProgressController($stateParams, $document, $timeout, detailsProgressFactory, loginFactory) {
    var self = this;
    self.loginFactory = loginFactory;

    if (self.loginFactory.loggedIn) {
        detailsProgressFactory.getDetails();
    }

    var uuid = $stateParams.uuid;

    if (uuid !== undefined) {
        $timeout(function() {
            var detail = angular.element(document.getElementById(uuid));
            $document.scrollToElement(detail, 50, 300);

        }, 200);
    }
}