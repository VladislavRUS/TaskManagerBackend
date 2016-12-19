function dialogWrapDirective(dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/dialog/wrap/dialog-wrap.tmpl.html',
        controller: function() {
            var self = this;

            self.getTemplateUrl = function() {
                return dialogWrapFactory.getTemplateUrl();
            };

            self.show = function() {
                return dialogWrapFactory.getOpenState();
            };

            self.close = function() {
                dialogWrapFactory.close();
            };
        },
        controllerAs: 'dialogWrapCtrl'
    }
}