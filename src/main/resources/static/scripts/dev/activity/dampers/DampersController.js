function DampersController($rootScope, dampersFactory) {
    var self = this;
    dampersFactory.getDampers();

    $rootScope.$emit('updateNotifications');
}