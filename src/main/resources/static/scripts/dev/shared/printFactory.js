function printFactory($http, restServiceFactory) {
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

    factory.sendToPrint = function (page) {
        switch (page) {
            case 'details': {
                var uuidList = factory.printArray.map(function (obj) {
                    return obj.uuid;
                });
                $http({
                    method: 'POST',
                    url: restServiceFactory.detailsPrint,
                    responseType: 'arraybuffer',
                    data: { uuidList: uuidList }
                }).then(function (resp) {
                    var date = new Date();
                    factory.saveData(resp.data, getName());
                });
                break;
            }
        }
    };

    function getName() {
        var date = new Date();
        return 'report(' + date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + '__' + date.getHours() + ':' + date.getMinutes() + ').docx';
    }
    factory.saveData = function (data, fileName) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);

    };

    return factory;
}