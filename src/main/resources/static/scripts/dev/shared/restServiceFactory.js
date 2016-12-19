function restServiceFactory() {

    var service = {};

    service.ip = 'http://localhost:9999/api/v1/frontend-api/';

    service.eventsReadAll = service.ip + 'events/';
    service.eventsCreate = service.ip + 'events/';
    service.eventsUpdate = service.ip + 'events/{uuid}';
    service.eventsDelete = service.ip + 'events/{uuid}';

    return service;
}