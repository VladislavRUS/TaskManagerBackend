function notificationsFactory($q, $http, restServiceFactory) {
    var factory = {};

    factory.notifications = [];
    factory.types = [];

    factory.getNotifications = function() {
        factory.notifications = [];
        factory.types = {};

        var deferred = $q.defer();

        $http.get(restServiceFactory.notificationsAll).then(function(resp) {
            factory.notifications = factory.notifications.concat(resp.data);

            for (var i = 0; i < factory.notifications.length; i++) {
                var type = factory.notifications[i].type;

                if (!factory.types[type]) {
                    factory.types[type] = []
                }

                factory.types[type].push(factory.notifications[i]);
            }

            deferred.resolve();
        });

        return deferred.promise;
    };

    return factory;
}