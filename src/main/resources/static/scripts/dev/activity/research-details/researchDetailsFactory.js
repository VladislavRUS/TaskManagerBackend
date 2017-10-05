function researchDetailsFactory($http, $q, restServiceFactory) {
	var factory = {};
	factory.researchDetails = [];

	factory.createResearchDetail = function (researchDetail) {
		var deferred = $q.defer();

		$http.post(restServiceFactory.researchDetailsCreate, researchDetail).then(function (resp) {
			factory.getResearchDetails().then(deferred.resolve);

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.getResearchDetails = function () {
		var deferred = $q.defer();

		$http.get(restServiceFactory.researchDetailsAll).then(function (resp) {
			factory.researchDetails = resp.data;

			factory.researchDetails.forEach(function (detail) {
				detail.steps.forEach(function (s) {
					s.expirationDate = new Date(s.expirationDate);
				});
			});

			deferred.resolve();

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.updateResearchDetail = function (researchDetail) {
		var deferred = $q.defer();

		$http.put(restServiceFactory.researchDetailsUpdate.replace('{UUID}', researchDetail.uuid), researchDetail).then(function (data) {
			factory.getResearchDetails().then(deferred.resolve);
		});

		return deferred.promise;
	};

	factory.deleteResearchDetail = function (researchDetail) {
		var deferred = $q.defer();

		$http.delete(restServiceFactory.researchDetailsDelete.replace('{UUID}', researchDetail.uuid)).then(function (data) {
			factory.getResearchDetails().then(deferred.resolve);
		});

		return deferred.promise;
	};

	function findResearchDetail(uuid) {
		for (var i = 0; i < factory.researchDetails.length; i++) {
			if (factory.researchDetails[i].uuid == uuid) {
				return factory.researchDetails[i];
			}
		}
	}

	factory.getResearchDetail = function (uuid) {
		var deferred = $q.defer();

		if (factory.researchDetails) {
			deferred.resolve(findResearchDetail(uuid));

		} else {
			factory.getResearchDetails().then(function () {
				var researchDetail = findResearchDetail(uuid);
				deferred.resolve(researchDetail);
			});
		}

		return deferred.promise;
	};

	factory.createStep = function (researchDetail, step) {
		var deferred = $q.defer();

		$http.post(restServiceFactory.researchDetailsCreateStep.replace('{UUID}', researchDetail.uuid), step).then(function () {

			factory.getResearchDetails().then(deferred.resolve);

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.updateStep = function (step) {
		var deferred = $q.defer();

		$http.put(restServiceFactory.researchDetailsUpdateStep.replace('{UUID}', step.uuid), step).then(function () {

			factory.getResearchDetails().then(function () {
				deferred.resolve();
			});

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.deleteStep = function (step) {
		var deferred = $q.defer();

		$http.delete(restServiceFactory.researchDetailsDeleteStep.replace('{UUID}', step.uuid), step).then(function () {

			factory.getResearchDetails().then(deferred.resolve);

		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.findResearchDetail = function (uuid) {
		for (var i = 0; i < factory.researchDetails.length; i++) {
			if (factory.researchDetails[i].uuid === uuid) {
				return factory.researchDetails[i];
			}
		}
	};

	return factory;
}