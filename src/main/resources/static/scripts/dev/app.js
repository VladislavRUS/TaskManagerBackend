angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate', 'duScroll'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/notifications');

        $stateProvider
            .state('/', {
                url: '/',
                abstact: 'true'
            })

            .state('events', {
                url: '/events',
                controller: 'EventsController',
                controllerAs: 'eventsCtrl',
                templateUrl: 'scripts/dev/activity/events/events-activity.tmpl.html'
            })

            .state('details', {
                url: '/details?uuid',
                controller: 'DetailsController',
                controllerAs: 'detailsCtrl',
                templateUrl: 'scripts/dev/activity/details/details-activity.tmpl.html'
            })

            .state('notifications', {
                url: '/notifications',
                controller: 'NotificationsController',
                controllerAs: 'notificationsCtrl',
                templateUrl: 'scripts/dev/activity/notifications/notifictions-activity.tmpl.html'
            })

            .state('equipments', {
                url: '/equipments',
                controller: 'EquipmentsController',
                controllerAs: 'equipmentsCtrl',
                templateUrl: 'scripts/dev/activity/equipments/equipments-activity.tmpl.html'
            })
    });

/*Controllers*/
angular.module('app')
    .controller('AddEventDialogController', AddEventDialogController)
    .controller('AddContractDialogController', AddContractDialogController)
    .controller('AddDetailDialogController', AddDetailDialogController)
    .controller('AddEquipmentDialogController', AddEquipmentDialogController)
    .controller('DetailsController', DetailsController)
    .controller('EventsController', EventsController)
    .controller('EquipmentsController', EquipmentsController)
    .controller('EditContractDialogController', EditContractDialogController)
    .controller('NotificationsController', NotificationsController);


/*Directives*/
angular.module('app')
    .directive('dialogWrap', dialogWrapDirective)
    .directive('detailsLayout', detailsLayoutDirective)
    .directive('detailItem', detailItemDirective)
    .directive('detailContract', detailContractDirective)
    .directive('eventsLayout', eventsLayoutDirective)
    .directive('eventItem', eventItemDirective)
    .directive('equipmentsLayout', equipmentsLayoutDirective)
    .directive('equipmentItem', equipmentItemDirective)
    .directive('loginLanding', loginLandingDirective)
    .directive('mainHeader', mainHeaderDirective)
    .directive('notificationsLayout', notificationsLayoutDirective);

/*Factories*/
angular.module('app')
    .factory('dateFactory', dateFactory)
    .factory('dialogWrapFactory', dialogWrapFactory)
    .factory('detailsFactory', detailsFactory)
    .factory('eventsFactory', eventsFactory)
    .factory('equipmentsFactory', equipmentsFactory)
    .factory('loginFactory', loginFactory)
    .factory('restServiceFactory', restServiceFactory)
    .factory('notificationsFactory', notificationsFactory);

/*Animations*/
angular.module('app')
    .animation('.tableAnimation', tableAnimation);