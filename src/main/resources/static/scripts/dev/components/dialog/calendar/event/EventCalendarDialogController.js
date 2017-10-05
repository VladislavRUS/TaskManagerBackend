function EventCalendarDialogController($rootScope, $timeout,
    dialogWrapFactory, eventsFactory, toastFactory) {

    var self = this;

    self.update = dialogWrapFactory.getParams().update;
    self.event = dialogWrapFactory.getParams().event;

    self.onSave = function() {
        var promise = self.update ?
            eventsFactory.updateEvent(self.event) :
            eventsFactory.addEvent(self.event);

        promise.then(function() {
            toastFactory.successToast('Событие сохранено!');
            $rootScope.$emit('updateEvents');
            dialogWrapFactory.closeDialog();

        }, function() {
            alert('Ошибка!');
        });
    };

    self.onGo = function(link) {
        dialogWrapFactory.closeDialog();

        window.location.href = '#/' + link;
    };

    self.onDelete = function() {
        eventsFactory.removeEvent(self.event).then(function() {
            toastFactory.successToast('Событие удалено!');
            $rootScope.$emit('updateEvents');
        });

        dialogWrapFactory.closeDialog();
    };

    self.onCancel = function() {
        dialogWrapFactory.closeDialog();
    }
}