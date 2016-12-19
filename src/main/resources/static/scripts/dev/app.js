angular.module('app', ['ui.router', 'ngCookies'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/events');

        $stateProvider
            .state('/', {
                url: '/',
                abstact: 'true'
            })

            .state('events', {
                url: '/events',
                controller: 'EventsController',
                controllerAs: 'eventsCtrl',
                templateUrl: 'scripts/dev/activity/events-activity.tmpl.html'
            })
    });

/*Controllers*/
angular.module('app')
    .controller('EventsController', EventsController)
    .controller('AddEventDialogController', AddEventDialogController);


/*Directives*/
angular.module('app')
    .directive('dialogWrap', dialogWrapDirective)
    .directive('eventsLayout', eventsLayoutDirective)
    .directive('eventItem', eventItemDirective)
    .directive('mainHeader', mainHeaderDirective);

/*Factories*/
angular.module('app')
    .factory('dialogWrapFactory', dialogWrapFactory)
    .factory('eventsFactory', eventsFactory)
    .factory('restServiceFactory', restServiceFactory);
