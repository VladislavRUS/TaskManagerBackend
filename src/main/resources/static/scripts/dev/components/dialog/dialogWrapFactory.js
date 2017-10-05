function dialogWrapFactory($timeout) {
    var factory = {};

    factory.dialogOpened = false;
    factory.templateUrl = '';
    factory.params = null;

    var delay = 100;

    factory.openDialog = function(templateUrl, params) {
        factory.templateUrl = templateUrl;
        factory.params = params;
        factory.dialogOpened = true;

        $timeout(dialogIn, delay);
    }

    factory.closeDialog = function(params) {

        dialogOut();

        $timeout(function() {
            factory.dialogOpened = false;
            factory.params = null;
            factory.templateUrl = null;
        }, delay * 2);
    }

    factory.getParams = function() {
        return factory.params;
    }

    function dialogIn() {
        $('#dialog').css({
            'opacity': 1
        });

        $('#dialogContent').css({
            'opacity': 1,
            'transform': 'scale(1)'
        });
    }

    function dialogOut() {
        $('#dialog').css({
            'opacity': 0
        });

        $('#dialogContent').css({
            'opacity': 0,
            'transform': 'scale(0)'
        });
    }

    return factory;
}