function notificationsFactory($interval, dampersFactory, researchDetailsFactory, testEquipmentsFactory, eventsFactory) {
    var factory = {};

    factory.notifications = [];
    factory.types = [];

    factory.getNotifications = function () {

        var n1 = processDampers(dampersFactory.dampers);
        var n2 = processResearchDetails(researchDetailsFactory.researchDetails);
        var n3 = processTestEquipments(testEquipmentsFactory.testEquipments);
        var n4 = processEvents(eventsFactory.events);

        factory.notifications = [];
        factory.types = [];

        factory.notifications = factory.notifications.concat(n1).concat(n2).concat(n3).concat(n4);

        var allTypes = factory.notifications.map(function (n) {
            return {
                designation: n.type.split(':')[0],
                name: n.type.split(':')[2]
            }
        });

        var uniqueTypes = [];

        allTypes.forEach(function (type) {
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
        var dampersExpiredText = 'Истек срок действия ПИ виброизолятора';
        var dampersSoonText = 'Скоро истечет срок действия ПИ виброизолятора';
        var damperExpiresIn = 'До окончания срока действия ПИ выброизолятора {damper} осталось дней: {daysBetween}.';

        /*Contract*/
        var contractExpiredText = 'Выполнение обязательств по договору перекращно';
        var contractSoonText = 'Выполнение обязательств по договору скоро прекратится';
        var contractExpiresIn = 'До выполнения обязательств по договору осталось дней: {daysBetween}';

        dampers.forEach(function (damper) {
            var damperExpirationDate = damper.expirationDate;

            var daysBetween = getDaysBetween(damperExpirationDate, now);

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: damper.uuid,
                    type: 'damper:red:Виброизолятор',
                    title: dampersExpiredText,
                    text: 'Виброизолятор: ' + damper.name,
                    link: 'dampers-detailed/' + damper.uuid,
                    linkText: 'Перейти к виброизолятору',
                    badge: 'Истек',
                    date: damper.expirationDate
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: damper.uuid,
                    type: 'damper:yellow:Виброизолятор',
                    title: dampersSoonText,
                    text: damperExpiresIn.replace('{damper}', damper.name).replace('{daysBetween}', daysBetween),
                    link: 'dampers-detailed/' + damper.uuid,
                    linkText: 'Перейти к виброизолятору',
                    badge: 'Дней осталось: ' + daysBetween,
                    date: damper.expirationDate
                })
            }

            damper.contracts.forEach(function (contract) {

                var currentYear = now.getFullYear();
                var currentMonth = now.getMonth();

                //Если год контракта меньше текущего
                if (contract.year < currentYear) {
                    notifications.push({
                        uuid: contract.uuid,
                        type: 'contract:red:Договор',
                        title: contractExpiredText,
                        text: 'Данные договора: квартал: ' + contract.quoter + ', год: ' + contract.year,
                        link: 'dampers-detailed/' + damper.uuid,
                        linkText: 'Перейти к договору',
                        badge: 'Истек',
                        date: new Date(contract.year, getLastMonthInQuoter(contract.quoter) + 1, 0)
                    });

                    //Или если года совпадают
                } else if (contract.year === currentYear) {
                    var lastMonthInQuoter = getLastMonthInQuoter(contract.quoter);

                    //Если текующий месяц больше последнего месяца квартала контракт
                    if (currentMonth > lastMonthInQuoter) {
                        notifications.push({
                            uuid: contract.uuid,
                            type: 'contract:red:Договор',
                            title: contractExpiredText,
                            text: 'Данные договора: квартал: ' + contract.quoter + ', год: ' + contract.year,
                            link: 'dampers-detailed/' + damper.uuid,
                            linkText: 'Перейти к договору',
                            badge: 'Истек',
                            date: new Date(contract.year, getLastMonthInQuoter(contract.quoter) + 1, 0)
                        });

                        //Если же совпадают, то смотрим сколько дней осталось
                    } else if (currentMonth == lastMonthInQuoter) {
                        var lastDate = new Date(currentYear, lastMonthInQuoter);
                        var lastDayOfMonth = new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 0);

                        var daysBetween = getDaysBetween(lastDayOfMonth, now);

                        notifications.push({
                            uuid: contract.uuid,
                            type: 'contract:yellow:Договор',
                            title: contractSoonText,
                            text: contractExpiresIn.replace('{daysBetween}', daysBetween),
                            link: 'dampers-detailed/' + damper.uuid,
                            linkText: 'Перейти к договору',
                            badge: 'Дней осталось: ' + daysBetween,
                            date: new Date(contract.year, getLastMonthInQuoter(contract.quoter) + 1, 0)
                        });
                    }
                }
            });
        });

        return notifications;
    }

    function getLastMonthInQuoter(quoter) {
        switch (quoter) {
            case 1: {
                return 2;
            }
            case 2: {
                return 5;
            }
            case 3: {
                return 8;
            }
            case 4: {
                return 11;
            }
        }
    }

    function processResearchDetails(researchDetails) {
        var notifications = [];

        var now = new Date();

        var stepExpiredText = 'Этап №{number} завершен';
        var stepSoonText = 'Скоро прекратится этап';
        var stepExpiresIn = 'До окончания этапа {step} осталось дней: {daysBetween}.';

        researchDetails.forEach(function (researchDetail) {
            researchDetail.steps.forEach(function (step) {
                var stepExpirationDate = step.expirationDate;

                var daysBetween = getDaysBetween(stepExpirationDate, now);

                if (daysBetween <= 0) {
                    notifications.push({
                        uuid: step.uuid,
                        type: 'step:red:Этап',
                        title: stepExpiredText.replace('{number}', step.number),
                        text: 'Название: ' + step.name,
                        link: 'research-details-detailed/' + researchDetail.uuid,
                        linkText: 'Перейти к этапу',
                        badge: 'Истек',
                        date: step.expirationDate
                    });

                } else if (daysBetween < 30) {
                    notifications.push({
                        uuid: step.uuid,
                        type: 'step:yellow:Этап',
                        title: stepSoonText,
                        text: stepExpiresIn.replace('{step}', step.name).replace('{daysBetween}', daysBetween),
                        link: 'research-details-detailed/' + researchDetail.uuid,
                        linkText: 'Перейти к этапу',
                        badge: 'Дней осталось: ' + daysBetween,
                        date: step.expirationDate
                    })
                }
            });
        });

        return notifications;
    }

    function processTestEquipments(testEquipments) {
        var notifications = [];

        var now = new Date();

        var teExpiredText = 'Прекращен срок действия испытательного оборудования';
        var teSoonText = 'Скоро истечет срок действия испытательного оборудования';
        var teExpiresIn = 'До окончания срока действия испытательного оборудования {testEquipment} осталось дней: {daysBetween}.';

        testEquipments.forEach(function (testEquipment) {
            var teExpirationDate = testEquipment.expirationDate;

            var daysBetween = getDaysBetween(teExpirationDate, now);

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: testEquipment.uuid,
                    type: 'testEquipment:red:Испытательное оборудование',
                    title: teExpiredText,
                    text: 'Испытательное оборудование: ' + testEquipment.name,
                    link: 'test-equipments-detailed/' + testEquipment.uuid,
                    linkText: 'Перейти к испытательному оборудованию',
                    badge: 'Истек',
                    date: testEquipment.expirationDate
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: testEquipment.uuid,
                    type: 'testEquipment:yellow:Испытательное оборудование',
                    title: teSoonText,
                    text: teExpiresIn.replace('{testEquipment}', testEquipment.name).replace('{daysBetween}', daysBetween),
                    link: 'test-equipments-detailed/' + testEquipment.uuid,
                    linkText: 'Перейти к испытательному оборудованию',
                    badge: 'Дней осталось: ' + daysBetween,
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
        var eventSoonText = 'Скоро произойдет событие "{eventTitle}". Дата: {date}';
        var eventExpiresIn = 'Осталось дней: {daysBetween}.';

        events.forEach(function (event) {
            var daysBetween = getDaysBetween(event.date, now);

            var eventDate = new Date(event.date);
            var eventStr = eventDate.getDate() + '-' + (eventDate.getMonth() + 1) + '-' + eventDate.getFullYear();

            if (daysBetween <= 0) {
                notifications.push({
                    uuid: event.uuid,
                    type: 'event:red:Событие',
                    title: eventExpiredText.replace('{eventTitle}', event.title),
                    text: 'Событие: ' + event.title + ', комментарий: ' + event.comment + '. Дата: ' + eventStr,
                    link: 'calendar',
                    linkText: 'Перейти к календарю',
                    badge: 'Прошло',
                    date: event.date
                });

            } else if (daysBetween < 30) {
                notifications.push({
                    uuid: event.uuid,
                    type: 'event:yellow:Событие',
                    title: eventSoonText.replace('{eventTitle}', event.title).replace('{date}', eventStr),
                    text: eventExpiresIn.replace('{daysBetween}', daysBetween),
                    link: 'calendar',
                    linkText: 'Перейти к календарю',
                    badge: 'Дней осталось: ' + daysBetween,
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

    factory.getBadgeType = function (obj) {
        for (var i = 0; i < factory.notifications.length; i++) {
            var n = factory.notifications[i];

            if (n.uuid === obj.uuid) {
                return n.type.split(':')[1];
            }
        }

        return 'green';
    };

    factory.getBadgeText = function (obj) {
        for (var i = 0; i < factory.notifications.length; i++) {
            var n = factory.notifications[i];

            if (n.uuid === obj.uuid) {
                return n.badge;
            }
        }

        return 'В норме';
    };


    return factory;
}