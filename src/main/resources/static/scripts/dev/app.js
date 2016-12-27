angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate', 'duScroll'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/details');

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
    });

/*Controllers*/
angular.module('app')
    .controller('AddEventDialogController', AddEventDialogController)
    .controller('AddContractDialogController', AddContractDialogController)
    .controller('AddDetailDialogController', AddDetailDialogController)
    .controller('DetailsController', DetailsController)
    .controller('EventsController', EventsController)
    .controller('NotificationsController', NotificationsController);


/*Directives*/
angular.module('app')
    .directive('dialogWrap', dialogWrapDirective)
    .directive('detailsLayout', detailsLayoutDirective)
    .directive('detailItem', detailItemDirective)
    .directive('detailContract', detailContractDirective)
    .directive('eventsLayout', eventsLayoutDirective)
    .directive('eventItem', eventItemDirective)
    .directive('mainHeader', mainHeaderDirective)
    .directive('notificationsLayout', notificationsLayoutDirective);

/*Factories*/
angular.module('app')
    .factory('dateFactory', dateFactory)
    .factory('dialogWrapFactory', dialogWrapFactory)
    .factory('detailsFactory', detailsFactory)
    .factory('eventsFactory', eventsFactory)
    .factory('restServiceFactory', restServiceFactory)
    .factory('notificationsFactory', notificationsFactory);

/*Animations*/
angular.module('app')
    .animation('.tableAnimation', tableAnimation);