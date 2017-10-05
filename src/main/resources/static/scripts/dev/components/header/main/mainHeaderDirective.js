function mainHeaderDirective($state, $stateParams, notificationsFactory) {
	return {
		scope: {},
		bindToController: {},
		templateUrl: 'scripts/dev/components/header/main/main-header.tmpl.html',
		controller: function () {
			var self = this;

			self.storage = notificationsFactory;

			self.currentState = function () {
				return $state.current.name;
			};

			self.inState = function (stateNames) {
				for (var i = 0; i < stateNames.length; i++) {
					if (stateNames[i] == 'test-equipments') {
						return stateNames[i + 1] == $stateParams.vendor;

					} else if (stateNames[i] == $state.current.name) {
						return true;
					}
				}

				return false;
			};

			self.orState = function (states) {
				for (var i = 0; i < states.length; i++) {
					if (states[i] == $state.current.name) {
						return true;
					}
				}
			}

		},
		controllerAs: 'mainHeaderCtrl',
		link: function() {
			$('.ui.dropdown').dropdown()
		}
	}
}