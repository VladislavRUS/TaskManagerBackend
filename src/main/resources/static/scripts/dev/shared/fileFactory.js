function fileFactory($q, $http, restServiceFactory) {
	var factory = {};

	factory.getFiles = function (object) {
		var deferred = $q.defer();

		var url = restServiceFactory.filesAll.replace('{object_uuid}', object.uuid);

		$http.get(url).then(function(resp) {

			deferred.resolve(resp.data);

		}, function(err) {

			deferred.reject();

			console.log(err);
		});

		return deferred.promise;
	};

	factory.deleteFile = function (file) {
		var deferred = $q.defer();

		var url = restServiceFactory.filesDelete.replace('{UUID}', file.uuid);

		$http.delete(url).then(function() {
			deferred.resolve();


		}, function (err) {
			console.log(err);
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.createFile = function (id, fileInfo) {
		var deferred = $q.defer();

		factory.encode(id).then(function (result) {

			var file =  {
				objectUuid: fileInfo.objectUuid,
				name: fileInfo.name,
				extension: result.extension,
				data: result.data
			};

			var url = restServiceFactory.filesCreate;

			$http.post(url, file).then(function() {

				deferred.resolve();

			}, function (err) {
				console.log(err);
				deferred.reject();
			});
		}, function () {
			deferred.reject();
		});

		return deferred.promise;
	};

	factory.encode = function (id) {
		var deferred = $q.defer();

		var file = document.getElementById(id).files[0];
		var size = file.size / (1024 * 1024);

		if (size > 50) {
			deferred.reject();
		}

		var fileName = file.name;

		var reader = new FileReader();

		reader.readAsArrayBuffer(file);

		reader.onloadend = function (e) {
			var binary = '';

			var bytes = new Uint8Array(e.target.result);

			var len = bytes.byteLength;
			for (var i = 0; i < len; i++) {
				binary += String.fromCharCode(bytes[i]);
			}

			var encoded = window.btoa(binary);

			var result = {
				extension: getExtension(fileName),
				data: encoded
			};

			deferred.resolve(result);
		};

		return deferred.promise;
	};

	function getExtension(fileName) {
		var ext = '';

		for (var i = fileName.length - 1; i >= 0; i--) {
			ext += fileName[i];

			if (fileName[i] == '.') {
				return ext.split("").reverse().join("");
			}
		}

		throw new Error('No dot was found!')
	}

	factory.decode = function (base64String) {
		var decoded = window.atob(base64String);

		var byteNumber = new Array(decoded.length);
		for (var i = 0; i < decoded.length; i++) {
			byteNumber[i] = decoded.charCodeAt(i);
		}

		return new Uint8Array(byteNumber);
	};

	factory.makeFile = function (data, fileName) {
		var a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		var blob = new Blob([data], {type: 'mime'}),
			url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
	};

	return factory;
}