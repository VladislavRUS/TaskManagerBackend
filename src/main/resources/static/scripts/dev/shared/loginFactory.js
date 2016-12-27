function loginFactory($rootScope){
    var factory = {};

    factory.loggedIn = false;

    factory.login = function(params) {
        if (params.name == 'evgenonil1' && params.password == '777') {
            factory.loggedIn = true;
            $rootScope.$emit('user:loggedIn');
        }
    };

    factory.logout = function() {
        factory.loggedIn = factory;
        $rootScope.$emit('user:loggedOut');
    };

    return factory;
}