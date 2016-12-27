function NotificationsController(notificationsFactory, $rootScope, loginFactory, detailsFactory, equipmentsFactory) {
    var self = this;

    self.storage = notificationsFactory;
    self.loginFactory = loginFactory;

    $rootScope.$on('user:loggedIn', function() {
        detailsFactory.getDetails();
        equipmentsFactory.getEquipments();
    });
}