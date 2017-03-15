function dialogWrapFactory($timeout) {
    var factory = {};

    var templateUrl, isOpened = false, factoryParams = null;

    factory.open = function(url, params) {
        templateUrl = url;
        isOpened = true;
        factoryParams = params;

        $timeout(function() {
            var popup = angular.element(document).find('.jsPopup');
            popup.css({
                'transform': 'scale(1)',
                'opacity': '1'
            });
        }, 100);
    };

    factory.close = function() {
        templateUrl = '';
        isOpened = false;
        factoryParams = null;
    };

    factory.getTemplateUrl = function() {
        return templateUrl;
    };

    factory.getOpenState = function() {
        return isOpened;
    };

    factory.getParams = function() {
        return factoryParams;
    };

    return factory;
}