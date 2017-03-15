function eventsFactory($http, $q, restServiceFactory) {
    var factory = {};

    factory.events = [];

    factory.getEvents = function() {

        var deferred = $q.defer();

        $http.get(restServiceFactory.eventsReadAll).then(function(resp) {
            deferred.resolve();
            factory.events = resp.data;
        });

        return deferred.promise;
    };

    factory.addEvent = function(event) {

        var deferred = $q.defer();

        $http.post(restServiceFactory.eventsCreate, event).then(function() {
            factory.getEvents().then(deferred.resolve);

        }).catch(function(err) {
            console.log(err);

            deferred.reject();
        });

        return deferred.promise;
    };

    factory.updateEvent = function(event) {
        var deferred = $q.defer();

        $http.put(restServiceFactory.eventsUpdate.replace('{UUID}', event.uuid), event).then(function() {
           factory.getEvents().then(deferred.resolve);
        });

        return deferred.promise;
    };

    factory.removeEvent = function(event) {
        var deferred = $q.defer();

        $http.delete(restServiceFactory.eventsDelete.replace('{UUID}', event.uuid)).then(function(resp) {
            factory.getEvents().then(deferred.resolve);

        }).catch(function(err) {
            console.log(err);
            deferred.reject();
        });

        return deferred.promise;
    };

    return factory;
}