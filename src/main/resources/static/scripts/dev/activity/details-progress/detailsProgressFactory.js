function detailsProgressFactory($http, $rootScope, restServiceFactory, dateFactory, notificationsFactory) {
    var factory = {};

    var detailProgressTypeValue = 'detailsProgress',
        detailProgressTypeName = 'Оборудование НИОКР',

        stepTypeValue = 'steps',
        stepTypeName = 'Этапы';

    factory.getDetails = function () {
        $http.get(restServiceFactory.detailsProgressReadAll).then(function (resp) {

            notificationsFactory.clearNotifications([detailProgressTypeValue, stepTypeValue]);

            factory.details = resp.data;

            for (var i = 0; i < factory.details.length; i++) {
                var detail = factory.details[i];

                console.log(detail);
                var steps = detail.steps;

                for (var j = 0; j < steps.length; j++) {
                    var step = steps[j];

                    if (new Date(step.expirationDate).getTime() < new Date().getTime()) {

                        notificationsFactory.addNotification({
                            type: { value: stepTypeValue, name: stepTypeName, style: '_expired' },
                            text: stepExpired(step, detail),
                            link: detailProgressTypeValue + '?uuid=' + detail.uuid
                        });
                    }
                }
            }
        });
    };

    function stepExpired(step, detail) {
        return 'Завершен этап под номером: ' + step.number + '. Оборудование НИОКР: ' + detail.description;
    }

    factory.addStepToDetail = function (detail, step) {
        $http.post(restServiceFactory.stepsCreate, step).then(function (resp) {
            factory.getDetails();
        });
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
        $http.post(restServiceFactory.detailsProgressCreate, detail).then(function (resp) {
            factory.getDetails();
        })
    };

    factory.deleteDetail = function (detail) {
        $http.delete(restServiceFactory.detailsProgressDelete.replace('{UUID}', detail.uuid)).then(function (data) {
            factory.getDetails();
        })
    };

    factory.updateContract = function(contract) {
        $http.put(restServiceFactory.updateContract.replace('{UUID}', contract.uuid), contract).then(function() {
            factory.getDetails();
        });
    };

    $rootScope.$on('data:update', factory.getDetails);

    return factory;
}