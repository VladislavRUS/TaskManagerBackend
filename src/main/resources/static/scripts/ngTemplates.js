(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/events-activity.tmpl.html',
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
    '    <div class="main-header__item"\n' +
    '         ui-sref="events"\n' +
    '        ng-class="{\'_active\': mainHeaderCtrl.currentState() === \'events\'}">\n' +
    '        События\n' +
    '    </div>\n' +
    '    <div class="main-header__item">\n' +
    '        Документы\n' +
    '    </div>\n' +
    '    <div class="main-header__item">\n' +
    '        Таблицы\n' +
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
    '<div class="event-layout">\n' +
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
  $templateCache.put('scripts/dev/components/dialog/event/add/add-event-dialog.tmpl.html',
    '<div class="add-event-dialog jsPopup" ng-controller="AddEventDialogController as addEventDialogCtrl">\n' +
    '    <div class="add-event-dialog__header">\n' +
    '        Добавление события\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="add-event-dialog__body">\n' +
    '        <div class="add-event-dialog__control">\n' +
    '            <input class="input" type="text" ng-model="addEventDialogCtrl.title" placeholder="Введите название">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="add-event-dialog__control">\n' +
    '            <input class="input" type="date" ng-model="addEventDialogCtrl.date" placeholder="Введите дату">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="add-event-dialog__control">\n' +
    '            <textarea class="input _area" type="text" ng-model="addEventDialogCtrl.comment" placeholder="Введите комментарий"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="add-event-dialog__actions">\n' +
    '        <div class="add-event-dialog__actions-button _save"\n' +
    '             ng-click="addEventDialogCtrl.onSave()">Save</div>\n' +
    '\n' +
    '        <div class="add-event-dialog__actions-button _cancel"\n' +
    '             ng-click="addEventDialogCtrl.onCancel()">Cancel</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
