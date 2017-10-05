function testEquipmentDetailedDirective($state, toastFactory, testEquipmentsFactory) {
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
					toastFactory.successToast('Испытательное оборудование успешно обновлено!')
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