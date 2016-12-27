function equipmentsFactory($http, restServiceFactory, notificationsFactory) {
    var factory = {};

    var equipmentTypeValue = 'equipments',
        equipmentTypeName = 'Испытательное оборудование';

    factory.getEquipments = function () {
        $http.get(restServiceFactory.equipmentsAll).then(function (resp) {
            notificationsFactory.clearNotifications([equipmentTypeValue]);

            factory.equipments = resp.data;

            for (var i = 0; i < factory.equipments.length; i++) {
                var equipment = factory.equipments[i];

                var expired = new Date(equipment.expirationDate).getTime() < new Date().getTime();

                if (expired) {
                    notificationsFactory.addNotification({
                        type: { value: equipmentTypeValue, name: equipmentTypeName },
                        text: 'Истекла дата последней аттестации на испытательное оборудование: ' + equipment.name, equipment: equipment,
                        link: equipmentTypeValue + '?uuid=' + equipment.uuid
                    });
                }
            }
        });
    };

    factory.createEquipment = function (equipment) {
        $http.post(restServiceFactory.equipmentsCreate, equipment).then(function (resp) {
            factory.getEquipments();
        })
    };

    factory.deleteDetail = function (equipment) {
        $http.delete(restServiceFactory.equipmentsDelete.replace('{UUID}', equipment.uuid)).then(function (data) {
            factory.getEquipments();
        })
    };

    return factory;
}