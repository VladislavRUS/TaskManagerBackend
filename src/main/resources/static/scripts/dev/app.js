angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate', 'duScroll', 'ui.calendar'])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise('/notifications');

        $stateProvider
            .state('/', {
                url: '/',
                abstract: 'true'
            })

            .state('dampers', {
                url: '/dampers',
                controller: 'DampersController',
                controllerAs: 'dampersCtrl',
                templateUrl: 'scripts/dev/activity/dampers/dampers-activity.tmpl.html'
            })

            .state('dampers-detailed', {
                url: '/dampers-detailed/{uuid}',
                controller: 'DampersDetailedController',
                controllerAs: 'dampersDetailedCtrl',
                templateUrl: 'scripts/dev/activity/dampers/detailed/dampers-detailed-activity.tmpl.html'
            })

            .state('calendar', {
                url: '/calendar',
                controller: 'CalendarController',
                controllerAs: 'calendarCtrl',
                templateUrl: 'scripts/dev/activity/calendar/calendar-activity.tmpl.html'
            })

            .state('notifications', {
                url: '/notifications',
                controller: 'NotificationsController',
                controllerAs: 'notificationsCtrl',
                templateUrl: 'scripts/dev/activity/notifications/notifictions-activity.tmpl.html'
            })

            .state('test-equipments', {
                url: '/test-equipments/:vendor',
                controller: 'TestEquipmentsController',
                controllerAs: 'testEquipmentsCtrl',
                templateUrl: 'scripts/dev/activity/test-equipments/test-equipments-activity.tmpl.html'
            })

            .state('test-equipments-detailed', {
                url: '/test-equipments-detailed/:uuid',
                controller: 'TestEquipmentsDetailedController',
                controllerAs: 'testEquipmentsDetailedCtrl',
                templateUrl: 'scripts/dev/activity/test-equipments/detailed/test-equipments-detailed-activity.tmpl.html'
            })

            .state('research-details', {
                url: '/research-details',
                controller: 'ResearchDetailsController',
                controllerAs: 'researchDetailsCtrl',
                templateUrl: 'scripts/dev/activity/research-details/research-details-activity.tmpl.html'
            })

            .state('research-details-detailed', {
                url: '/research-details-detailed/:uuid',
                controller: 'ResearchDetailsDetailedController',
                controllerAs: 'researchDetailsDetailedCtrl',
                templateUrl: 'scripts/dev/activity/research-details/detailed/research-details-detailed-activity.tmpl.html'
            })
    });

/*Controllers*/
angular.module('app')
    .controller('AddAccessoryDialogController', AddAccessoryDialogController)
    .controller('AddEventDialogController', AddEventDialogController)
    .controller('AddContractDialogController', AddContractDialogController)
    .controller('AddDetailDialogController', AddDetailDialogController)
    .controller('AddStepDialogController', AddStepDialogController)
    .controller('AddProgressDetailDialogController', AddProgressDetailDialogController)
    .controller('AddEquipmentDialogController', AddEquipmentDialogController)
    .controller('DetailsController', DetailsController)
    .controller('DampersController', DampersController)
    .controller('DampersDetailedController', DampersDetailedController)
    .controller('CalendarController', CalendarController)
    .controller('DetailsProgressController', DetailsProgressController)
    .controller('EventsController', EventsController)
    .controller('EquipmentsController', EquipmentsController)
    .controller('EquipmentsProgressController', EquipmentsProgressController)
    .controller('EditContractDialogController', EditContractDialogController)
    .controller('EditAccessoryDialogController', EditAccessoryDialogController)
    .controller('NotificationsController', NotificationsController)
    .controller('ResearchDetailsController', ResearchDetailsController)
    .controller('ResearchDetailsDetailedController', ResearchDetailsDetailedController)
    .controller('TestEquipmentsController', TestEquipmentsController)
    .controller('TestEquipmentsDetailedController', TestEquipmentsDetailedController);


/*Directives*/
angular.module('app')
    .directive('calendarLayout', calendarLayoutDirective)
    .directive('dialogWrap', dialogWrapDirective)
    .directive('detailsLayout', detailsLayoutDirective)
    .directive('dampersLayout', dampersLayoutDirective)
    .directive('damperDetailed', damperDetailedDirective)
    .directive('detailsProgressLayout', detailsProgressLayoutDirective)
    .directive('detailItem', detailItemDirective)
    .directive('detailProgressItem', detailProgressItemDirective)
    .directive('detailContract', detailContractDirective)
    .directive('detailContracts', detailContractsDirective)
    .directive('detailAccessory', detailAccessoryDirective)
    .directive('detailAccessories', detailAccessoriesDirective)
    .directive('eventsLayout', eventsLayoutDirective)
    .directive('eventItem', eventItemDirective)
    .directive('equipmentsLayout', equipmentsLayoutDirective)
    .directive('equipmentItem', equipmentItemDirective)
    .directive('files', filesDirective)
    .directive('loginLanding', loginLandingDirective)
    .directive('mainHeader', mainHeaderDirective)
    .directive('notificationsLayout', notificationsLayoutDirective)
    .directive('researchDetailsLayout', researchDetailsLayoutDirective)
    .directive('researchDetailDetailed', researchDetailDetailedDirective)
    .directive('testEquipmentsLayout', testEquipmentsLayoutDirective)
    .directive('testEquipmentDetailed', testEquipmentDetailedDirective);

/*Factories*/
angular.module('app')
    .factory('dateFactory', dateFactory)
    .factory('dampersFactory', dampersFactory)
    .factory('dialogWrapFactory', dialogWrapFactory)
    .factory('detailsFactory', detailsFactory)
    .factory('detailsProgressFactory', detailsProgressFactory)
    .factory('eventsFactory', eventsFactory)
    .factory('equipmentsFactory', equipmentsFactory)
    .factory('fileFactory', fileFactory)
    .factory('loginFactory', loginFactory)
    .factory('modalFactory', modalFactory)
    .factory('printFactory', printFactory)
    .factory('restServiceFactory', restServiceFactory)
    .factory('notificationsFactory', notificationsFactory)
    .factory('researchDetailsFactory', researchDetailsFactory)
    .factory('testEquipmentsFactory', testEquipmentsFactory);

/*Animations*/
angular.module('app')
    .animation('.slideAnimation', slideAnimation);