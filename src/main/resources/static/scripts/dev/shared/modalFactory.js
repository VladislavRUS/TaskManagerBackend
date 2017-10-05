function modalFactory($q, $timeout) {
    var factory = {};
    factory.currentModal = null;

    factory.openModal = function(modalId, approveCallback, successCallback, errorCallback) {
        factory.currentModal = modalId;

        var el = angular.element(document).find('#' + modalId);
        el.modal('show');
    };

    factory.closeModal = function() {
        $('#' + factory.currentModal).modal('hide');
        factory.currentModal = null;
    };

    return factory;
}