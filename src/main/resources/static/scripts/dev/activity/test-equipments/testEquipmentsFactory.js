function testEquipmentsFactory($http, $q, restServiceFactory) {
	var factory = {};
	factory.testEquipments = [];

	factory.createTestEquipment = function (testEquipment) {
		var deferred = $q.defer();

		$http.post(restServiceFactory.testEquipmentsCreate, testEquipment).then(function (resp) {
			factory.getTestEquipments().then(deferred.resolve);

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.getTestEquipments = function () {
		var deferred = $q.defer();

		$http.get(restServiceFactory.testEquipmentsAll).then(function (resp) {
			factory.testEquipments = resp.data;

            factory.testEquipments .forEach(function(t) {
                t.expirationDate = new Date(t.expirationDate);
            });

			deferred.resolve();

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.updateTestEquipment = function(testEquipment) {
		var deferred = $q.defer();

		$http.put(restServiceFactory.testEquipmentsUpdate.replace('{uuid}', testEquipment.uuid), testEquipment).then(function (data) {
			factory.getTestEquipments().then(deferred.resolve);
		});

		return deferred.promise;
	};

	factory.deleteTestEquipment = function (testEquipment) {
		var deferred = $q.defer();

		$http.delete(restServiceFactory.testEquipmentsDelete.replace('{UUID}', testEquipment.uuid)).then(function (data) {
			factory.getTestEquipments().then(deferred.resolve);
		});

		return deferred.promise;
	};

    function findTestEquipment(uuid) {
        for (var i = 0; i < factory.testEquipments.length; i++) {
            if (factory.testEquipments[i].uuid == uuid) {
                return factory.testEquipments[i];
            }
        }
    }

    factory.getTestEquipment = function(uuid) {
        var deferred = $q.defer();

        if (factory.testEquipments) {
            deferred.resolve(findTestEquipment(uuid));

        } else {
            factory.getTestEquipments().then(function() {
            	var testEquipment = findTestEquipment(uuid);
                deferred.resolve(testEquipment);
            });
        }

        return deferred.promise;
    };

	return factory;
}