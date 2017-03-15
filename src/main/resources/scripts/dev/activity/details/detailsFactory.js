function detailsFactory($http, $rootScope, printFactory, restServiceFactory, dateFactory, notificationsFactory) {
    var factory = {};

    var detailTypeValue = 'details',
        detailTypeName = 'Виброизоляторы',

        contractTypeValue = 'contracts',
        contractTypeName = 'Договоры';

    factory.getDetails = function () {
        printFactory.clear();

        $http.get(restServiceFactory.detailsReadAll).then(function (resp) {

            notificationsFactory.clearNotifications([detailTypeValue, contractTypeValue]);

            factory.details = resp.data;

            for (var i = 0; i < factory.details.length; i++) {
                var detail = factory.details[i];

                var expired = new Date(detail.expirationDate).getTime() < new Date().getTime();

                if (expired) {
                    notificationsFactory.addNotification({
                        type: { value: detailTypeValue, name: detailTypeName, style: '_expired' },
                        text: detailExpired(detail),
                        link: detailTypeValue + '?uuid=' + detail.uuid
                    });
                }

                var contracts = detail.contracts;
                for (var j = 0; j < detail.contracts.length; j++) {
                    var contract = detail.contracts[j];

                    var expiresIn = dateFactory.expiresIn(contract.quoter, contract.year);

                    if (expiresIn == -1) {
                        notificationsFactory.addNotification({
                            type: { value: contractTypeValue, name: contractTypeName, style: '_expired'},
                            text: contractExpired(contract, detail),
                            link: detailTypeValue + '?uuid=' + detail.uuid
                        });

                    } else if(expiresIn !== 100) {
                        notificationsFactory.addNotification({
                            type: { value: contractTypeValue, name: contractTypeName, style: '_soon' },
                            text: contractSoon(contract, detail, expiresIn),
                            link: detailTypeValue + '?uuid=' + detail.uuid
                        });
                    }
                }
            }
        });
    };

    function detailExpired(detail) {
        return 'Истек срок действия ПИ на виброизолятор: ' + detail.name;
    }

    function contractExpired(contract, detail) {
        return 'Истек срок выполнения договора: ' + contract.agreement + '. Виброизолятор: ' + detail.name;
    }

    function contractSoon(contract, detail, expiresIn) {
        return 'До выполнения обязательств по договору: ' + contract.agreement + ' осталось дней: ' + expiresIn +'. Виброизолятор: ' + detail.name;
    }

    factory.addContractToDetail = function (detail, contract) {
        $http.post(restServiceFactory.createContract.replace('{detailUUID}', detail.uuid), contract).then(function (resp) {
            factory.getDetails();
        })
    };


    factory.addAccessoryToDetail = function(accessory) {
        $http.post(restServiceFactory.accessoriesCreate, accessory).then(function(resp) {
            factory.getDetails();
        })
    };
    
    factory.deleteContract = function (detail, contract) {
        var url = restServiceFactory.deleteContract
            .replace('{UUID}', contract.uuid);

        $http.delete(url).then(function () {
            for (var i = 0; i < detail.contracts.length; i++) {
                if (detail.contracts[i].uuid == contract.uuid) {
                    detail.contracts.splice(i, 1);
                    break;
                }
            }
        });
    };

    factory.createDetail = function (detail) {
        $http.post(restServiceFactory.detailsCreate, detail).then(function (resp) {
            factory.getDetails();
        })
    };

    factory.deleteDetail = function (detail) {
        $http.delete(restServiceFactory.detailsDelete.replace('{UUID}', detail.uuid)).then(function (data) {
            factory.getDetails();
        })
    };

    factory.updateContract = function(contract) {
        $http.put(restServiceFactory.updateContract, contract).then(function() {
            factory.getDetails();
        });
    };

    factory.updateAccessory = function(accessory) {
        $http.put(restServiceFactory.accessoriesUpdate, accessory).then(function() {
            factory.getDetails();
        });
    };

    $rootScope.$on('data:update', function() {
        factory.getDetails();
    });

    return factory;
}