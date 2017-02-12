angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate'])
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

            .state('detailsProgress', {
                url: '/detailsProgress?uuid',
                controller: 'DetailsProgressController',
                controllerAs: 'detailsProgressCtrl',
                templateUrl: 'scripts/dev/activity/details-progress/details-progress-activity.tmpl.html'
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

            .state('equipmentsProgress', {
                url: '/equipmentsProgress',
                controller: 'EquipmentsProgressController',
                controllerAs: 'equipmentsProgressCtrl',
                templateUrl: 'scripts/dev/activity/equipments-progress/equipments-progress-activity.tmpl.html'
            })
    });

/*Controllers*/
angular.module('app')
    .controller('AddEventDialogController', AddEventDialogController)
    .controller('AddContractDialogController', AddContractDialogController)
    .controller('AddDetailDialogController', AddDetailDialogController)
    .controller('AddStepDialogController', AddStepDialogController)
    .controller('AddProgressDetailDialogController', AddProgressDetailDialogController)
    .controller('AddEquipmentDialogController', AddEquipmentDialogController)
    .controller('DetailsController', DetailsController)
    .controller('DetailsProgressController', DetailsProgressController)
    .controller('EventsController', EventsController)
    .controller('EquipmentsController', EquipmentsController)
    .controller('EquipmentsProgressController', EquipmentsProgressController)
    .controller('EditContractDialogController', EditContractDialogController)
    .controller('NotificationsController', NotificationsController);


/*Directives*/
angular.module('app')
    .directive('dialogWrap', dialogWrapDirective)
    .directive('detailsLayout', detailsLayoutDirective)
    .directive('detailsProgressLayout', detailsProgressLayoutDirective)
    .directive('detailItem', detailItemDirective)
    .directive('detailProgressItem', detailProgressItemDirective)
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
    .factory('detailsProgressFactory', detailsProgressFactory)
    .factory('eventsFactory', eventsFactory)
    .factory('equipmentsFactory', equipmentsFactory)
    .factory('loginFactory', loginFactory)
    .factory('restServiceFactory', restServiceFactory)
    .factory('notificationsFactory', notificationsFactory);

/*Animations*/
angular.module('app')
    .animation('.tableAnimation', tableAnimation);