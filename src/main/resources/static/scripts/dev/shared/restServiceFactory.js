function restServiceFactory() {

    var service = {};

    service.ip = 'http://localhost:9999/api/v1/frontend-api/';

    /*Events*/
    service.eventsReadAll = service.ip + 'events';
    service.eventsCreate = service.ip + 'events';
    service.eventsUpdate = service.ip + 'events/{UUID}';
    service.eventsDelete = service.ip + 'events/{UUID}';

    /*Details*/
    service.detailsReadAll = service.ip + 'details';
    service.detailsCreate = service.ip + 'details';
    service.detailsUpdate = service.ip + 'details/{UUID}';
    service.detailsDelete = service.ip + 'details/{UUID}';

    /*Contracts*/
    service.updateCOntract = service.ip + 'contracts/{UUID}';
    service.createContract = service.ip + 'contracts/{detailUUID}';
    service.deleteContract = service.ip + 'contracts/{detailUUID}/{UUID}';

    return service;
}