(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/details/details-activity.tmpl.html',
    '<div class="page">\n' +
    '    <main-header></main-header>\n' +
    '    <details-layout></details-layout>\n' +
    '\n' +
    '    <dialog-wrap></dialog-wrap>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/events/events-activity.tmpl.html',
    '<div class="page">\n' +
    '    <main-header></main-header>\n' +
    '    <events-layout></events-layout>\n' +
    '\n' +
    '    <dialog-wrap></dialog-wrap>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/notifications/notifictions-activity.tmpl.html',
    '<div class="page" ng-controller="NotificationsController as notificationsCtrl">\n' +
    '    <main-header></main-header>\n' +
    '    <notifications-layout notifications="notificationsCtrl.storage.notifications"></notifications-layout>\n' +
    '    <dialog-wrap></dialog-wrap>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/detail/contract/detail-contract.tmpl.html',
    '<div class="detail-contract">\n' +
    '    <div class="detail-contract__row">\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.agreement}}</div>\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.customer}}</div>\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.amount}}</div>\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.quoter}}</div>\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.year}}</div>\n' +
    '        <div class="detail-contract__col">{{detailContractCtrl.contract.prepaidNote}}</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/detail/item/detail-item.tmpl.html',
    '<div class="item"\n' +
    '     id="{{detailItemCtrl.item.uuid}}"\n' +
    '     ng-click="detailItemCtrl.toggleContracts()"\n' +
    '     ng-class="{\'_expired\': detailItemCtrl.expired, \'_opened\': detailItemCtrl.isOpened}">\n' +
    '\n' +
    '    <div class="item-status" ng-class="detailItemCtrl.item.status | lowercase"></div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{detailItemCtrl.item.name}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{detailItemCtrl.item.description}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{detailItemCtrl.item.expirationDate | date}}</div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="item__table-wrapper tableAnimation" ng-if="detailItemCtrl.isOpened">\n' +
    '    <table class="item__table" id="{{detailItemCtrl.item.uuid + \'-table\'}}">\n' +
    '        <tr class="item__table-header">\n' +
    '            <td class="item__table-header-cell">Договор</td>\n' +
    '            <td class="item__table-header-cell">Заказчик</td>\n' +
    '            <td class="item__table-header-cell">Кол-во изделий</td>\n' +
    '            <td class="item__table-header-cell">Квартал</td>\n' +
    '            <td class="item__table-header-cell">Год</td>\n' +
    '            <td class="item__table-header-cell">Отм. об аванс</td>\n' +
    '        </tr>\n' +
    '        <tr class="item__table-row"\n' +
    '            ng-repeat="contract in detailItemCtrl.item.contracts"\n' +
    '            ng-class="\'{{detailItemCtrl.contractStatus(contract)}}\'">\n' +
    '            <td class="item__table-body-cell">{{contract.agreement}}</td>\n' +
    '            <td class="item__table-body-cell">{{contract.customer}}</td>\n' +
    '            <td class="item__table-body-cell">{{contract.amount}}</td>\n' +
    '            <td class="item__table-body-cell">{{contract.quoter}}</td>\n' +
    '            <td class="item__table-body-cell">{{contract.year}}</td>\n' +
    '            <td class="item__table-body-cell">{{contract.prepaidNote}}</td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '\n' +
    '    <!--<detail-contract contract="contract" ng-repeat="contract in detailItemCtrl.item.contracts"></detail-contract>-->\n' +
    '\n' +
    '    <div class="detail-contract__add" ng-click="detailItemCtrl.addContract()">Добавить контракт</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/dialog/wrap/dialog-wrap.tmpl.html',
    '<div class="dialog-wrap"\n' +
    '     ng-show="dialogWrapCtrl.show()"\n' +
    '     ng-click="dialogWrapCtrl.close()">\n' +
    '\n' +
    '    <div class="dialog-wrap__body">\n' +
    '        <div ng-include="dialogWrapCtrl.getTemplateUrl()" ng-click="$event.stopPropagation()"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/event/item/event-item.tmpl.html',
    '<div class="event-item">\n' +
    '    <div class="event-item__title">\n' +
    '        {{eventItemCtrl.item.title}}, {{eventItemCtrl.item.date | date:\'longDate\'}}\n' +
    '\n' +
    '        <span class="event-item__title _remove"\n' +
    '              ng-click="eventItemCtrl.remove()">X</span>\n' +
    '    </div>\n' +
    '    <div class="event-item__body">\n' +
    '        <div class="event-item__body _comment">{{eventItemCtrl.item.comment}}</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/header/main/main-header.tmpl.html',
    '<div class="main-header">\n' +
    '    <div class="main-header__item _left"\n' +
    '         ui-sref="notifications"\n' +
    '         ng-class="{\'_active\': mainHeaderCtrl.currentState() === \'notifications\'}">\n' +
    '\n' +
    '        <span class="main-header__item-notification">{{mainHeaderCtrl.storage.notificationsLength()}}</span>\n' +
    '\n' +
    '        Уведомления\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="main-header__item"\n' +
    '         ui-sref="details"\n' +
    '         ng-class="{\'_active\': mainHeaderCtrl.currentState() === \'details\'}">\n' +
    '        Виброизоляторы\n' +
    '    </div>\n' +
    '    <div class="main-header__item"\n' +
    '         ui-sref="events"\n' +
    '        ng-class="{\'_active\': mainHeaderCtrl.currentState() === \'events\'}">\n' +
    '        События\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/layout/details/details-layout.tmpl.html',
    '<div class="page-layout">\n' +
    '\n' +
    '    <div class="page-layout__search">\n' +
    '        <input class="input" placeholder="Введите название детали" ng-model="detailsLayoutCtrl.detailSearch">\n' +
    '    </div>\n' +
    '\n' +
    '    <detail-item item="detail" ng-repeat="detail in detailsLayoutCtrl.storage.details | filter: detailsLayoutCtrl.detailSearch"></detail-item>\n' +
    '\n' +
    '    <div class="floating-button-wrapper">\n' +
    '        <div class="floating-button" ng-click="detailsLayoutCtrl.addDetail()"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/layout/events/events-layout.tmpl.html',
    '<div class="page-layout">\n' +
    '\n' +
    '    <event-item item="event" ng-repeat="event in eventsLayoutCtrl.storage.events"></event-item>\n' +
    '\n' +
    '    <div class="floating-button-wrapper">\n' +
    '        <div class="floating-button" ng-click="eventsLayoutCtrl.addEvent()"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/layout/notifications/notifications-layout.tmpl.html',
    '<div class="page-layout">\n' +
    '\n' +
    '    <div class="notification"\n' +
    '         ng-repeat="notification in notificationsLayoutCtrl.notifications"\n' +
    '         ui-sref="details({uuid: notification.detail.uuid})">\n' +
    '        {{notification.text}}\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/dialog/contract/add/add-contract-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddContractDialogController as addContractDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление контракта\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addContractDialogCtrl.agreement" placeholder="Договор поставки, доп. соглашение">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addContractDialogCtrl.customer" placeholder="Заказчик">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="number" ng-model="addContractDialogCtrl.amount" placeholder="Количество изделий">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            Выберите квартал:\n' +
    '            <select class="select"\n' +
    '                    ng-model="addContractDialogCtrl.quoter">\n' +
    '                <option>1</option>\n' +
    '                <option>2</option>\n' +
    '                <option>3</option>\n' +
    '                <option>4</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            Выберите год:\n' +
    '            <select class="select"\n' +
    '                    ng-model="addContractDialogCtrl.year">\n' +
    '                <option ng-repeat="year in addContractDialogCtrl.years">{{year}}</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addContractDialogCtrl.prepaidNote" placeholder="Отметка об авансировании">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addContractDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addContractDialogCtrl.onCancel()">Отмена</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/dialog/event/add/add-event-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddEventDialogController as addEventDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление события\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addEventDialogCtrl.title" placeholder="Введите название">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="date" ng-model="addEventDialogCtrl.date" placeholder="Введите дату">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <textarea class="input _area" type="text" ng-model="addEventDialogCtrl.comment" placeholder="Введите комментарий"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addEventDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addEventDialogCtrl.onCancel()">Отмена</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/dialog/detail/add/add-detail-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddDetailDialogController as addDetailDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление виброизолятора\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.name" placeholder="Наименование">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.description" placeholder="Обозначение КД">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <label>Срок действия ПИ</label>\n' +
    '            <input class="input" type="date" ng-model="addDetailDialogCtrl.expirationDate" placeholder="Срок действия ПИ">\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addDetailDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addDetailDialogCtrl.onCancel()">Отмена</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
