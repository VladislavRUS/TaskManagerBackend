function loginLandingDirective(loginFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/login/landing/login-landing.tmpl.html',
        controller: function() {
            var self = this;

            self.login = function() {
                var params = {
                    name: self.name,
                    password: self.password
                };

                loginFactory.login(params);

                self.name = '';
                self.password = '';
            }
        },
        controllerAs: 'loginLandingCtrl'
    }
}