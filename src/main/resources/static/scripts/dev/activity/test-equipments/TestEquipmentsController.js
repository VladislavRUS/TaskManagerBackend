function TestEquipmentsController($rootScope, testEquipmentsFactory) {
	var self = this;

	testEquipmentsFactory.getTestEquipments();
	$rootScope.$emit('updateNotifications');
}