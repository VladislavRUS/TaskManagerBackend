function PrintController($stateParams, dampersFactory, researchDetailsFactory, printFactory, notificationsFactory) {
    var self = this;

    self.type = $stateParams.type;

    dampersFactory.getDampers();
    researchDetailsFactory.getResearchDetails();

    self.dampersFactory = dampersFactory;
    self.researchDetailsFactory = researchDetailsFactory;
    self.nf = notificationsFactory;

    self.printFactory = printFactory;
    self.printArray = [];
    self.printActive = false;

    self.onClick = function(item) {

        var idx = self.printArray.indexOf(item.uuid);

        if (idx === -1) {
            self.printArray.push(item.uuid);

        } else {
            self.printArray.splice(idx, 1);
        }
    };

    self.onPrint = function() {
        self.printActive = true;

        switch (self.type) {
            case 'list':
                {
                    printFactory.printList(self.printArray);
                    break;
                }

            case 'nomenclature':
                {
                    printFactory.printNomenclature(self.printArray);
                    break;
                }
        }

        self.printArray = [];
    };

    self.inPrint = function(uuid) {
        for (var i = 0; i < self.printArray.length; i++) {
            if (self.printArray[i] === uuid) {
                return true;
            }
        }

        return false;
    };
}