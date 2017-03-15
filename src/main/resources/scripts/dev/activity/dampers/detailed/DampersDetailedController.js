function DampersDetailedController($stateParams, dampersFactory) {
    var self = this;

    var uuid = $stateParams.uuid;

    if(dampersFactory.dampers && dampersFactory.dampers.length > 0) {

    } else {

    }
    dampersFactory.getDamper(uuid).then(function(d) {
        self.damper = d;
    });
}