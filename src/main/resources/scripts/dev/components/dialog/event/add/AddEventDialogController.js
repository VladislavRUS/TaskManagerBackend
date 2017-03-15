function AddEventDialogController(dialogWrapFactory, eventsFactory) {
    var self = this;

    self.onSave = function() {
        var event = {
            title: self.title,
            comment: self.comment,
            date: self.date
        };

        eventsFactory.addEvent(event);
        dialogWrapFactory.close();
    };

    self.onCancel = function() {
        dialogWrapFactory.close();
    }
}