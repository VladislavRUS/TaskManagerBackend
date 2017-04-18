function modalFactory() {
    var factory = {};

    factory.openModal = function (modalId) {
        var el = angular.element(document).find('#' + modalId);
        el.modal('show');
    };

    factory.closeModal = function (modalId) {
        var el = angular.element(document).find('#' + modalId);
        el.modal('hide');
    };

    return factory;
}