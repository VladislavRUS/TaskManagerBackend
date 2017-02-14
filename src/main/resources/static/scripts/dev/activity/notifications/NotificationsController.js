function NotificationsController(notificationsFactory, $rootScope, loginFactory, detailsFactory, equipmentsFactory, detailsProgressFactory) {
    var self = this;

    self.storage = notificationsFactory;
    self.loginFactory = loginFactory;

    if (loginFactory.loggedIn) {
        $rootScope.$emit('data:update');
    }
}