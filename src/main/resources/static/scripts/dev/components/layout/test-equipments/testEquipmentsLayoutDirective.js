function testEquipmentsLayoutDirective($stateParams, $timeout, $state, testEquipmentsFactory, notificationsFactory) {
	return {
		scope: {},
		bindToController: {},
		templateUrl: 'scripts/dev/components/layout/test-equipments/test-equipments-layout.tmpl.html',
		controller: function() {
			var self = this;

			self.storage = testEquipmentsFactory;
			self.vendor = $stateParams.vendor;
			self.nf = notificationsFactory;

			self.onAdd = function() {
				openModal('createTestEquipmentModal');
			};

			self.save = function() {
				var testEquipment = {
					name: self.name,
                    number: self.number,
                    type: self.type,
					expirationDate: self.expirationDate,
					vendor: self.vendor
				};

				testEquipmentsFactory.createTestEquipment(testEquipment).then(function() {
					self.nf.getNotifications().then(function () {
						closeModal('createTestEquipmentModal');
						reloadState();
					});
				});
			};

			self.vendorFilter = function(testEquipment) {
				return testEquipment.vendor == self.vendor;
			};

			self.onClick = function(testEquipment) {
                $state.go('test-equipments-detailed', { uuid: testEquipment.uuid });
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