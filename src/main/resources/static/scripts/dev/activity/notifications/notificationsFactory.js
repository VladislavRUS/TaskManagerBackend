function notificationsFactory() {
    var factory = {};
    factory.notifications = [];

    factory.addNotification = function(event) {
        factory.notifications.push(event);
    };

    factory.notificationsLength = function() {
        return factory.notifications.length;
    };

    factory.clearNotifications = function() {
        factory.notifications = [];
    }

    return factory;
}