function notificationsFactory($interval, $filter, dampersFactory, researchDetailsFactory, testEquipmentsFactory, eventsFactory) {
    var factory = {};

    factory.notifications = [];
    factory.types = [];

    factory.getNotifications = function() {

        var n1 = processDampers(dampersFactory.dampers);
        var n2 = processResearchDetails(researchDetailsFactory.researchDetails);
        var n3 = processTestEquipments(testEquipmentsFactory.testEquipments);
        var n4 = processEvents(eventsFactory.events);

        factory.notifications = [];
        factory.types = [];

        factory.notifications = factory.notifications.concat(n1).concat(n2).concat(n3).concat(n4);

        var allTypes = factory.notifications.map(function(n) {
            return {
                designation: n.type.split(':')[0],
                name: n.type.split(':')[2]
            }
        });

        var uniqueTypes = [];

        allTypes.forEach(function(type) {
            if (!containsType(type, uniqueTypes)) {
                uniqueTypes.push(type);
            }
        });

        factory.types = angular.copy(uniqueTypes);
    };

    function containsType(type, types) {
        for (var i = 0; i < types.length; i++) {
            if (types[i].designation === type.designation) {
                return true;
            }
        }

        return false;
    }

    function processDampers(dampers) {
        var notifications = [];
        var now = new Date();

        /*Damper*/
        var dampersExpiredText = 'Истек срок действия ПИ виброизолятора "{name}"';
        var dampersSoonText = 'Скоро истечет срок действия ПИ виброизолятора "{name}"';

        /*Contract*/
        var contractExpiredText = 'Истек срок выполнения договора № {number}, {fromDate}';
        var contractSoonText = 'Срок выполнения договора № {number}, {fromDate} скоро прекратится';

        dampers.forEach(function(damper) {
            var damperExpirationDate = damper.expirationDate;

            var daysBetween = getDaysBetween(damperExpirationDate, now);

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: damper.uuid,
                    type: 'damper:red:Виброизолятор',
                    title: dampersExpiredText.replace('{name}', damper.name),
                    text: 'Дата истечения: ' + $filter('date')(damper.expirationDate, 'dd-MM-yyyy'),
                    link: 'dampers-detailed/' + damper.uuid,
                    linkText: 'Перейти к виброизолятору',
                    badge: 'Истек',
                    date: damper.expirationDate
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: damper.uuid,
                    type: 'damper:yellow:Виброизолятор',
                    title: dampersSoonText.replace('{name}', damper.name),
                    text: 'Дата истечения: ' + $filter('date')(damper.expirationDate, 'dd-MM-yyyy'),
                    link: 'dampers-detailed/' + damper.uuid,
                    linkText: 'Перейти к виброизолятору',
                    badge: 'Осталось дней: ' + daysBetween,
                    date: damper.expirationDate
                })
            }

            damper.contracts.forEach(function(contract) {

                if (!contract.done) {

                    var contractExpirationDate = contract.expirationDate;
                    var daysBetween = getDaysBetween(contractExpirationDate, now);

                    if (daysBetween <= 0) {
                        notifications.push({
                            uuid: contract.uuid,
                            type: 'contract:red:Договор',
                            title: contractExpiredText.replace('{number}', contract.number).replace('{fromDate}', $filter('date')(contract.fromDate, 'dd-MM-yyyy')),
                            text: 'Дата истечения: ' + $filter('date')(contract.expirationDate, 'dd-MM-yyyy'),
                            link: 'dampers-detailed/' + damper.uuid,
                            linkText: 'Перейти к контракту',
                            badge: 'Истек',
                            date: contract.expirationDate
                        });

                    } else if (daysBetween < 30) {
                        notifications.push({
                            uuid: contract.uuid,
                            type: 'contract:yellow:Договор',
                            title: contractSoonText.replace('{number}', contract.number).replace('{fromDate}', $filter('date')(contract.fromDate, 'dd-MM-yyyy')),
                            text: 'Дата истечения: ' + $filter('date')(contract.expirationDate, 'dd-MM-yyyy'),
                            link: 'dampers-detailed/' + damper.uuid,
                            linkText: 'Перейти к контракту',
                            badge: 'Осталось дней: ' + daysBetween,
                            date: contract.expirationDate
                        })
                    }
                }
            });
        });

        return notifications;
    }

    function getLastMonthInQuoter(quoter) {
        switch (quoter) {
            case 1:
                {
                    return 2;
                }
            case 2:
                {
                    return 5;
                }
            case 3:
                {
                    return 8;
                }
            case 4:
                {
                    return 11;
                }
        }
    }

    function processResearchDetails(researchDetails) {
        var notifications = [];

        var now = new Date();

        var stepExpiredText = 'Истек срок выполнения этапа "{name}" под номером №{number}';
        var stepSoonText = 'Скоро истечет срок выполнения этапа "{name}" под номером №{number}';

        researchDetails.forEach(function(researchDetail) {
            researchDetail.steps.forEach(function(step) {

                if (!step.done) {
                    var stepExpirationDate = step.expirationDate;

                    var daysBetween = getDaysBetween(stepExpirationDate, now);

                    if (daysBetween <= 0) {
                        notifications.push({
                            uuid: step.uuid,
                            type: 'step:red:Этап',
                            title: stepExpiredText.replace('{number}', step.number).replace('{name}', step.name),
                            text: 'Дата истечения: ' + $filter('date')(step.expirationDate, 'dd-MM-yyyy'),
                            link: 'research-details-detailed/' + researchDetail.uuid,
                            linkText: 'Перейти к этапу',
                            badge: 'Истек',
                            date: step.expirationDate
                        });

                    } else if (daysBetween < 30) {
                        notifications.push({
                            uuid: step.uuid,
                            type: 'step:yellow:Этап',
                            title: stepSoonText.replace('{number}', step.number).replace('{name}', step.name),
                            text: 'Дата истечения: ' + $filter('date')(step.expirationDate, 'dd-MM-yyyy'),
                            link: 'research-details-detailed/' + researchDetail.uuid,
                            linkText: 'Перейти к этапу',
                            badge: 'Осталось дней: ' + daysBetween,
                            date: step.expirationDate
                        })
                    }
                }
            });
        });

        return notifications;
    }

    function processTestEquipments(testEquipments) {
        var notifications = [];

        var now = new Date();

        var teExpiredText = 'Истек срок действия испытательного оборудования "{name}"';
        var teSoonText = 'Скоро истечет срок действия испытательного оборудования "{name}"';

        testEquipments.forEach(function(testEquipment) {
            var teExpirationDate = testEquipment.expirationDate;

            var daysBetween = getDaysBetween(teExpirationDate, now);

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: testEquipment.uuid,
                    type: 'testEquipment:red:Испытательное оборудование',
                    title: teExpiredText.replace('{name}', testEquipment.name),
                    text: 'Дата истечения: ' + $filter('date')(testEquipment.expirationDate, 'dd-MM-yyyy'),
                    link: 'test-equipments-detailed/' + testEquipment.uuid,
                    linkText: 'Перейти к испытательному оборудованию',
                    badge: 'Истек',
                    date: testEquipment.expirationDate
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: testEquipment.uuid,
                    type: 'testEquipment:yellow:Испытательное оборудование',
                    title: teSoonText.replace('{name}', testEquipment.name),
                    text: 'Дата истечения: ' + $filter('date')(testEquipment.expirationDate, 'dd-MM-yyyy'),
                    link: 'test-equipments-detailed/' + testEquipment.uuid,
                    linkText: 'Перейти к испытательному оборудованию',
                    badge: 'Осталось дней: ' + daysBetween,
                    date: testEquipment.expirationDate
                })
            }
        });

        return notifications;
    }

    function processEvents(events) {
        var notifications = [];

        var now = new Date();

        var eventExpiredText = 'Событие  "{eventTitle}" прошло';
        var eventSoonText = 'Скоро произойдет событие "{eventTitle}"';

        events.forEach(function(event) {
            var daysBetween = getDaysBetween(event.date, now);

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: event.uuid,
                    type: 'event:red:Событие',
                    title: eventExpiredText.replace('{eventTitle}', event.title),
                    text: 'Дата события: ' + $filter('date')(event.date, 'dd-MM-yyyy'),
                    link: 'calendar',
                    linkText: 'Перейти к календарю',
                    badge: 'Прошло',
                    date: event.date
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: event.uuid,
                    type: 'event:yellow:Событие',
                    title: eventSoonText.replace('{eventTitle}', event.title),
                    text: 'Дата события: ' + $filter('date')(event.date, 'dd-MM-yyyy'),
                    link: 'calendar',
                    linkText: 'Перейти к календарю',
                    badge: 'Осталось дней: ' + daysBetween,
                    date: event.date
                })
            }
        });

        return notifications;
    }

    function getDaysBetween(second, first) {
        first = new Date(first);
        second = new Date(second);

        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
        var secondDate = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());

        return Math.floor((secondDate - firstDate) / oneDay);
    }

    factory.getBadgeType = function(obj) {
        for (var i = 0; i < factory.notifications.length; i++) {
            var n = factory.notifications[i];

            if (n.uuid === obj.uuid) {
                return n.type.split(':')[1];
            }
        }

        return 'green';
    };

    factory.getBadgeText = function(obj) {
        for (var i = 0; i < factory.notifications.length; i++) {
            var n = factory.notifications[i];

            if (n.uuid === obj.uuid) {
                return n.badge;
            }
        }

        return 'OK';
    };


    return factory;
}