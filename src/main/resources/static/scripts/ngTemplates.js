(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/calendar/calendar-activity.tmpl.html',
    '<calendar-layout></calendar-layout>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/dampers/dampers-activity.tmpl.html',
    '<dampers-layout></dampers-layout>');
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
    '<notifications-layout></notifications-layout>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/print/print-activity.tmpl.html',
    '<div class="ui dimmer" ng-class="{ \'active\': ctrl.printFactory.printing }">\n' +
    '    <div class="ui loader"></div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <div class="ui labeled button" tabindex="0" ng-click="ctrl.onPrint()">\n' +
    '                <div class="ui basic blue button">\n' +
    '                    <i class="print icon"></i> Печать\n' +
    '                </div>\n' +
    '                <a class="ui basic left pointing blue label">\n' +
    '                    {{ctrl.printArray.length}}\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<h2>Печать {{ctrl.type === \'list\' ? \'перечня\' : \'номенклатуры\'}}</h2>\n' +
    '\n' +
    '<h3>Виброизоляторы</h3>\n' +
    '<table class="ui selectable striped celled table">\n' +
    '\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Обозначение</th>\n' +
    '            <th>Срок действия ПИ</th>\n' +
    '            <th>Договоров</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="damper in ctrl.dampersFactory.dampers track by $index" ng-class="{\'active\': ctrl.inPrint(damper.uuid)}" ng-click="ctrl.onClick(damper, $event)">\n' +
    '\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{damper.name}}</td>\n' +
    '            <td>{{damper.designation}}</td>\n' +
    '            <td>{{damper.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>{{damper.contracts.length}}</td>\n' +
    '            <td>\n' +
    '                <a class="ui label" ng-class="ctrl.nf.getBadgeType(damper)">\n' +
    '                {{ctrl.nf.getBadgeText(damper)}}\n' +
    '            </a>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<h3 ng-if="ctrl.type === \'nomenclature\'">НИОКР</h3>\n' +
    '<table class="ui selectable striped celled table" ng-if="ctrl.type === \'nomenclature\'">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Этапов</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="researchDetail in ctrl.researchDetailsFactory.researchDetails" ng-class="{\'active\': ctrl.inPrint(researchDetail.uuid)}" ng-click="ctrl.onClick(researchDetail, $event)">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{researchDetail.name}}</td>\n' +
    '            <td>{{researchDetail.steps.length}}</td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/research-details/research-details-activity.tmpl.html',
    '<research-details-layout></research-details-layout>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/test-equipments/test-equipments-activity.tmpl.html',
    '<test-equipments-layout></test-equipments-layout>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/calendar-layout/calendar-layout.tmpl.html',
    '<div ui-calendar="uiConfig.calendar" ng-model="eventSources" calendar="myCalendar" id="calendar">\n' +
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
  $templateCache.put('scripts/dev/components/dialog/dialog-wrap.tmpl.html',
    '<div class="dialog-wrap ng-hide" id="dialog" ng-show="ctrl.dialogWrapFactory.dialogOpened">\n' +
    '    <div class="dialog-wrap__content" id="dialogContent">\n' +
    '        <div ng-include="ctrl.getTemplateUrl()"></div>\n' +
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
  $templateCache.put('scripts/dev/components/files/files.tmpl.html',
    '<div class="ui segment">\n' +
    '    <h3>{{ctrl.files.length == 0 ? \'Документов нет\' : \'Документы: \'}}</h3>\n' +
    '\n' +
    '    <table class="ui celled selectable stripped table" ng-if="ctrl.files.length">\n' +
    '        <tbody>\n' +
    '            <tr ng-repeat="file in ctrl.files">\n' +
    '                <td>{{file.name}}</td>\n' +
    '                <td class="collapsing">\n' +
    '                    <a class="ui teal  circular label">\n' +
    '                    {{file.extension}}\n' +
    '                </a>\n' +
    '                </td>\n' +
    '                <td class="collapsing">\n' +
    '                    <button class="positive ui button" ng-click="ctrl.onOpen(file); $event.preventDefault();">Просмотреть\n' +
    '                </button>\n' +
    '                </td>\n' +
    '                <td class="collapsing">\n' +
    '                    <button class="negative ui button" ng-click="ctrl.onDelete(file); $event.preventDefault();">Удалить\n' +
    '                </button>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '\n' +
    '    <div class="ui divider"></div>\n' +
    '\n' +
    '    <button type="button" class="ui primary button" ng-click="ctrl.onAdd()">Добавить файл</button>\n' +
    '\n' +
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
  $templateCache.put('scripts/dev/components/research-detail/research-detail-detailed.tmpl.html',
    '<div class="ui large breadcrumb">\n' +
    '    <a class="section" ui-sref="research-details">НИОКР</a>\n' +
    '    <i class="right chevron icon divider"></i>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui segment">\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Название</label>\n' +
    '            <input type="text" ng-model="ctrl.researchDetail.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Предприятие-изготовитель</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.researchDetail.vendor"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Генеральный заказчик</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.researchDetail.customer"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Предприятие, являющееся головным</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.researchDetail.head"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Договор</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.researchDetail.contract"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Техзадание</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.researchDetail.requirements"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="fields">\n' +
    '            <div class="field">\n' +
    '                <div class="ui positive right labeled icon button" ng-click="ctrl.onUpdate()">\n' +
    '                    Обновить\n' +
    '                    <i class="checkmark icon"></i>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="field">\n' +
    '                <div class="ui red button" ng-click="ctrl.onDelete()">\n' +
    '                    Удалить\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '<files object="ctrl.researchDetail"></files>\n' +
    '\n' +
    '<div class="ui divider"></div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="fourteen wide field">\n' +
    '            <div class="ui huge header">Этапы</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="two wide field">\n' +
    '\n' +
    '            <button class="ui labeled icon positive mini button" ng-click="ctrl.addStep(\'createStepModal\');">\n' +
    '                <i class="plus icon"></i>\n' +
    '                Добавить\n' +
    '            </button>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>Номер этапа</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Срок выполнения</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="step in ctrl.researchDetail.steps track by $index" ng-click="ctrl.updateStep(step);">\n' +
    '            <td>{{step.number}}</td>\n' +
    '            <td>{{step.name}}</td>\n' +
    '            <td>{{step.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>\n' +
    '                <a class="ui label" ng-class="ctrl.nf.getBadgeType(step)">{{ctrl.nf.getBadgeText(step)}}</a>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/test-equipment/test-equipment-detailed.tmpl.html',
    '<div class="ui large breadcrumb">\n' +
    '    <a class="section"\n' +
    '       ui-sref="test-equipments({vendor: ctrl.testEquipment.vendor})">Испытательное оборудование</a>\n' +
    '    <i class="right chevron icon divider"></i>\n' +
    '    <div class="active section">{{ctrl.testEquipment.name}}</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui segment">\n' +
    '    <form class="ui form">\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Название</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Тип</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.type">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Дата истечения срока</label>\n' +
    '            <input type="date" ng-model="ctrl.testEquipment.expirationDate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Заводской номер</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.number">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="fields">\n' +
    '            <div class="field">\n' +
    '                <div class="ui positive right labeled icon button" ng-click="ctrl.onUpdate()">\n' +
    '                    Обновить\n' +
    '                    <i class="checkmark icon"></i>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="field">\n' +
    '                <div class="ui red button" ng-click="ctrl.onDelete()">\n' +
    '                    Удалить\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '<files object="ctrl.testEquipment"></files>\n' +
    '<!--\n' +
    '\n' +
    '<form class="form-horizontal col-sm-12 form-control" role="form">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="name">\n' +
    '                Название\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="name" ng-model="ctrl.testEquipment.name">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="designation">\n' +
    '                Тип\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="designation" ng-model="ctrl.testEquipment.type">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="expirationDate">\n' +
    '                Дата истечения срока\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="date" class="form-control" id="expirationDate"\n' +
    '                       ng-model="ctrl.testEquipment.expirationDate">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="number">\n' +
    '                Заводской номер\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="number" ng-model="ctrl.testEquipment.number">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <div class="col-sm-12">\n' +
    '                <button type="button" ng-click="ctrl.onUpdate()" class="btn btn-success">Обновить</button>\n' +
    '                <button type="button" ng-click="ctrl.onDelete()" class="btn btn-danger ml-auto">Удалить</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div id="updateAlert" class="alert alert-success slideAnimation" ng-if="ctrl.showAlert" role="alert">\n' +
    '        <strong>Испытательное оборудование обновлено!</strong>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <div class="col-sm-12">\n' +
    '                <files object="ctrl.testEquipment"></files>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/dampers/detailed/dampers-detailed-activity.tmpl.html',
    '<damper-detailed damper="dampersDetailedCtrl.getDamper()"></damper-detailed>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/research-details/detailed/research-details-detailed-activity.tmpl.html',
    '<research-detail-detailed research-detail="researchDetailsDetailedCtrl.getResearchDetail()"></research-detail-detailed>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/test-equipments/detailed/test-equipments-detailed-activity.tmpl.html',
    '<test-equipment-detailed test-equipment="testEquipmentsDetailedCtrl.testEquipment"></test-equipment-detailed>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/damper/detailed/damper-detailed.tmpl.html',
    '<div class="ui large breadcrumb">\n' +
    '    <a class="section" ui-sref="dampers">Виброизоляторы</a>\n' +
    '    <i class="right chevron icon divider"></i>\n' +
    '    <div class="active section">{{ctrl.damper.name}}</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui segment">\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Наименование, обозначение</label>\n' +
    '            <input type="text" ng-model="ctrl.damper.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Обозначение КД</label>\n' +
    '            <input type="text" ng-model="ctrl.damper.designation">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Дата истечения срока действия ПИ</label>\n' +
    '            <input type="date" ng-model="ctrl.damper.expirationDate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Договор</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.contract"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Состав контролируемых параметров изделий</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.inspectionMethods"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Указания о маркировке изделий по результатам входного контроля</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.fiatLabeling"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Вид контроля, объем выборки, контрольные нормативы и правила выборочного контроля</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.controlType"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Средства измерений, необходимые для контроля параметров изделий</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.measurementMeans"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Гарантийный срок хранения</label>\n' +
    '            <input type="text" ng-model="ctrl.damper.guarantee">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Предприятие-изготовитель</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.vendor"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Генеральный заказчик</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.customer"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Предприятие, являющееся головным</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.head"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Примечание</label>\n' +
    '            <textarea rows="2" ng-model="ctrl.damper.note"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="fields">\n' +
    '            <div class="field">\n' +
    '                <div class="ui positive right labeled icon button" ng-click="ctrl.onUpdate()">\n' +
    '                    Обновить\n' +
    '                    <i class="checkmark icon"></i>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="field">\n' +
    '                <div class="ui red button" ng-click="ctrl.onDelete()">\n' +
    '                    Удалить\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '<files object="ctrl.damper"></files>\n' +
    '\n' +
    '<div class="ui divider"></div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="fourteen wide field">\n' +
    '            <div class="ui huge header">Договоры</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="two wide field">\n' +
    '\n' +
    '            <button class="ui labeled icon positive mini button" ng-click="ctrl.addContract(\'createContractModal\');">\n' +
    '                <i class="plus icon"></i>\n' +
    '                Добавить\n' +
    '            </button>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="field">\n' +
    '            <div class="ui checkbox">\n' +
    '                <input type="checkbox" ng-click="ctrl.toggleDone()">\n' +
    '                <label>Скрыть выполненные</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Номер</th>\n' +
    '            <th>От</th>\n' +
    '            <th>Заказчик</th>\n' +
    '            <th>Кол-во</th>\n' +
    '            <th>Квартал</th>\n' +
    '            <th>Год</th>\n' +
    '            <th>Авансирование</th>\n' +
    '            <th>Выполнен</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="contract in ctrl.damper.contracts | filter: ctrl.filterContract track by $index" ng-click="ctrl.updateContract(contract, \'createContractModal\');">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{contract.number}}</td>\n' +
    '            <td>{{contract.fromDate | date : \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>{{contract.customer}}</td>\n' +
    '            <td>{{contract.amount}}</td>\n' +
    '            <td>{{contract.quoter}}</td>\n' +
    '            <td>{{contract.year}}</td>\n' +
    '            <td>{{contract.prepaidNote}}</td>\n' +
    '            <td>{{contract.done ? \'Да\' : \'Нет\'}}</td>\n' +
    '            <td>\n' +
    '                <a class="ui {{ctrl.nf.getBadgeType(contract)}} label">\n' +
    '                {{ctrl.nf.getBadgeText(contract)}}\n' +
    '            </a>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<!--Комплектующие-->\n' +
    '<div class="ui divider"></div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="fourteen wide field">\n' +
    '            <div class="ui huge header">Комплектующие</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="two wide field">\n' +
    '\n' +
    '            <button class="ui labeled icon positive mini button" ng-click="ctrl.addAccessory(\'component\');">\n' +
    '                <i class="plus icon"></i>\n' +
    '                Добавить\n' +
    '            </button>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Наименование, обозначение</th>\n' +
    '            <th>Обозначение КД, ТД и ТУ</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="accessory in ctrl.damper.accessories | filter: { type: \'component\' }" ng-click="ctrl.updateAccessory(accessory, \'createAccessoryModal\');">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{accessory.name}}</td>\n' +
    '            <td>{{accessory.designation}}</td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '\n' +
    '<!--Расходные материалы-->\n' +
    '<div class="ui divider"></div>\n' +
    '\n' +
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="fourteen wide field">\n' +
    '            <div class="ui huge header">Расходные материалы</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="two wide field">\n' +
    '\n' +
    '            <button class="ui labeled icon positive mini button" ng-click="ctrl.addAccessory(\'material\');">\n' +
    '                <i class="plus icon"></i>\n' +
    '                Добавить\n' +
    '            </button>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Наименование, обозначение</th>\n' +
    '            <th>Обозначение КД, ТД и ТУ</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="accessory in ctrl.damper.accessories | filter: { type: \'material\' }" ng-click="ctrl.updateAccessory(accessory, \'createAccessoryModal\');">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{accessory.name}}</td>\n' +
    '            <td>{{accessory.designation}}</td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="ui modal" id="createAccessoryModal">\n' +
    '    <i class="close icon"></i>\n' +
    '    <div class="header">\n' +
    '        {{ctrl.accessoryTypes[ctrl.currentAccessory.type]}}\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="content">\n' +
    '        <form class="ui form">\n' +
    '            <div class="required field">\n' +
    '                <label>Наименование</label>\n' +
    '                <input type="text" ng-model="ctrl.currentAccessory.name">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Обозначение основных КД, ТД, стандартов и ТУ</label>\n' +
    '                <input type="text" ng-model="ctrl.currentAccessory.designation">\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="actions">\n' +
    '        <div class="ui red button" ng-if="ctrl.update" ng-click="ctrl.deleteAccessory()">\n' +
    '            Удалить\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui deny black button" ng-if="!ctrl.update">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.saveAccessory()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui divider"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/detail/accessories/detail-accessories.tmpl.html',
    '<div class="item__inner-header" ng-click="detailAccessoriesCtrl.toggle()">Комплектующие</div>\n' +
    '\n' +
    '<div class="item__table-wrapper tableAnimation" ng-if="detailAccessoriesCtrl.opened">\n' +
    '    <table class="item__table" id="{{detailAccessoriesCtrl.detail.uuid + \'-table\'}}">\n' +
    '        <tr class="item__table-header">\n' +
    '            <td class="item__table-header-cell">Наименование</td>\n' +
    '            <td class="item__table-header-cell">Обозначение</td>\n' +
    '        </tr>\n' +
    '\n' +
    '        <tr class="item__table-row"\n' +
    '            ng-repeat="accessory in detailAccessoriesCtrl.detail.accessories"\n' +
    '            ng-class="\'{{detailAccessoriesCtrl.contractStatus(contract)}}\'"\n' +
    '            ng-click="detailAccessoriesCtrl.editAccessory(accessory)">\n' +
    '\n' +
    '            <td class="item__table-cell">{{accessory.name}}</td>\n' +
    '            <td class="item__table-cell">{{accessory.designation}}</td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '\n' +
    '    <div class="detail-contract__add" ng-click="detailAccessoriesCtrl.addAccessory()">Добавить комплектующее</div>\n' +
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
  $templateCache.put('scripts/dev/components/detail/accessory/detail-accessory.tmpl.html',
    '<div class="detail-accessory">\n' +
    '    <div class="detail-accessory__row">\n' +
    '        <div class="detail-accessory__col">{{detailAccessoryCtrl.accessory.name}}</div>\n' +
    '        <div class="detail-accessory__col">{{detailAccessoryCtrl.accessory.designation}}</div>\n' +
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
  $templateCache.put('scripts/dev/components/detail/contract/detail-contract.tmpl.html',
    '<tr class="item__table-row"\n' +
    '    ng-class="\'{{detailContractCtrl.contractStatus(contract)}}\'"\n' +
    '    ng-click="detailContractCtrl.editContract(contract)">\n' +
    '\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.agreement}}</td>\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.customer}}</td>\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.amount}}</td>\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.quoter}}</td>\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.year}}</td>\n' +
    '    <td class="item__table-body-cell">{{detailContractCtrl.contract.prepaidNote}}</td>\n' +
    '</tr>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/detail/contracts/detail-contracts.tmpl.html',
    '<div class="item__inner-header" ng-click="detailContractsCtrl.toggle()">Контракты</div>\n' +
    '\n' +
    '<div class="item__table-wrapper tableAnimation" ng-if="detailContractsCtrl.opened">\n' +
    '    <table class="item__table" id="{{detailContractsCtrl.detail.uuid + \'-table\'}}">\n' +
    '        <tr class="item__table-header">\n' +
    '            <td class="item__table-header-cell">Договор</td>\n' +
    '            <td class="item__table-header-cell">Заказчик</td>\n' +
    '            <td class="item__table-header-cell">Кол-во изделий</td>\n' +
    '            <td class="item__table-header-cell">Квартал</td>\n' +
    '            <td class="item__table-header-cell">Год</td>\n' +
    '            <td class="item__table-header-cell">Отм. об аванс</td>\n' +
    '            <td class="item__table-header-cell">Выполнено</td>\n' +
    '            <td class="item__table-header-cell">Удалить</td>\n' +
    '        </tr>\n' +
    '\n' +
    '        <tr class="item__table-row"\n' +
    '            ng-repeat="contract in detailContractsCtrl.detail.contracts"\n' +
    '            ng-class="\'{{detailContractsCtrl.contractStatus(contract)}}\'"\n' +
    '            ng-click="detailContractsCtrl.editContract(contract)">\n' +
    '\n' +
    '            <td class="item__table-cell" ng-class="{\'_contract-done\': contract.isDone}">{{contract.agreement}}</td>\n' +
    '            <td class="item__table-cell">{{contract.customer}}</td>\n' +
    '            <td class="item__table-cell">{{contract.amount}}</td>\n' +
    '            <td class="item__table-cell">{{contract.quoter}}</td>\n' +
    '            <td class="item__table-cell">{{contract.year}}</td>\n' +
    '            <td class="item__table-cell">{{contract.prepaidNote}}</td>\n' +
    '            <td class="item__table-cell">\n' +
    '                <span class="item__table-cell-done"\n' +
    '                      ng-click="detailContractsCtrl.setDone(contract); $event.stopPropagation();"></span>\n' +
    '            </td>\n' +
    '            <td class="item__table-cell">\n' +
    '                <span class="item__table-cell-delete"\n' +
    '                      ng-click="detailContractsCtrl.deleteContract(contract); $event.stopPropagation();">X</span>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '\n' +
    '    <div class="detail-contract__add" ng-click="detailContractsCtrl.addContract()">Добавить контракт</div>\n' +
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
    '     ng-mouseenter="detailItemCtrl.toggleShowPrint()"\n' +
    '     ng-mouseleave="detailItemCtrl.toggleShowPrint()"\n' +
    '     ng-click="detailItemCtrl.onClick($event)"\n' +
    '     ng-class="{\'_expired\': detailItemCtrl.expired, \'_opened\': detailItemCtrl.isOpened, \'_print\': detailItemCtrl.print}">\n' +
    '\n' +
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
    '<div class="item__detailed" ng-if="detailItemCtrl.isOpened" id="{{detailItemCtrl.item.uuid + \'-table\'}}">\n' +
    '    <detail-accessories detail="detailItemCtrl.item"></detail-accessories>\n' +
    '    <detail-contracts detail="detailItemCtrl.item"></detail-contracts>\n' +
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
  $templateCache.put('scripts/dev/components/detail-progress/item/detail-progress-item.tmpl.html',
    '<div class="item"\n' +
    '     id="{{detailProgressItemCtrl.item.uuid}}"\n' +
    '     ng-click="detailProgressItemCtrl.toggleContracts()"\n' +
    '     ng-class="{\'_expired\': detailProgressItemCtrl.expired, \'_opened\': detailProgressItemCtrl.isOpened}">\n' +
    '\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{detailProgressItemCtrl.item.description}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{detailProgressItemCtrl.item.agreement}}</div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="item__table-wrapper tableAnimation" ng-if="detailProgressItemCtrl.isOpened">\n' +
    '    <table class="item__table" id="{{detailProgressItemCtrl.item.uuid + \'-table\'}}">\n' +
    '        <tr class="item__table-header">\n' +
    '            <td class="item__table-header-cell">Номер</td>\n' +
    '            <td class="item__table-header-cell">Срок выполнения</td>\n' +
    '        </tr>\n' +
    '        <tr class="item__table-row"\n' +
    '            ng-repeat="step in detailProgressItemCtrl.item.steps"\n' +
    '            ng-class="\'{{detailProgressItemCtrl.contractStatus(step)}}\'"\n' +
    '            ng-click="detailProgressItemCtrl.editContract(step)">\n' +
    '\n' +
    '            <td class="item__table-body-cell">{{step.number}}</td>\n' +
    '            <td class="item__table-body-cell">{{step.expirationDate}}</td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '\n' +
    '    <div class="detail-contract__add" ng-click="detailProgressItemCtrl.addStep()">Добавить этап</div>\n' +
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
  $templateCache.put('scripts/dev/components/equipment/item/equipment-item.tmpl.html',
    '<div class="item"\n' +
    '     id="{{equipmentItemCtrl.item.uuid}}"\n' +
    '     ng-click="equipmentItemCtrl.toggleContracts()"\n' +
    '     ng-class="{\'_expired\': equipmentItemCtrl.expired}">\n' +
    '\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{equipmentItemCtrl.item.name}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{equipmentItemCtrl.item.type}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{equipmentItemCtrl.item.number}}</div>\n' +
    '    </div>\n' +
    '    <div class="item__col">\n' +
    '        <div class="item__col-text">{{equipmentItemCtrl.item.expirationDate | date}}</div>\n' +
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
    '<div class="ui top fixed fluid five item menu">\n' +
    '\n' +
    '    <a class="item" ui-sref="notifications" ng-class="{\'_active\': mainHeaderCtrl.inState([\'notifications\'])}">\n' +
    '        Уведомления\n' +
    '        <div class="ui teal left pointing label">{{mainHeaderCtrl.storage.notifications.length}}</div>\n' +
    '    </a>\n' +
    '\n' +
    '    <a class="item" ui-sref="calendar" ui-sref-opts="{reload: true, notify: true}" ng-class="{\'_active\': mainHeaderCtrl.inState([\'calendar\'])}">\n' +
    '        <i class="calendar icon"></i> Календарь\n' +
    '    </a>\n' +
    '\n' +
    '    <div class="ui dropdown item" ng-class="{\'_active\': mainHeaderCtrl.inState([\'dampers\', \'research-details\', \'test-equipments\', \'university\'])}">\n' +
    '        <i class="university icon"></i> Самарский университет\n' +
    '        <i class="dropdown icon"></i>\n' +
    '\n' +
    '        <div class="menu">\n' +
    '            <a class="item" ui-sref="dampers">Виброизоляторы</a>\n' +
    '            <a class="item" ui-sref="test-equipments({vendor: \'university\'})">Испытательное оборудование</a>\n' +
    '            <a class="item" ui-sref="research-details">НИОКР</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="ui dropdown item" ng-class="{\'_active\': mainHeaderCtrl.inState([\'test-equipments\', \'progress\'])}">\n' +
    '        <i class="space shuttle icon"></i> АО РКЦ Прогресс\n' +
    '        <i class="dropdown icon"></i>\n' +
    '\n' +
    '        <div class="menu">\n' +
    '            <a class="item" ui-sref="test-equipments({vendor: \'progress\'})">Испытательное оборудование</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="ui dropdown item" ng-class="{\'_active\': mainHeaderCtrl.inState([\'print\'])}">\n' +
    '        <i class="print icon"></i> Печать\n' +
    '        <i class="dropdown icon"></i>\n' +
    '\n' +
    '        <div class="menu">\n' +
    '            <a class="item" ui-sref="print({type: \'list\'})">Перечень</a>\n' +
    '            <a class="item" ui-sref="print({type: \'nomenclature\'})">Номенклатура</a>\n' +
    '        </div>\n' +
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
  $templateCache.put('scripts/dev/components/layout/dampers/dampers-layout.tmpl.html',
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="field">\n' +
    '            <button class="ui labeled icon positive button" ng-click="ctrl.onAdd()">\n' +
    '                <i class="add circle icon"></i>\n' +
    '                Добавить виброизолятор\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui input">\n' +
    '    <input type="text" placeholder="Поиск" ng-model="ctrl.searchStr">\n' +
    '  </div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th ng-click="ctrl.order = name">Наименование</th>\n' +
    '            <th>Обозначение КД</th>\n' +
    '            <th>Срок действия ПИ</th>\n' +
    '            <th>Договоров</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="damper in ctrl.storage.dampers | filter: { name : ctrl.searchStr } | orderBy: \'name\' track by $index" ng-class="{\'active\': ctrl.inPrint(damper.uuid)}" ng-click="ctrl.onClick(damper, $event)">\n' +
    '\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{damper.name}}</td>\n' +
    '            <td>{{damper.designation}}</td>\n' +
    '            <td>{{damper.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>{{damper.contracts.length}}</td>\n' +
    '            <td>\n' +
    '                <a class="ui label" ng-class="ctrl.nf.getBadgeType(damper)">\n' +
    '                {{ctrl.nf.getBadgeText(damper)}}\n' +
    '            </a>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="ui modal" id="createDamperModal">\n' +
    '    <i class="close icon"></i>\n' +
    '    <div class="header">\n' +
    '        Добавление виброизолятора\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="content">\n' +
    '\n' +
    '        <div class="ui error message slideAnimation" ng-if="ctrl.error">\n' +
    '            <i class="close icon" ng-click="ctrl.error = false;"></i>\n' +
    '            <div class="header">\n' +
    '                Пожалуйста, заполните обязательные поля:\n' +
    '            </div>\n' +
    '            <ul class="list">\n' +
    '                <li>Наименование</li>\n' +
    '                <li>Обозначение КД</li>\n' +
    '                <li>Дата истечения срока действия ПИ</li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '\n' +
    '        <form class="ui form">\n' +
    '            <div class="required field">\n' +
    '                <label>Наименование</label>\n' +
    '                <input type="text" ng-model="ctrl.name">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Обозначение КД</label>\n' +
    '                <input type="text" ng-model="ctrl.designation">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Дата истечения срока действия ПИ</label>\n' +
    '                <input type="date" ng-model="ctrl.expirationDate">\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="actions">\n' +
    '        <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.save()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
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
    '    <div class="floating-button _print" ng-click="detailsLayoutCtrl.print()">Печать</div>\n' +
    '\n' +
    '    <div class="floating-button _add" ng-click="detailsLayoutCtrl.addDetail()"></div>\n' +
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
  $templateCache.put('scripts/dev/components/layout/details-progress/details-progress-layout.tmpl.html',
    '<div class="page-layout">\n' +
    '    <div class="page-layout__search">\n' +
    '        <input class="input" placeholder="Введите название" ng-model="detailsProgressLayoutCtrl.detailSearch">\n' +
    '    </div>\n' +
    '\n' +
    '    <detail-progress-item item="detail" ng-repeat="detail in detailsProgressLayoutCtrl.storage.details | filter: detailsProgressLayoutCtrl.detailSearch"></detail-progress-item>\n' +
    '\n' +
    '    <div class="floating-button-wrapper">\n' +
    '        <div class="floating-button" ng-click="detailsProgressLayoutCtrl.addDetail()"></div>\n' +
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
  $templateCache.put('scripts/dev/components/layout/equipments/equipments-layout.tmpl.html',
    '<div class="page-layout">\n' +
    '\n' +
    '    <div class="page-layout__search">\n' +
    '        <input class="input" placeholder="Введите название оборудования" ng-model="equipmentsLayoutCtrl.equipmentSearch">\n' +
    '    </div>\n' +
    '\n' +
    '    <equipment-item item="equipment" ng-repeat="equipment in equipmentsLayoutCtrl.storage.equipments | filter: equipmentsLayoutCtrl.equipmentFilter"></equipment-item>\n' +
    '\n' +
    '    <div class="floating-button-wrapper">\n' +
    '        <div class="floating-button" ng-click="equipmentsLayoutCtrl.addEquipment()"></div>\n' +
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
    '<div class="alert alert-info" role="alert" ng-repeat="event in ctrl.events">\n' +
    '    <strong>{{event.reason}}</strong> <a href="{{event.link}}" class="alert-link">{{event.linkText}}</a> {{event.text}}\n' +
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
    '<div class="ui compact menu" ng-if="ctrl.storage.notifications.length">\n' +
    '    <a class="item"\n' +
    '       ng-class="{\'active\': type === ctrl.currentType}"\n' +
    '       ng-click="ctrl.setType(\'\')">\n' +
    '        Все\n' +
    '        <div class="ui red label">{{ctrl.storage.notifications.length}}</div>\n' +
    '    </a>\n' +
    '\n' +
    '    <a class="item"\n' +
    '       ng-class="{\'active\': type === ctrl.currentType}"\n' +
    '       ng-repeat="type in ctrl.storage.types track by $index"\n' +
    '       ng-click="ctrl.setType(type)">\n' +
    '\n' +
    '        {{type.name}}\n' +
    '        <div class="ui teal  label">{{ctrl.getNumberOfNotificationsByType(type.designation)}}</div>\n' +
    '    </a>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui divider"></div>\n' +
    '\n' +
    '<table class="ui selectable compact table">\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="n in ctrl.storage.notifications | filter: ctrl.typeFilter" ng-class="ctrl.getRowClass(n);">\n' +
    '            <td>\n' +
    '                <i class="warning sign icon" ng-if="ctrl.getRowClass(n) === \'negative\'"></i>\n' +
    '\n' +
    '                <strong> {{n.title}} </strong>\n' +
    '            </td>\n' +
    '\n' +
    '            <td>{{n.text}}</td>\n' +
    '\n' +
    '            <td>\n' +
    '                <a href="#/{{n.link}}">\n' +
    '                    {{n.linkText}}\n' +
    '                </a>\n' +
    '            </td>\n' +
    '\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/layout/research-details/research-details-layout.tmpl.html',
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="field">\n' +
    '            <button class="ui labeled icon positive button" ng-click="ctrl.onAdd()">\n' +
    '                <i class="add circle icon"></i>\n' +
    '                Добавить НИОКР\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui input">\n' +
    '    <input type="text" placeholder="Поиск" ng-model="ctrl.searchStr">\n' +
    '  </div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Этапов</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="researchDetail in ctrl.storage.researchDetails | filter: { name: ctrl.searchStr } | orderBy: \'name\' track by $index" ng-click="ctrl.onClick(researchDetail, $event)">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{researchDetail.name}}</td>\n' +
    '            <td>{{researchDetail.steps.length}}</td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="ui modal" id="createResearchDetailModal">\n' +
    '    <i class="close icon"></i>\n' +
    '    <div class="header">\n' +
    '        Добавление НИОКР\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="content">\n' +
    '        <form class="ui form">\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Название</label>\n' +
    '                <input type="text" ng-model="ctrl.name">\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="actions">\n' +
    '        <div class="ui black deny button">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.save()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
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
  $templateCache.put('scripts/dev/components/layout/test-equipments/test-equipments-layout.tmpl.html',
    '<div class="ui form">\n' +
    '    <div class="fields">\n' +
    '        <div class="field">\n' +
    '            <button class="ui labeled icon positive button" ng-click="ctrl.onAdd()">\n' +
    '                <i class="add circle icon"></i>\n' +
    '                Добавить испытательное оборудование\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ui input">\n' +
    '    <input type="text" placeholder="Поиск" ng-model="ctrl.searchStr">\n' +
    '  </div>\n' +
    '\n' +
    '<table class="ui selectable striped celled table">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Заводской номер</th>\n' +
    '            <th>Тип</th>\n' +
    '            <th>Дата истечения строка</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="testEquipment in ctrl.storage.testEquipments | filter: { vendor: ctrl.vendor, name: ctrl.searchStr } | orderBy: \'name\' track by $index" ng-click="ctrl.onClick(testEquipment, $event)">\n' +
    '            <td>{{$index + 1}}</td>\n' +
    '            <td>{{testEquipment.name}}</td>\n' +
    '            <td>{{testEquipment.number}}</td>\n' +
    '            <td>{{testEquipment.type}}</td>\n' +
    '            <td>{{testEquipment.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>\n' +
    '                <a class="ui label" ng-class="ctrl.nf.getBadgeType(testEquipment)">{{ctrl.nf.getBadgeText(testEquipment)}}</a>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<!-- <div class="ui modal" id="createTestEquipmentModal">\n' +
    '    <i class="close icon"></i>\n' +
    '    <div class="header">\n' +
    '        Добавление испытательного оборудования\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="content">\n' +
    '\n' +
    '        <div class="ui error message slideAnimation" ng-if="ctrl.error">\n' +
    '            <i class="close icon" ng-click="ctrl.error = false;"></i>\n' +
    '            <div class="header">\n' +
    '                Пожалуйста, заполните обязательные поля:\n' +
    '            </div>\n' +
    '            <ul class="list">\n' +
    '                <li>Наименование, обозначение</li>\n' +
    '                <li>Обозначение КД</li>\n' +
    '                <li>Дата истечения срока действия ПИ</li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '\n' +
    '        <form class="ui form">\n' +
    '            <div class="required field">\n' +
    '                <label>Наименование</label>\n' +
    '                <input type="text" ng-model="ctrl.testEquipment.name">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Заводской номер</label>\n' +
    '                <input type="text" ng-model="ctrl.testEquipment.number">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Дата истечения срока</label>\n' +
    '                <input type="date" ng-model="ctrl.testEquipment.expirationDate">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Тип</label>\n' +
    '                <input type="text" ng-model="ctrl.testEquipment.type">\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="actions">\n' +
    '        <div class="ui black deny button">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.save()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div> -->\n' +
    '<!--\n' +
    '\n' +
    '<div class="modal fade" id="createTestEquipmentModal" tabindex="-1" role="dialog"\n' +
    '     aria-labelledby="createTestEquipmentModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog modal-lg" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createTestEquipmentModalLabel">Добавление испытательного оборудования</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="name">\n' +
    '                            Наименование\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="name" ng-model="ctrl.name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="number">\n' +
    '                            Заводской номер\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="number" ng-model="ctrl.number">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="designation">\n' +
    '                            Тип\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="designation" ng-model="ctrl.type">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Дата истечения срока\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="date" class="form-control" id="expirationDate" ng-model="ctrl.expirationDate">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>\n' +
    '                <button type="button" class="btn btn-success" ng-click="ctrl.save()">Добавить</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>-->');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/login/landing/login-landing.tmpl.html',
    '<div class="login-landing">\n' +
    '\n' +
    '    <div class="login-landing__form">\n' +
    '        <div class="login-landing__form-input">\n' +
    '            <input class="input" type="text" placeholder="Введите логин" ng-model="loginLandingCtrl.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="login-landing__form-input">\n' +
    '            <input class="input" type="password" placeholder="Введите пароль" ng-model="loginLandingCtrl.password">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="login-landing__form-button" ng-click="loginLandingCtrl.login()">Войти</div>\n' +
    '\n' +
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
  $templateCache.put('scripts/dev/components/dialog/accessory/add/add-accessory-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddAccessoryDialogController as ctrl">\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Наименование</label>\n' +
    '            <input type="text" ng-model="ctrl.accessory.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Обозначение основных КД, ТД, стандартов и ТУ</label>\n' +
    '            <input type="text" ng-model="ctrl.accessory.designation">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui deny black button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui red button" ng-if="ctrl.update" ng-click="ctrl.onDelete()">\n' +
    '            Удалить\n' +
    '        </div>\n' +
    '    </form>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/calendar/event/event-calendar-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="EventCalendarDialogController as ctrl">\n' +
    '\n' +
    '    <h1>Событие {{ctrl.event.date | date: \'dd.MM.yyyy\'}}</h1>\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Название</label>\n' +
    '            <input type="text" ng-model="ctrl.event.title">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Комментарий</label>\n' +
    '            <textarea row="2" ng-model="ctrl.event.comment"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <button class="ui right labeled icon button" ng-if="ctrl.event.custom" ng-click="ctrl.onGo(ctrl.event.link)">\n' +
    '            <i class="right arrow icon"></i>\n' +
    '            {{ctrl.event.linkText}}\n' +
    '        </button>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-if="!ctrl.event.custom" ng-click="ctrl.onSave()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui red button" ng-if="ctrl.update && !ctrl.event.custom" ng-click="ctrl.onDelete()">\n' +
    '            Удалить\n' +
    '        </div>\n' +
    '    </form>\n' +
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
    '<div class="ui container segment" ng-controller="AddContractDialogController as ctrl">\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Номер договора</label>\n' +
    '            <input type="text" ng-model="ctrl.contract.number">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>От даты</label>\n' +
    '            <input type="date" ng-model="ctrl.contract.fromDate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Заказчик</label>\n' +
    '            <input type="text" ng-model="ctrl.contract.customer">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Количество</label>\n' +
    '            <input type="number" min="1" step="1" ng-model="ctrl.contract.amount" value="1">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Квартал</label>\n' +
    '            <input type="number" min="1" max="4" step="1" ng-model="ctrl.contract.quoter" value="1">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Год</label>\n' +
    '            <input type="number" min="2000" step="1" ng-model="ctrl.contract.year">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field">\n' +
    '            <label>Авансирование</label>\n' +
    '            <input type="text" ng-model="ctrl.contract.prepaidNote">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="field" ng-if="ctrl.update">\n' +
    '            <div class="ui checkbox">\n' +
    '                <input type="checkbox" ng-model="ctrl.contract.done">\n' +
    '                <label>Выполнен</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui deny black button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui red button" ng-if="ctrl.update" ng-click="ctrl.onDelete()">\n' +
    '            Удалить\n' +
    '        </div>\n' +
    '    </form>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/damper/add/add-damper-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddDamperDialogController as ctrl">\n' +
    '\n' +
    '    <h1>Добавление виброизолятора</h1>\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Наименование</label>\n' +
    '            <input type="text" ng-model="ctrl.damper.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Обозначение КД</label>\n' +
    '            <input type="text" ng-model="ctrl.damper.designation">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Дата истечения срока действия ПИ</label>\n' +
    '            <input type="date" ng-model="ctrl.damper.expirationDate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '    </form>\n' +
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
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.inspectionMethods" placeholder="Состав контролируемых изделий, методов их проверки">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.controlType" placeholder="Вид контроля">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.meansMeasurement" placeholder="Необходимые средства измерений">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.guarantee" placeholder="Гарантийный срок хранения">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.fiatLabeling" placeholder="Указания о маркировке изделий">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addDetailDialogCtrl.note" placeholder="Примечание">\n' +
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

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/dialog/equipment/add/add-equipment-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddEquipmentDialogController as addEquipmentDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление ИО\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addEquipmentDialogCtrl.name" placeholder="Наименование">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addEquipmentDialogCtrl.type" placeholder="Тип">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addEquipmentDialogCtrl.number" placeholder="Заводской №">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <label>Дата окончания срока аттестации</label>\n' +
    '            <input class="input" type="date" ng-model="addEquipmentDialogCtrl.expirationDate" placeholder="Дата окончания срока аттестации">\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addEquipmentDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addEquipmentDialogCtrl.onCancel()">Отмена</div>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/detail-progress/add/add-progress-detail-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddProgressDetailDialogController as addProgressDetailDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление оборудования НИОКР\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addProgressDetailDialogCtrl.description" placeholder="Техзадание">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addProgressDetailDialogCtrl.agreement" placeholder="Договор">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addProgressDetailDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addProgressDetailDialogCtrl.onCancel()">Отмена</div>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/file/add/add-file-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddFileDialogController as ctrl">\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Название</label>\n' +
    '            <input type="text" ng-model="ctrl.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Выберите файл</label>\n' +
    '            <input type="file" id="file" ng-model="ctrl.file">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui deny black button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.addFile()">\n' +
    '            Добавить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '\n' +
    '    <div class="ui active centered inline loader" ng-if="ctrl.animated"></div>\n' +
    '\n' +
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
  $templateCache.put('scripts/dev/components/dialog/research-detail/add/add-research-detail-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddResearchDetailDialogController as ctrl">\n' +
    '\n' +
    '    <h1>Добавление НИОКР</h1>\n' +
    '\n' +
    '    <div class="content">\n' +
    '        <form class="ui form">\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Название</label>\n' +
    '                <input type="text" ng-model="ctrl.researchDetail.name">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '                Отмена\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '                Сохранить\n' +
    '                <i class="checkmark icon"></i>\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/step/add/add-step-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddStepDialogController as ctrl">\n' +
    '\n' +
    '    <h1>{{ ctrl.update ? \'Редактирование\' : \'Добавление\' }} этапа</h1>\n' +
    '\n' +
    '    <div class="content">\n' +
    '        <form class="ui form">\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Номер этапа (число)</label>\n' +
    '                <input type="number" min="1" step="1" ng-model="ctrl.step.number">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Название</label>\n' +
    '                <input type="text" ng-model="ctrl.step.name">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="required field">\n' +
    '                <label>Срок выполнения</label>\n' +
    '                <input type="date" min="1" step="1" ng-model="ctrl.step.expirationDate">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '                Отмена\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '                Сохранить\n' +
    '                <i class="checkmark icon"></i>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="ui red button" ng-if="ctrl.update" ng-click="ctrl.onDelete()">\n' +
    '                Удалить\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/test-equipment/add/add-test-equipment-dialog.tmpl.html',
    '<div class="ui container segment" ng-controller="AddTestEquipmentDialogController as ctrl">\n' +
    '\n' +
    '    <h1>Добавление испытательного оборудования</h1>\n' +
    '\n' +
    '    <form class="ui form">\n' +
    '        <div class="required field">\n' +
    '            <label>Наименование</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.name">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Заводской номер</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.number">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Дата истечения срока</label>\n' +
    '            <input type="date" ng-model="ctrl.testEquipment.expirationDate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="required field">\n' +
    '            <label>Тип</label>\n' +
    '            <input type="text" ng-model="ctrl.testEquipment.type">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui black deny button" ng-click="ctrl.onCancel()">\n' +
    '            Отмена\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="ui positive right labeled icon button" ng-click="ctrl.onSave()">\n' +
    '            Сохранить\n' +
    '            <i class="checkmark icon"></i>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>');
}]);
})();
