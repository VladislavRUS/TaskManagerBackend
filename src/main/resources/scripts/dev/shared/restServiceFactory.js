function restServiceFactory() {

    var service = {};

    //192.168.1.41
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
    service.detailsPrint = service.ip + 'details/print';

    /*Dampers*/
    service.dampersCreate = service.ip + 'dampers';
    service.dampersCreateContract = service.ip + 'dampers/{uuid}/contracts';
    service.dampersCreateAccessory = service.ip + 'dampers/{uuid}/accessories';
    service.dampersAll = service.ip + 'dampers';
    service.dampersOne = service.ip + 'dampers/{uuid}';
    service.dampersUpdate = service.ip + 'dampers/{uuid}';
    service.dampersDelete = service.ip + 'dampers/{uuid}';

    /*Contracts*/
    service.contractUpdate = service.ip + 'contracts/{uuid}';
    service.contractDelete = service.ip + 'contracts/{uuid}';

    /*Equipments*/
    service.equipmentsAll = service.ip + 'equipments';
    service.equipmentsCreate = service.ip + 'equipments';
    service.equipmentsUpdate = service.ip + 'equipments/{UUID}';
    service.equipmentsDelete  = service.ip + 'equipments/{UUID}';

    /*Steps*/
    service.stepsAll = service.ip + 'steps';
    service.stepsCreate = service.ip + 'steps/';
    service.stepsDelete = service.ip + 'steps/{UUID}';

    /*Created equipments*/
    service.detailsProgressReadAll = service.ip + 'createdequipments';
    service.detailsProgressCreate = service.ip + 'createdequipments';
    service.detailsProgressUpdate = service.ip + 'createdequipments/{UUID}';
    service.detailsProgressDelete  = service.ip + 'createdequipments/{UUID}';

    /*Accessories*/
    service.accessoriesDelete = service.ip + 'accessories/{uuid}';
    service.accessoriesUpdate = service.ip + 'accessories/{uuid}';

    /*Notifications*/
    service.notificationsAll = service.ip + 'notifications';

    return service;
}