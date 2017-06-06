function printFactory($http, restServiceFactory, fileFactory) {
    var factory = {};

    factory.printArray = [];

    factory.addToPrintArray = function (item) {
        factory.printArray.push(item);
    };

    factory.clear = function() {
        factory.printArray = [];
    };

    factory.removeFromPrintArray = function (item) {
        factory.printArray = factory.printArray.filter(function (obj) {
            return obj.uuid != item.uuid;
        });
    };

    factory.sendToPrint = function (page, printArray) {
        switch (page) {
            case 'dampers': {
                $http({
                    method: 'POST',
                    url: restServiceFactory.detailsPrint,
                    responseType: 'arraybuffer',
                    data: { uuidList: printArray }
                }).then(function (resp) {

                    fileFactory.makeFile(resp.data, getName());

                });
                break;
            }
        }
    };

    function getName() {
        var date = new Date();
        return 'report(' + date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + '__' + date.getHours() + ':' + date.getMinutes() + ').docx';
    }

    return factory;
}