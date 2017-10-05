function AddEventDialogController(dialogWrapFactory, eventsFactory, toastFactory) {
    var self = this;

    self.onSave = function() {
        var event = {
            title: self.title,
            comment: self.comment,
            date: self.date
        };

        eventsFactory.addEvent(event).then(function() {
            toastFactory.successToast('Событие добавлено!');
            dialogWrapFactory.close();
            
        }, function() {
            alert('Ошибка!');
        })
        
    };

    self.onCancel = function() {
        dialogWrapFactory.close();
    }
}