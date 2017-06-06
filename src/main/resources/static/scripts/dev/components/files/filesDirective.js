function filesDirective($state, $timeout, fileFactory, modalFactory) {
	return {
		scope: {},
		bindToController: {
			object: '<'
		},
		templateUrl: 'scripts/dev/components/files/files.tmpl.html',
		controller: function () {
			var self = this;
			var modalId = 'createFileModal';
			self.animated = false;

			self.files = [];

			fileFactory.getFiles(self.object).then(function(files) {
				self.files = self.files.concat(files);
			});

			self.onAdd = function () {
				modalFactory.openModal(modalId);
			};

			self.onDelete = function (file) {
				fileFactory.deleteFile(file).then(function() {
					$state.reload();
				})
			};

			self.addFile = function () {
				self.animated = true;

				var fileInfo = {
					name: self.name,
					objectUuid: self.object.uuid
				};

				fileFactory.createFile('file', fileInfo).then(function () {
					modalFactory.closeModal(modalId);
					self.animated = false;

					$timeout(function() {
						$state.reload();
					}, 500);

				}, function() {
					self.animated = false;
					self.errShow = true;
					self.errMessage = 'Размер файла превышает допустимые 50 МБ!';

					$timeout(function() {
						self.errShow = false;

					}, 10000);
				})
			};

			self.onOpen = function (file) {
				var decoded = fileFactory.decode(file.data);
				fileFactory.makeFile(decoded, file.name + file.extension);
			}
		},
		controllerAs: 'ctrl'
	}
}