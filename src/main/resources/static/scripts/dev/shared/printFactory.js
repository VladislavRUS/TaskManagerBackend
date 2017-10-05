function printFactory($http, $timeout, restServiceFactory, fileFactory) {
    var factory = {};
    factory.printing = false;

    factory.printList = function(printArray) {
        factory.print(restServiceFactory.printList, printArray);
    };

    factory.printNomenclature = function(printArray) {
        factory.print(restServiceFactory.printNomenclature, printArray);
    };

    factory.print = function(url, printArray) {
        factory.printing = true;

        $timeout(function() {
            $http({
                method: 'POST',
                url: url,
                responseType: 'arraybuffer',
                data: { uuidList: printArray }
            }).then(function(resp) {

                fileFactory.makeFile(resp.data, getName());
                factory.printing = false;

            }, function() {
                factory.printing = false;
                alert('Произошла неизвестная ошибка!');
            });
        }, 1500);
    };

    function getName() {
        var date = new Date();
        return 'report(' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '__' + date.getHours() + ':' + date.getMinutes() + ').docx';
    }

    return factory;
}