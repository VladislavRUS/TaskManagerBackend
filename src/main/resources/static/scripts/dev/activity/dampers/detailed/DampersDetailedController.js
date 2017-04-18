function DampersDetailedController($rootScope, $stateParams, dampersFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    dampersFactory.getDamper(uuid).then(function(d) {
        self.damper = d;
    });

    $rootScope.$emit('updateNotifications');
}