function dialogWrapFactory($timeout) {
    var factory = {};

    var templateUrl, isOpened = false;

    factory.open = function(url) {
        templateUrl = url;
        isOpened = true;

        $timeout(function() {
            var popup = angular.element(document).find('.jsPopup');
            popup.css({
                'opacity': 1
            });
        }, 100);
    };

    factory.close = function() {
        templateUrl = '';
        isOpened = false;
    };

    factory.getTemplateUrl = function() {
        return templateUrl;
    };

    factory.getOpenState = function() {
        return isOpened;
    };

    return factory;
}