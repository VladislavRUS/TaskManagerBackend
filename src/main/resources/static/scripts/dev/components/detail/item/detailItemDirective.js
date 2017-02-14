function detailItemDirective($document, $timeout, printFactory) {
    return {
        scope: {},
        bindToController: {
            item: '<'
        },
        templateUrl: 'scripts/dev/components/detail/item/detail-item.tmpl.html',
        controller: function() {
            var self = this;

            self.print = false;
            self.expired = new Date(self.item.expirationDate).getTime() < new Date().getTime();

            self.onClick = function(event) {
                if (event.ctrlKey) {
                    self.print = !self.print;

                    if (self.print) {
                        printFactory.addToPrintArray(JSON.parse(JSON.stringify(self.item)));

                    } else {
                        printFactory.removeFromPrintArray(JSON.parse(JSON.stringify(self.item)));
                    }

                } else if (!self.print) {
                    self.isOpened = !self.isOpened;

                    if (self.isOpened) {
                        $timeout(function() {
                            var contract = angular.element(document.getElementById(self.item.uuid + '-table'));
                            $document.scrollToElement(contract, 100, 300);
                        }, 200);
                    }
                }
            };

            self.toggleShowPrint = function() {
                self.showPrint = !self.showPrint;
            };

            self.togglePrintActive = function() {
                alert('fdf');
                self.printActive = !self.printActive;
            }
        },
        controllerAs: 'detailItemCtrl'
    }
}