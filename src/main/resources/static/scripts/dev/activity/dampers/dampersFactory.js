function dampersFactory($http, $q, $rootScope, constantsFactory, restServiceFactory) {
    var factory = {};
    factory.dampers = [];

    factory.createDamper = function (damper) {
        var deferred = $q.defer();

        var url = restServiceFactory.dampersCreate;

        $http.post(url, damper).then(function (resp) {

            factory.getDampers().then(deferred.resolve);

        }, function () {
            deferred.reject();
        });

        return deferred.promise;
    };

    factory.deleteDamper = function (damper) {
        var deferred = $q.defer();

        $http.delete(restServiceFactory.dampersDelete.replace('{uuid}', damper.uuid)).then(function (data) {
            factory.getDampers().then(deferred.resolve);
        });

        return deferred.promise;
    };


    factory.getDampers = function () {
        var deferred = $q.defer();

        $http.get(restServiceFactory.dampersAll).then(function (resp) {

            factory.dampers = resp.data;
            factory.dampers.forEach(function(d) {
                d.expirationDate = new Date(d.expirationDate);

                d.contracts.forEach(function (c) {
                    c.fromDate = new Date(c.fromDate);
                });
            });

            deferred.resolve();
        });

        return deferred.promise;
    };

    factory.updateDamper = function (damper) {
        var deferred = $q.defer();

        var url = restServiceFactory.dampersUpdate.replace('{uuid}', damper.uuid);

        $http.put(url, damper).then(function (resp) {
            factory.getDampers().then(deferred.resolve);
        });

        return deferred.promise;
    };

    factory.getDamper = function(uuid) {
        var deferred = $q.defer();

        if (factory.dampers) {
            deferred.resolve(factory.findDamper(uuid));

        } else {
            factory.getDampers().then(function() {
                deferred.resolve(factory.findDamper(uuid));
            });
        }

        return deferred.promise;
    };

    factory.addContractToDamper = function (damper, contract) {
        var deferred = $q.defer();

        var url = restServiceFactory.dampersCreateContract.replace('{uuid}', damper.uuid);

        $http.post(url, contract).then(function (resp) {

            factory.getDampers().then(function() {
                deferred.resolve();
            });

        });

        return deferred.promise;
    };

    factory.updateContract = function(contract) {
        var deferred = $q.defer();

        var url = restServiceFactory.contractUpdate;

        $http.put(url, contract).then(function() {
            factory.getDampers().then(function() {
                deferred.resolve();
            });
        });

        return deferred.promise;
    };

    factory.deleteContract = function (contract) {
        var deferred = $q.defer();

        var url = restServiceFactory.contractDelete.replace('{uuid}', contract.uuid);

        $http.delete(url).then(function () {

            factory.getDampers().then(function() {
                deferred.resolve();
            });
        });

        return deferred.promise;
    };

    factory.addAccessoryToDamper = function(damper, accessory) {
        var deferred = $q.defer();

        var url = restServiceFactory.dampersCreateAccessory.replace('{uuid}', damper.uuid);

        $http.post(url, accessory).then(function(resp) {

            factory.getDampers().then(function() {
                deferred.resolve();
            });
        });

        return deferred.promise;
    };

    factory.updateAccessory = function(accessory) {
        var deferred = $q.defer();

        var url = restServiceFactory.accessoriesUpdate.replace('{uuid}', accessory.uuid);

        $http.put(url, accessory).then(function() {

            factory.getDampers().then(function() {
                deferred.resolve();
            });

        });

        return deferred.promise;
    };

    factory.deleteAccessory = function(accessory) {
        var deferred = $q.defer();

        var url = restServiceFactory.accessoriesDelete.replace('{uuid}', accessory.uuid);

        $http.delete(url, accessory).then(function() {

            factory.getDampers().then(function () {
                deferred.resolve();
            });

        });

        return deferred.promise;
    };

    factory.findDamper = function(uuid) {
        for (var i = 0; i < factory.dampers.length; i++) {
            if (factory.dampers[i].uuid === uuid) {
                return factory.dampers[i];
            }
        }
    };

    return factory;
}