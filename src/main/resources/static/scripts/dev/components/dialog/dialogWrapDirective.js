function dialogWrapDirective($document, dialogWrapFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: 'scripts/dev/components/dialog/dialog-wrap.tmpl.html',
        controller: function() {
            var self = this;
            self.dialogWrapFactory = dialogWrapFactory;

            self.close = function() {
                dialogWrapFactory.closeDialog();
            }

            self.getTemplateUrl = function() {
                return dialogWrapFactory.templateUrl;
            }
        },
        controllerAs: 'ctrl'
    }
}