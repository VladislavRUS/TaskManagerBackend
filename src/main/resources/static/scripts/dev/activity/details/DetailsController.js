function DetailsController($stateParams, $document, $timeout, detailsFactory) {
    var self = this;
    detailsFactory.getDetails();


    var uuid = $stateParams.uuid;

    if (uuid !== undefined) {
        $timeout(function() {
            var detail = angular.element(document.getElementById(uuid));
            $document.scrollToElement(detail, 50, 300);

        }, 200);
    }
}