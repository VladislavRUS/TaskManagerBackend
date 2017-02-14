function restServiceFactory() {

    var service = {};

    //192.168.1.41
    service.ip = 'http://localhost:9999//api/v1/frontend-api/';

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

    /*Contracts*/
    service.updateContract = service.ip + 'contracts';
    service.createContract = service.ip + 'contracts/{detailUUID}';
    service.deleteContract = service.ip + 'contracts/{UUID}';

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
    service.accessoriesCreate = service.ip + 'accessory';
    service.accessoriesDelete = service.ip + 'accessory/{UUID}';
    service.accessoriesUpdate = service.ip + 'accessory';
    
    return service;
}