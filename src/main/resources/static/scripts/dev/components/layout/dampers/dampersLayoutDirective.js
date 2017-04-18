function dampersLayoutDirective($timeout, $state, notificationsFactory, dampersFactory, printFactory) {
	return {
		scope: {},
		bindToController: {},
		templateUrl: 'scripts/dev/components/layout/dampers/dampers-layout.tmpl.html',
		controller: function () {
			var self = this;
			self.storage = dampersFactory;
			self.nf = notificationsFactory;

			self.print = [];

			self.onAdd = function () {
				openModal('createDamperModal');
			};

			self.save = function () {
				var damper = {
					name: self.name,
					designation: self.designation,
					expirationDate: self.expirationDate,
					inspectionMethods: self.inspectionMethods,
					controlType: self.controlType,
					measurementMeans: self.measurementMeans,
					guarantee: self.guarantee,
					fiatLabeling: self.fiatLabeling,
					note: self.note
				};

				dampersFactory.createDamper(damper).then(function () {

					self.nf.getNotifications().then(function () {
						closeModal('createDamperModal');
						reloadState();
					});
				});
			};

			self.inPrint = function (uuid) {
				for (var i = 0; i < self.print.length; i++) {
					if (self.print[i] === uuid) {
						return true;
					}
				}

				return false;
			};

			self.onClick = function (damper, event) {
				if (event.ctrlKey) {
					if (self.inPrint(damper.uuid)) {
						for (var i = 0; i < self.print.length; i++) {
							if (self.print[i] == damper.uuid) {
								self.print.splice(i, 1);
								break;
							}
						}

					} else {
						self.print.push(damper.uuid);
					}

				} else {
					$state.go('dampers-detailed', {uuid: damper.uuid});
				}
			};

			self.onPrint = function () {
				printFactory.sendToPrint('dampers', JSON.parse(JSON.stringify(self.print)));
				self.print = [];
			};

			function closeModal(id) {
				var el = angular.element(document).find('#' + id);
				el.modal('hide');
			}

			function openModal(id) {
				var el = angular.element(document).find('#' + id);
				el.modal('show');
			}

			function reloadState() {
				$timeout(function () {
					$state.reload();
				}, 500);
			}
		},
		controllerAs: 'ctrl'
	}
}