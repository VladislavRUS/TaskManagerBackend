function responseInterceptor($q, $timeout, $injector) {
    return {
        response: function(response) {


            $timeout(function() {
				var nf = $injector.get('notificationsFactory');
				nf.getNotifications();
            }, 2000);

            return response;
        }
    }
}