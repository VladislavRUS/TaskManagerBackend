(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/calendar/calendar-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <calendar-layout></calendar-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/dampers/dampers-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <dampers-layout></dampers-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/details/details-activity.tmpl.html',
    '<div class="page">\n' +
    '    <login-landing ng-if="!detailsCtrl.loginFactory.loggedIn"></login-landing>\n' +
    '\n' +
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
  $templateCache.put('scripts/dev/activity/details-progress/details-progress-activity.tmpl.html',
    '<div class="page">\n' +
    '    <login-landing ng-if="!detailsProgressCtrl.loginFactory.loggedIn"></login-landing>\n' +
    '\n' +
    '    <main-header></main-header>\n' +
    '    <details-progress-layout></details-progress-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/equipments/equipments-activity.tmpl.html',
    '<div class="page">\n' +
    '    <login-landing ng-if="!equipmentsCtrl.loginFactory.loggedIn"></login-landing>\n' +
    '\n' +
    '    <main-header></main-header>\n' +
    '    <equipments-layout vendor="university"></equipments-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/equipments-progress/equipments-progress-activity.tmpl.html',
    '<div class="page">\n' +
    '    <login-landing ng-if="!equipmentsProgressCtrl.loginFactory.loggedIn"></login-landing>\n' +
    '    <main-header></main-header>\n' +
    '    <equipments-layout vendor="progress"></equipments-layout>\n' +
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
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <events-layout></events-layout>\n' +
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
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <notifications-layout\n' +
    '            notifications="notificationsCtrl.storage.notifications">\n' +
    '    </notifications-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/research-details/research-details-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <research-details-layout></research-details-layout>\n' +
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
  $templateCache.put('scripts/dev/activity/test-equipments/test-equipments-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <test-equipments-layout></test-equipments-layout>\n' +
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
  $templateCache.put('scripts/dev/components/calendar-layout/calendar-layout.tmpl.html',
    '<div ui-calendar="ctrl.uiConfig.calendar" ng-model="ctrl.eventSources"></div>\n' +
    '\n' +
    '<!--Create event modal-->\n' +
    '<div class="modal fade" id="createEventModal" tabindex="-1" role="dialog" aria-labelledby="createEventModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createEventModalLabel">Событие ({{ctrl.currentEvent.date | date: "dd-MM-yyyy"}})</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-2" for="inputTitle">\n' +
    '                            Название\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <textarea type="text" class="form-control" id="inputTitle" ng-model="ctrl.currentEvent.title"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-2" for="inputComment">\n' +
    '                            Комментарий\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <textarea type="text" class="form-control" id="inputComment" ng-model="ctrl.currentEvent.comment"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer" ng-if="!ctrl.currentEvent.custom">\n' +
    '                <button type="button" class="btn btn-danger" ng-click="ctrl.delete()" ng-if="ctrl.update">Удалить</button>\n' +
    '                <button type="button" class="btn btn-success" ng-click="ctrl.save()">Сохранить</button>\n' +
    '            </div>\n' +
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
  $templateCache.put('scripts/dev/components/research-detail/research-detail-detailed.tmpl.html',
    '<ol class="breadcrumb">\n' +
    '    <li class="breadcrumb-item"><a ui-sref="research-details">НИОКР</a></li>\n' +
    '</ol>\n' +
    '\n' +
    '<form class="form-horizontal col-sm-12 form-control" role="form">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="name">\n' +
    '                Техзадание\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <textarea type="text" class="form-control" id="name"\n' +
    '                          ng-model="ctrl.researchDetail.requirements"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="designation">\n' +
    '                Договор\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="designation" ng-model="ctrl.researchDetail.contract">\n' +
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
    '        <strong>НИОКР обновлен!</strong>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<hr>\n' +
    '\n' +
    '<div class="d-flex justify-content-start">\n' +
    '    <div class="p-2">\n' +
    '        <h4>Этапы</h4>\n' +
    '    </div>\n' +
    '    <div class="ml-auto p-2">\n' +
    '        <button type="button" class="btn btn-sm btn-success" ng-click="ctrl.addStep(\'createStepModal\');">\n' +
    '            Добавить\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>Номер этапа</th>\n' +
    '        <th>Название</th>\n' +
    '        <th>Дата истечения срока</th>\n' +
    '        <th>Отметка</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="step in ctrl.researchDetail.steps track by $index"\n' +
    '        ng-click="ctrl.updateStep(step, \'createStepModal\');">\n' +
    '        <td>{{step.number}}</td>\n' +
    '        <td>{{step.name}}</td>\n' +
    '        <td>{{step.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '        <td>\n' +
    '            <span class="badge badge-{{ctrl.nf.getBadgeType(step)}}">{{ctrl.nf.getBadgeText(step)}}</span>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="modal fade" id="createStepModal" tabindex="-1" role="dialog"\n' +
    '     aria-labelledby="createStepModalLabel"\n' +
    '     aria-hidden="true">\n' +
    '    <div class="modal-dialog" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createStepModalLabel">\n' +
    '                    Этап\n' +
    '                </h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="stepNumber">\n' +
    '                            Номер этапа\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="stepNumber"\n' +
    '                                   ng-model="ctrl.currentStep.number">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="stepName">\n' +
    '                            Название\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="stepName"\n' +
    '                                   ng-model="ctrl.currentStep.name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="stepExpirationDate">\n' +
    '                            Дата истечения срока\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="date" class="form-control" id="stepExpirationDate"\n' +
    '                                   ng-model="ctrl.currentStep.expirationDate">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-danger" ng-if="ctrl.update" ng-click="ctrl.deleteStep()">Удалить</button>\n' +
    '                <button type="button" class="btn btn-success" ng-click="ctrl.saveStep()">Сохранить</button>\n' +
    '            </div>\n' +
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
  $templateCache.put('scripts/dev/components/test-equipment/test-equipment-detailed.tmpl.html',
    '<ol class="breadcrumb">\n' +
    '    <li class="breadcrumb-item"><a ui-sref="test-equipments({vendor: ctrl.testEquipment.vendor})">Испытательное оборудование</a></li>\n' +
    '    <li class="breadcrumb-item active">{{ctrl.testEquipment.name}}</li>\n' +
    '</ol>\n' +
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
    '</form>');
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
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <damper-detailed damper="dampersDetailedCtrl.damper"></damper-detailed>\n' +
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
  $templateCache.put('scripts/dev/activity/research-details/detailed/research-details-detailed-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <research-detail-detailed research-detail="researchDetailsDetailedCtrl.researchDetail"></research-detail-detailed>\n' +
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
  $templateCache.put('scripts/dev/activity/test-equipments/detailed/test-equipments-detailed-activity.tmpl.html',
    '<div class="container">\n' +
    '    <main-header></main-header>\n' +
    '    <test-equipment-detailed test-equipment="testEquipmentsDetailedCtrl.testEquipment"></test-equipment-detailed>\n' +
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
  $templateCache.put('scripts/dev/components/damper/detailed/damper-detailed.tmpl.html',
    '<ol class="breadcrumb">\n' +
    '    <li class="breadcrumb-item"><a ui-sref="dampers">Виброизоляторы</a></li>\n' +
    '    <li class="breadcrumb-item active">{{ctrl.damper.name}}</li>\n' +
    '</ol>\n' +
    '\n' +
    '<form class="form-horizontal col-sm-12 form-control" role="form">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="name">\n' +
    '                Название\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="name" ng-model="ctrl.damper.name">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="designation">\n' +
    '                Обозначение\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="designation" ng-model="ctrl.damper.designation">\n' +
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
    '                <input type="date" class="form-control" id="expirationDate" ng-model="ctrl.damper.expirationDate">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="inspectionMethods">\n' +
    '                Состав контролируемых изделий\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <textarea type="text" class="form-control" id="inspectionMethods"\n' +
    '                          ng-model="ctrl.damper.inspectionMethods"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="controlType">\n' +
    '                Вид контроля, объем выборки, контрольные нормативы\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="controlType" ng-model="ctrl.damper.controlType">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="measurementMeans">\n' +
    '                Необходимые средства измерений\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="measurementMeans" ng-model="ctrl.damper.measurementMeans">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="guarantee">\n' +
    '                Гарантийный срок хранения\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="guarantee" ng-model="ctrl.damper.guarantee">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="fiatLabeling">\n' +
    '                Указания о маркировке изделий\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="fiatLabeling" ng-model="ctrl.damper.fiatLabeling">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="note">\n' +
    '                Примечание\n' +
    '            </label>\n' +
    '            <div class="col-sm-12">\n' +
    '                <input type="text" class="form-control" id="note" ng-model="ctrl.damper.note">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-6 form-group">\n' +
    '            <label class="col-sm-12" for="note">\n' +
    '                &nbsp;\n' +
    '            </label>\n' +
    '\n' +
    '            <div class="col-sm-12 d-flex">\n' +
    '                <button type="button" ng-click="ctrl.onUpdate()" class="btn btn-success">Обновить</button>\n' +
    '                <button type="button" ng-click="ctrl.onDelete()" class="btn btn-danger ml-auto">Удалить</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div id="updateAlert" class="alert alert-success slideAnimation" ng-if="ctrl.showAlert" role="alert">\n' +
    '        <strong>Виброизолятор обновлен!</strong>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<hr>\n' +
    '\n' +
    '<div class="d-flex justify-content-start">\n' +
    '    <div class="p-2">\n' +
    '        <h4>Договоры</h4>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="ml-auto p-2">\n' +
    '\n' +
    '        <input class="form-check-input" id="hideDone" type="checkbox" ng-click="ctrl.toggleDone()">Скрыть выполненные\n' +
    '\n' +
    '        <button type="button" class="btn btn-sm btn-success ml-2" ng-click="ctrl.addContract(\'createContractModal\');">\n' +
    '            Добавить\n' +
    '        </button>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Соглашение</th>\n' +
    '        <th>Заказчик</th>\n' +
    '        <th>Кол-во</th>\n' +
    '        <th>Квартал</th>\n' +
    '        <th>Год</th>\n' +
    '        <th>Отметка о предварительном авансировании</th>\n' +
    '        <th>Выполнен</th>\n' +
    '        <th>Отметка</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="contract in ctrl.damper.contracts | filter: ctrl.filterContract track by $index"\n' +
    '        ng-click="ctrl.updateContract(contract, \'createContractModal\');">\n' +
    '        <th>{{$index + 1}}</th>\n' +
    '        <td>{{contract.agreement}}</td>\n' +
    '        <td>{{contract.customer}}</td>\n' +
    '        <td>{{contract.amount}}</td>\n' +
    '        <td>{{contract.quoter}}</td>\n' +
    '        <td>{{contract.year}}</td>\n' +
    '        <td>{{contract.prepaidNote}}</td>\n' +
    '        <td>{{contract.done ? \'Да\' : \'Нет\'}}</td>\n' +
    '        <td>\n' +
    '            <span class="badge badge-{{ctrl.nf.getBadgeType(contract)}}">{{ctrl.nf.getBadgeText(contract)}}</span>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<hr>\n' +
    '\n' +
    '<div class="d-flex justify-content-start">\n' +
    '    <div class="p-2">\n' +
    '        <h4>Комплектующие</h4>\n' +
    '    </div>\n' +
    '    <div class="ml-auto p-2">\n' +
    '        <button type="button" class="btn btn-sm btn-success"\n' +
    '                ng-click="ctrl.addAccessory(\'createAccessoryModal\', \'component\');">Добавить\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Наименование, обозначение</th>\n' +
    '        <th>Обозначение КД, ТД и ТУ</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="accessory in ctrl.damper.accessories | filter: { type: \'component\' }"\n' +
    '        ng-click="ctrl.updateAccessory(accessory, \'createAccessoryModal\');">\n' +
    '        <th>{{$index + 1}}</th>\n' +
    '        <td>{{accessory.name}}</td>\n' +
    '        <td>{{accessory.designation}}</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<hr>\n' +
    '\n' +
    '<div class="d-flex justify-content-start">\n' +
    '    <div class="p-2">\n' +
    '        <h4>Расходные материалы</h4>\n' +
    '    </div>\n' +
    '    <div class="ml-auto p-2">\n' +
    '        <button type="button" class="btn btn-sm btn-success"\n' +
    '                ng-click="ctrl.addAccessory(\'createAccessoryModal\', \'material\');">Добавить\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Наименование, обозначение</th>\n' +
    '        <th>Обозначение КД, ТД и ТУ</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="accessory in ctrl.damper.accessories | filter: { type: \'material\' }"\n' +
    '        ng-click="ctrl.updateAccessory(accessory, \'createAccessoryModal\');">\n' +
    '        <th>{{$index + 1}}</th>\n' +
    '        <td>{{accessory.name}}</td>\n' +
    '        <td>{{accessory.designation}}</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="modal fade" id="createContractModal" tabindex="-1" role="dialog" aria-labelledby="createContractModalLabel"\n' +
    '     aria-hidden="true">\n' +
    '    <div class="modal-dialog" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createContractModalLabel">Договор</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="name">\n' +
    '                            Соглашение о поставке\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="agreement"\n' +
    '                                   ng-model="ctrl.currentContract.agreement">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="designation">\n' +
    '                            Заказчик\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="customer"\n' +
    '                                   ng-model="ctrl.currentContract.customer">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Количество\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="number" min="1" step="1" class="form-control" id="amount"\n' +
    '                                   ng-model="ctrl.currentContract.amount">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Квартал\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="number" min="1" max="4" step="1" class="form-control" id="quoter"\n' +
    '                                   ng-model="ctrl.currentContract.quoter">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Год\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="number" min="2000" step="1" class="form-control" id="year"\n' +
    '                                   ng-model="ctrl.currentContract.year">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Заметка об авансировании\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="prepaidNote"\n' +
    '                                   ng-model="ctrl.currentContract.prepaidNote">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group" ng-if="ctrl.update">\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <div class="form-check">\n' +
    '                                <label class="form-check-label"></label>\n' +
    '                                <input class="form-check-input" id="done" type="checkbox"\n' +
    '                                       ng-model="ctrl.currentContract.done">Выполнен\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '\n' +
    '                <button type="button" class="btn btn-danger" ng-if="ctrl.update" ng-click="ctrl.deleteContract()">Удалить</button>\n' +
    '                <button type="button" class="btn btn-success" ng-click="ctrl.saveContract()">Сохранить</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal fade" id="createAccessoryModal" tabindex="-1" role="dialog"\n' +
    '     aria-labelledby="createAccessoryModalLabel"\n' +
    '     aria-hidden="true">\n' +
    '    <div class="modal-dialog" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createAccessoryModalLabel">\n' +
    '                    {{ctrl.accessoryTypes[ctrl.currentAccessory.type]}}</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="accessoryName">\n' +
    '                            Наименование\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="accessoryName"\n' +
    '                                   ng-model="ctrl.currentAccessory.name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="accessoryDesignation">\n' +
    '                            Обозначение основных КД, ТД, стандартов и ТУ\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="accessoryDesignation"\n' +
    '                                   ng-model="ctrl.currentAccessory.designation">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-danger" ng-if="ctrl.update" ng-click="ctrl.deleteAccessory()">Удалить</button>\n' +
    '                <button type="button" class="btn btn-success" ng-click="ctrl.saveAccessory()">Сохранить</button>\n' +
    '            </div>\n' +
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
    '<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">\n' +
    '    <div class="collapse navbar-collapse" id="navbarsExampleDefault">\n' +
    '        <ul class="navbar-nav mr-auto">\n' +
    '\n' +
    '            <li class="nav-item">\n' +
    '                <a class="nav-link" ng-class="{\'active\': mainHeaderCtrl.inState([\'notifications\'])}" ui-sref="notifications">Уведомления ({{mainHeaderCtrl.storage.notifications.length}})</a>\n' +
    '            </li>\n' +
    '\n' +
    '            <li class="nav-item">\n' +
    '                <a class="nav-link" ng-class="{\'active\': mainHeaderCtrl.inState([\'calendar\'])}" ui-sref="calendar">Календарь</a>\n' +
    '            </li>\n' +
    '\n' +
    '            <li class="nav-item dropdown">\n' +
    '                <span class="nav-link dropdown-toggle cursor-pointer"\n' +
    '                      ng-class="{\'active\': mainHeaderCtrl.inState([\'dampers\', \'test-equipments\', \'university\'])}"\n' +
    '                      id="dropdown01"\n' +
    '                      data-toggle="dropdown"\n' +
    '                      aria-haspopup="true"\n' +
    '                      aria-expanded="false">\n' +
    '                    Самарский университет\n' +
    '                </span>\n' +
    '\n' +
    '                <div class="dropdown-menu" aria-labelledby="dropdown01">\n' +
    '                    <a class="dropdown-item" href="#" ui-sref="dampers">Виброизоляторы</a>\n' +
    '                    <a class="dropdown-item" href="#" ui-sref="test-equipments({vendor: \'university\'})">Испытательное оборудование</a>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '\n' +
    '            <li class="nav-item dropdown">\n' +
    '                <span class="nav-link dropdown-toggle cursor-pointer"\n' +
    '                      ng-class="{\'active\': mainHeaderCtrl.inState([\'research-details\', \'test-equipments\', \'progress\'])}"\n' +
    '                      id="dropdown02"\n' +
    '                      data-toggle="dropdown"\n' +
    '                      aria-haspopup="true"\n' +
    '                      aria-expanded="false">АО РКЦ Прогресс</span>\n' +
    '\n' +
    '                <div class="dropdown-menu" aria-labelledby="dropdown02">\n' +
    '                    <a class="dropdown-item" href="#" ui-sref="research-details">НИОКР</a>\n' +
    '                    <a class="dropdown-item" href="#" ui-sref="test-equipments({vendor: \'progress\'})">Испытательное оборудование</a>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</nav>');
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
    '<form>\n' +
    '    <div class="form-group d-flex">\n' +
    '        <button type="button" class="btn btn-success" ng-click="ctrl.onAdd()">Добавить виброизолятор</button>\n' +
    '        <button type="button" class="btn btn-info ml-auto" ng-click="ctrl.onPrint()">Печать ({{ctrl.print.length}})</button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>Название</th>\n' +
    '            <th>Обозначение</th>\n' +
    '            <th>Дата истечения строка</th>\n' +
    '            <th>Контрактов</th>\n' +
    '            <th>Отметка</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="damper in ctrl.storage.dampers track by $index" ng-style="ctrl.inPrint(damper.uuid) && {\'font-weight\': \'bolder\', \'text-decoration\': \'underline\'}" ng-click="ctrl.onClick(damper, $event)">\n' +
    '            <th>{{$index + 1}}</th>\n' +
    '            <td>{{damper.name}}</td>\n' +
    '            <td>{{damper.designation}}</td>\n' +
    '            <td>{{damper.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '            <td>{{damper.contracts.length}}</td>\n' +
    '            <td>\n' +
    '                <span class="badge badge-{{ctrl.nf.getBadgeType(damper)}}">{{ctrl.nf.getBadgeText(damper)}}</span>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="modal fade" id="createDamperModal" tabindex="-1" role="dialog" aria-labelledby="createDamperModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog modal-lg" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createDamperModalLabel">Добавление виброизолятора</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="name">\n' +
    '                            Наименование, обозначение\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="name" ng-model="ctrl.name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="designation">\n' +
    '                            Обозначение КД\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="designation" ng-model="ctrl.designation">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="expirationDate">\n' +
    '                            Дата истечения срока действия ПИ\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="date" class="form-control" id="expirationDate" ng-model="ctrl.expirationDate">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="inspectionMethods">\n' +
    '                            Состав контролируемых параметров изделий\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <textarea type="text" class="form-control" id="inspectionMethods" ng-model="ctrl.inspectionMethods"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="controlType">\n' +
    '                            Вид контроля, объем выборки, контрольные нормативы и правила выборочного контроля\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="controlType" ng-model="ctrl.controlType">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="measurementMeans">\n' +
    '                            Средства измерений необходимые для контроля параметров изделий\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="measurementMeans" ng-model="ctrl.measurementMeans">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="guarantee">\n' +
    '                            Гарантийный срок хранения\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="guarantee" ng-model="ctrl.guarantee">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="fiatLabeling">\n' +
    '                            Указания о маркировке изделий по результатам входного контроля\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="fiatLabeling" ng-model="ctrl.fiatLabeling">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="note">\n' +
    '                            Примечание\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="note" ng-model="ctrl.note">\n' +
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
    '<ul class="list-group col-md-6">\n' +
    '    <li class="list-group-item list-group-item-action justify-content-between"\n' +
    '        ng-class="{\'active\': type.designation == ctrl.currentType.designation}"\n' +
    '        ng-click="ctrl.setType(type)"\n' +
    '        ng-repeat="type in ctrl.storage.types">\n' +
    '        {{type.name}}\n' +
    '        <span class="badge badge-default badge-pill">{{ctrl.getNumberOfNotificationsByType(type.designation)}}</span>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '\n' +
    '<hr>\n' +
    '\n' +
    '<div class="alert alert-{{ctrl.getNotificationAlertType(n)}} col-md-12" role="alert"\n' +
    '     ng-repeat="n in ctrl.notifications | filter: ctrl.typeFilter">\n' +
    '\n' +
    '    <h4 class="alert-heading">{{n.title}}</h4>\n' +
    '\n' +
    '    <a href="#/{{n.link}}" class="alert-link">\n' +
    '        {{n.linkText}}\n' +
    '    </a>\n' +
    '\n' +
    '    <p>{{n.text}}</p>\n' +
    '</div>\n' +
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
    '<form>\n' +
    '    <div class="form-group d-flex">\n' +
    '        <button type="button" class="btn btn-success" ng-click="ctrl.onAdd()">Добавить НИОКР</button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Техзадание</th>\n' +
    '        <th>Договор</th>\n' +
    '        <th>Этапов</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="researchDetail in ctrl.storage.researchDetails" ng-click="ctrl.onClick(researchDetail, $event)">\n' +
    '        <th>{{$index + 1}}</th>\n' +
    '        <td>{{researchDetail.requirements}}</td>\n' +
    '        <td>{{researchDetail.contract}}</td>\n' +
    '        <td>{{researchDetail.steps.length}}</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="modal fade" id="createResearchDetailModal" tabindex="-1" role="dialog" aria-labelledby="createResearchDetailModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog modal-lg" role="document">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <h5 class="modal-title" id="createResearchDetailModalLabel">Добавление НИОКР</h5>\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                    <span aria-hidden="true">&times;</span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="name">\n' +
    '                            Техзадание\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <textarea type="text" class="form-control" id="name" ng-model="ctrl.requirements"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-12" for="number">\n' +
    '                            Договор\n' +
    '                        </label>\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" class="form-control" id="number" ng-model="ctrl.contract">\n' +
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
    '<form>\n' +
    '    <div class="form-group d-flex">\n' +
    '        <button type="button" class="btn btn-success" ng-click="ctrl.onAdd()">Добавить испытательное оборудование</button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<table class="table table-hover">\n' +
    '    <thead class="thead-inverse">\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Название</th>\n' +
    '        <th>Заводской номер</th>\n' +
    '        <th>Тип</th>\n' +
    '        <th>Дата истечения строка</th>\n' +
    '        <th>Отметка</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="testEquipment in ctrl.storage.testEquipments | filter: { vendor: ctrl.vendor }" ng-click="ctrl.onClick(testEquipment, $event)">\n' +
    '        <th>{{$index + 1}}</th>\n' +
    '        <td>{{testEquipment.name}}</td>\n' +
    '        <td>{{testEquipment.number}}</td>\n' +
    '        <td>{{testEquipment.type}}</td>\n' +
    '        <td>{{testEquipment.expirationDate | date: \'dd-MM-yyyy\'}}</td>\n' +
    '        <td>\n' +
    '            <span class="badge badge-{{ctrl.nf.getBadgeType(testEquipment)}}">{{ctrl.nf.getBadgeText(testEquipment)}}</span>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<div class="modal fade" id="createTestEquipmentModal" tabindex="-1" role="dialog" aria-labelledby="createTestEquipmentModalLabel" aria-hidden="true">\n' +
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
    '<div class="dialog-add jsPopup" ng-controller="AddAccessoryDialogController as addAccessoryDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление комплектующего\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addAccessoryDialogCtrl.name" placeholder="Наименование">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="addAccessoryDialogCtrl.designation" placeholder="Обозначение">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addAccessoryDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addAccessoryDialogCtrl.onCancel()">Отмена</div>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/accessory/edit/edit-accessory-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="EditAccessoryDialogController as editAccessoryDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Редактирование комплектующего\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="editAccessoryDialogCtrl.accessory.name" placeholder="Имя">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="editAccessoryDialogCtrl.accessory.designation" placeholder="Обозначение">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="editAccessoryDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="editAccessoryDialogCtrl.onCancel()">Отмена</div>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/contract/edit/edit-contract-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="EditContractDialogController as editContractDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Редактирование контракта\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="editContractDialogCtrl.contract.agreement" placeholder="Договор поставки, доп. соглашение">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="editContractDialogCtrl.contract.customer" placeholder="Заказчик">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="number" ng-model="editContractDialogCtrl.contract.amount" placeholder="Количество изделий">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="number" ng-model="editContractDialogCtrl.contract.quoter" min="1" max="4" placeholder="Квартал">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="number" ng-model="editContractDialogCtrl.contract.year" placeholder="Год">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="text" ng-model="editContractDialogCtrl.contract.prepaidNote" placeholder="Отметка об авансировании">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="editContractDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="editContractDialogCtrl.onCancel()">Отмена</div>\n' +
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
  $templateCache.put('scripts/dev/components/dialog/step/add/add-step-dialog.tmpl.html',
    '<div class="dialog-add jsPopup" ng-controller="AddStepDialogController as addStepDetailDialogCtrl">\n' +
    '    <div class="dialog-add__header">\n' +
    '        Добавление виброизолятора\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__body">\n' +
    '        <div class="dialog-add__control">\n' +
    '            <input class="input" type="number" ng-model="addStepDetailDialogCtrl.number" placeholder="Номер этапа">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="dialog-add__control">\n' +
    '            <label>Срок выполнения</label>\n' +
    '            <input class="input" type="date" ng-model="addStepDetailDialogCtrl.expirationDate" placeholder="Срок выполнения">\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog-add__actions">\n' +
    '        <div class="dialog-add__actions-button _save"\n' +
    '             ng-click="addStepDetailDialogCtrl.onSave()">Сохранить</div>\n' +
    '\n' +
    '        <div class="dialog-add__actions-button _cancel"\n' +
    '             ng-click="addStepDetailDialogCtrl.onCancel()">Отмена</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
