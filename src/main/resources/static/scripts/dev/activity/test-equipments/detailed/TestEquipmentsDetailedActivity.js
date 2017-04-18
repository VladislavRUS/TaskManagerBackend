function TestEquipmentsDetailedController($rootScope, $stateParams, testEquipmentsFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    testEquipmentsFactory.getTestEquipment(uuid).then(function (e) {
        self.testEquipment = e;
    });
    $rootScope.$emit('updateNotifications');
}