function detailsFactory($http, restServiceFactory, dateFactory, notificationsFactory) {
    var factory = {};

    var detailTypeValue = 'details',
        detailTypeName = 'Виброизоляторы',

        contractTypeValue = 'contracts',
        contractTypeName = 'Договоры';

    factory.getDetails = function () {
        $http.get(restServiceFactory.detailsReadAll).then(function (resp) {

            notificationsFactory.clearNotifications([detailTypeValue, contractTypeValue]);

            factory.details = resp.data;

            for (var i = 0; i < factory.details.length; i++) {
                var detail = factory.details[i];

                var expired = new Date(detail.expirationDate).getTime() < new Date().getTime();

                if (expired) {
                    notificationsFactory.addNotification({
                        type: { value: detailTypeValue, name: detailTypeName },
                        text: 'Истек срок действия ПИ на виброизолятор: ' + detail.name,
                        link: detailTypeValue + '?uuid=' + detail.uuid,
                        color: 'red'
                    });
                }

                var contracts = detail.contracts;
                for (var j = 0; j < detail.contracts.length; j++) {
                    var contract = detail.contracts[j];

                    var expiresIn = dateFactory.expiresIn(contract.quoter, contract.year);

                    if (expiresIn == -1) {
                        notificationsFactory.addNotification({
                            type: { value: contractTypeValue, name: contractTypeName},
                            text: 'Истек срок выполнения договора: ' + contract.agreement + '. Виброизолятор: ' + detail.name,
                            link: detailTypeValue + '?uuid=' + detail.uuid,
                            color: 'red'
                        });

                    } else if(expiresIn !== 100) {
                        notificationsFactory.addNotification({
                            type: { value: contractTypeValue, name: contractTypeName },
                            text: 'До выполнения обязательств по договору: ' + contract.agreement + ' осталось дней: ' + expiresIn +'. Виброизолятор: ' + detail.name,
                            link: detailTypeValue + '?uuid=' + detail.uuid,
                            color: 'yellow'
                        });
                    }
                }
            }
        });
    };

    factory.addContractToDetail = function (detail, contract) {
        $http.post(restServiceFactory.createContract.replace('{detailUUID}', detail.uuid), contract).then(function (resp) {
            factory.getDetails();
        })
    };

    factory.deleteContractFromDetail = function (detail, contract) {
        var url = restServiceFactory.deleteContract;
        url = url.replace('{detailUUID}', detail.uuid);
        url = url.replace('{UUID}', contract.uuid);

        $http.delete(url).then(function (resp) {
            factory.getDetails();
        })
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
        $http.put(restServiceFactory.updateContract.replace('{UUID}', contract.uuid), contract).then(function() {
            factory.getDetails();
        });
    };

    return factory;
}