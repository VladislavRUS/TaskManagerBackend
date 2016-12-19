function eventsFactory($http, restServiceFactory) {
    var factory = {};

    factory.getEvents = function() {
        $http.get(restServiceFactory.eventsReadAll).then(function(resp) {
            console.log(resp.data);
            factory.events = resp.data;
        });
    };

    factory.addEvent = function(event) {
        $http.post(restServiceFactory.eventsCreate, event).then(function() {
            factory.getEvents();

        }).catch(function(err) {
            console.log(err);
        })
    };

    factory.removeEvent = function(event) {
        $http.delete(restServiceFactory.eventsDelete.replace('{uuid}', event.uuid)).then(function(resp) {
            console.log(resp);
            factory.getEvents();
        }).catch(function(err) {
            console.log(err);
        })
    };

    return factory;
}