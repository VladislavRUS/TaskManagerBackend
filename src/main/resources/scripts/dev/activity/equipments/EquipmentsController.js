function EquipmentsController($document, $stateParams, equipmentsFactory, loginFactory) {
    var self = this;

    self.loginFactory = loginFactory;

    if (self.loginFactory.loggedIn) {
        equipmentsFactory.getEquipments();
    }

    var uuid = $stateParams.uuid;

    if (uuid !== undefined) {
        $timeout(function() {
            var equipment = angular.element(document.getElementById(uuid));
            $document.scrollToElement(equipment, 50, 300);

        }, 200);
    }

}