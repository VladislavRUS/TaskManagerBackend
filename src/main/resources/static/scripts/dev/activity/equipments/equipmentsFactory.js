function equipmentsFactory($http, $rootScope, restServiceFactory, notificationsFactory) {
    var factory = {};

    var equipmentTypeValue = 'equipments',
        equipmentTypeName = 'Испытательное оборудование';

    $rootScope.$on('data:update', function() {
        factory.getEquipments();
    });

    factory.getEquipments = function () {
        $http.get(restServiceFactory.equipmentsAll).then(function (resp) {
            notificationsFactory.clearNotifications([equipmentTypeValue]);

            factory.equipments = resp.data;

            for (var i = 0; i < factory.equipments.length; i++) {
                var equipment = factory.equipments[i];

                var expired = new Date(equipment.expirationDate).getTime() < new Date().getTime();

                if (expired) {
                    notificationsFactory.addNotification({
                        type: { value: equipmentTypeValue, name: equipmentTypeName, style: '_expired' },
                        text: equipmentExpired(equipment),
                        link: getEquipmentLink(equipment) + '?uuid=' + equipment.uuid
                    });
                }
            }
        });
    };

    function equipmentExpired(equipment) {
        return 'Истек срок действия аттестации на оборудование: ' + equipment.name;
    }

    function getEquipmentLink(equipment) {
        switch(equipment.vendor) {
            case 'university': {
                return 'equipments';
            }
            case 'progress': {
                return 'equipmentsProgress';
            }
        }
    }

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