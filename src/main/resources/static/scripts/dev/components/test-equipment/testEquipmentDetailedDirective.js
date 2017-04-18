function testEquipmentDetailedDirective($state, $timeout, testEquipmentsFactory) {
	return {
		scope: {},
		bindToController: {
			testEquipment: '<'
		},
		templateUrl: 'scripts/dev/components/test-equipment/test-equipment-detailed.tmpl.html',
		controller: function () {
			var self = this;

			self.onUpdate = function () {
				testEquipmentsFactory.updateTestEquipment(self.testEquipment).then(function () {
					self.showAlert = true;

					$timeout(function () {
						self.showAlert = false;
					}, 3000);
				});
			};

			self.onDelete = function () {
				var vendor = self.testEquipment.vendor;

				testEquipmentsFactory.deleteTestEquipment(self.testEquipment).then(function () {
					$state.go('test-equipments', {vendor: vendor});
				});
			};
		},
		controllerAs: 'ctrl'
	}
}