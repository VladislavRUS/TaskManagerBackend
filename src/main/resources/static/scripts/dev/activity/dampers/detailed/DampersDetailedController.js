function DampersDetailedController($rootScope, $stateParams, dampersFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    if (dampersFactory.dampers.length === 0) {
        dampersFactory.getDampers();
    }

    self.getDamper = function () {
        return dampersFactory.findDamper(uuid);
    };

    $rootScope.$emit('updateNotifications');
}