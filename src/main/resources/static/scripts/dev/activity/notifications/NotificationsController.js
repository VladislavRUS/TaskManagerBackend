function NotificationsController(notificationsFactory, $rootScope, loginFactory, detailsFactory, equipmentsFactory, detailsProgressFactory) {
    var self = this;
    self.storage = notificationsFactory;

    notificationsFactory.getNotifications();

    $rootScope.$emit('updateNotifications');

}