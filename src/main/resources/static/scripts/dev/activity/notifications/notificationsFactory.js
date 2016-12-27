function notificationsFactory() {
    var factory = {};

    factory.notifications = [];

    factory.addNotification = function(event) {
        factory.notifications.push(event);
    };

    factory.notificationsLength = function() {
        return factory.notifications.length;
    };

    factory.clearNotifications = function(types) {
        types.forEach(function(type) {
            factory.notifications = factory.notifications.filter(function(n) {
                return n.type.value !== type;
            });
        });
    };

    return factory;
}