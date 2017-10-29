var acRecurrence =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_styles_ac_recurrence_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_styles_ac_recurrence_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_styles_ac_recurrence_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_filter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_filter__);





__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = angular.filter;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

;(function() {
  'use strict';

  angular.module('ac-recurrence', ['angular.filter']);
})();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

;(function() {
  'use strict';

  angular.module('ac-recurrence')
    .constant('RRule', RRule);
})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var path = 'ac-grid.html';
var html = "<div class=\"outer\">\n  <div class=\"vis-hidden\" ng-repeat=\"row in ::options | chunkBy : perRow\">\n    <input id=\"{{'cell-' + $id}}\" ng-model=\"selections[cell.value]\" type=\"checkbox\" ng-repeat-start=\"cell in row\">\n    <label for=\"{{'cell-' + $id }}\" ng-repeat-end>{{ cell.label }}</label>\n  </div>\n</div>\n";
var angular = __webpack_require__(0);
angular.module('ac-recurrence').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var path = 'ac-recurrence.html';
var html = "<div ng-form>\n  <fieldset>\n    <label>Frequency</label>\n    <select ng-model=\"vm.properties.frequency\" ng-change=\"vm.setFrequency()\">\n      <option value=\"3\">daily</option>\n      <option value=\"2\">weekly</option>\n      <option value=\"1\">monthly</option>\n      <option value=\"0\">yearly</option>\n    </select>\n\n    <div>\n      <label>Every</label>\n      <input type=\"number\" ng-model=\"vm.properties.interval\" min=\"1\"></input>\n      <label>{{ vm.word }}<ng-pluralize count=\"vm.properties.interval\" when=\"{ 1: '', other: 's'}\"></ng-pluralize>{{ vm.preposition }}</label>\n    </div>\n\n    <ac-grid ng-if=\"vm.properties.frequency === '2'\" ng-model=\"vm.properties.byWeekDay\" options=\"vm.days\" per-row=\"7\"></ac-grid>\n    <ac-grid ng-if=\"vm.properties.frequency === '0'\" ng-model=\"vm.properties.byMonth\" options=\"vm.months\" per-row=\"3\"></ac-grid>\n\n    <div ng-if=\"['1', '0'].includes(vm.properties.frequency)\">\n      <input ng-model=\"vm.properties.type\" value=\"day\" type=\"radio\">\n      <label>on the</label>\n      <input type=\"number\" ng-model=\"vm.properties.monthDay\" min=\"1\" max=\"31\"><ng-pluralize count=\"vm.properties.monthDay\" when=\"{ 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st', other: 'th'}\"></ng-pluralize>\n    </div>\n    <div ng-if=\"['1', '0'].includes(vm.properties.frequency)\">\n      <input ng-model=\"vm.properties.type\" value=\"offset\" type=\"radio\">\n      <label>on the</label>\n      <select ng-model=\"vm.properties.offset\">\n        <option ng-value=\"1\">first</option>\n        <option value=\"2\">second</option>\n        <option value=\"3\">third</option>\n        <option value=\"4\">fourth</option>\n        <option value=\"5\">fifth</option>\n        <option value=\"-1\">last</option>\n      </select>\n      <select ng-model=\"vm.properties.offsetPeriod\">\n        <option ng-value=\"6\">Sunday</option>\n        <option ng-value=\"0\">Monday</option>\n        <option ng-value=\"1\">Tuesday</option>\n        <option ng-value=\"2\">Wednesday</option>\n        <option ng-value=\"3\">Thursday</option>\n        <option ng-value=\"4\">Friday</option>\n        <option ng-value=\"5\">Saturday</option>\n        <option value=\"wkday\">weekday</option>\n        <option value=\"wkend\">weekend day</option>\n      </select>\n    </div>\n  </fieldset>\n</div>\n";
var angular = __webpack_require__(0);
angular.module('ac-recurrence').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

;(function() {
  angular
    .module('ac-recurrence')
    .provider('localNames', localNames);

  function localNames(RRule) {
    this.$get = LocalNames;


    function LocalNames() {
      var names = {
        daysOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        shortDays: [
          { label: 'S', value: 6 },
          { label: 'M', value: 0 },
          { label: 'T', value: 1 },
          { label: 'W', value: 2 },
          { label: 'T', value: 3 },
          { label: 'F', value: 4 },
          { label: 'S', value: 5 }
        ],
        shortMonths: [
          { label: 'Jan', value: 1 },
          { label: 'Feb', value: 2 },
          { label: 'Mar', value: 3 },
          { label: 'Apr', value: 4 },
          { label: 'May', value: 5 },
          { label: 'Jun', value: 6 },
          { label: 'Jul', value: 7 },
          { label: 'Aug', value: 8 },
          { label: 'Sep', value: 9 },
          { label: 'Oct', value: 10 },
          { label: 'Nov', value: 11 },
          { label: 'Dec', value: 12 }
        ],
        frequencies: {
          '3': 'day',
          '2': 'week',
          '1': 'month',
          '0': 'year'
        }
      };

      return names;
    }
  };

  localNames.$inject = ['RRule'];
})();


/***/ }),
/* 9 */
/***/ (function(module, exports) {

;(function() {
  'use strict';

  function acGrid() {
    return {
      link: function(scope, iElement, iAttrs, ngModelCtrl) {
        ngModelCtrl.$formatters.push(formatter);

        ngModelCtrl.$parsers.push(parser);

        ngModelCtrl.$render = function() {
          scope.selections = ngModelCtrl.$viewValue;
        };

        scope.$watch('selections', function() {
          var selections = scope.selections || {};
          ngModelCtrl.$setViewValue({ selections: selections });
        }, true);
      },
      require: 'ngModel',
      restrict: 'E',
      scope: {
        ngModel: '=',
        options: '<',
        perRow: '<'
      },
      templateUrl: 'ac-grid.html',
    };

    function formatter(modelValue) {
      var value = modelValue || [];
      var selections = {};

      value.map(function(number) {
        selections[number] = true;
      });

      return selections;
    }

    function parser(viewValue) {
      var output = [];

      for (var k in viewValue.selections) {
        if (viewValue.selections[k] === true) {
          output.push(k);
        }
      }

      return output;
    }
  }

  angular.module('ac-recurrence').directive('acGrid', acGrid);
})();


/***/ }),
/* 10 */
/***/ (function(module, exports) {

;(function() {
  'use strict';

  function recurrenceLink(scope, iElement, iAttrs, ngModelCtrl) {
    ngModelCtrl.$formatters.push(function(modelValue) {
      modelValue = modelValue || '';
      var rrule;
      try {
        rrule = new RRule(RRule.parseString(modelValue));
      } catch(e) {
        console.log(e);
        rrule = new RRule();
      }
      return rrule;
    });

    ngModelCtrl.$parsers.push(function(viewValue) {
      scope.vm.printOut();
      return scope.vm.rrule.toString();
    });

    ngModelCtrl.$render = function() {
      if (ngModelCtrl.$viewValue.origOptions.bymonth) {
        scope.vm.properties.byMonth = [ngModelCtrl.$viewValue.origOptions.bymonth];
      }
      if (ngModelCtrl.$viewValue.origOptions.bymonthday) {
        scope.vm.properties.monthDay = ngModelCtrl.$viewValue.origOptions.bymonthday;
      } else {
        scope.vm.properties.monthDay = null;
      }
      scope.vm.properties.frequency = String(ngModelCtrl.$viewValue.origOptions.freq || 0);
      scope.vm.setFrequency();
      scope.vm.properties.interval = ngModelCtrl.$viewValue.origOptions.interval || null;
      var byWeekDay = ngModelCtrl.$viewValue.origOptions.byweekday || [];
      if (byWeekDay[0] && byWeekDay[0].n) {
        scope.vm.properties.type = 'offset';
        scope.vm.properties.offset = byWeekDay[0].n;
        scope.vm.properties.offsetPeriod = byWeekDay[0].weekday;
      } else {
        scope.vm.properties.type = 'day';
        scope.vm.properties.offset = 1;
        scope.vm.properties.offsetPeriod = 6;
        scope.vm.properties.byWeekDay = byWeekDay.map(function(w) {
          return w.weekday;
        });
        if (ngModelCtrl.$viewValue.origOptions.bysetpos) {
          scope.vm.properties.type = 'offset';
          scope.vm.properties.offset = ngModelCtrl.$viewValue.origOptions.bysetpos;
          if (angular.equals(scope.vm.properties.byWeekDay, [5, 6])) {
            scope.vm.properties.offsetPeriod = 'wkend';
          } else {
            scope.vm.properties.offsetPeriod = 'wkday';
          }

        }
      }
    };

    // Sets view value when properties change
    scope.$watch('vm.properties', function() {
      ngModelCtrl.$setViewValue(scope.vm.rrule);
    }, true);
  };

  function acRecurrence() {
    var directive = {
      controller: 'acRecurrenceController as vm',
      link: recurrenceLink,
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      templateUrl: 'ac-recurrence.html'
    };

    return directive;
  }

  angular.module('ac-recurrence').directive('acRecurrence', acRecurrence);
})();


/***/ }),
/* 11 */
/***/ (function(module, exports) {

;(function() {
  'use strict';

  function acRecurrenceController(localNames, $filter, RRule) {
    var vm = this;
    vm.properties = {};
    vm.months = localNames.shortMonths;
    vm.days = localNames.shortDays;
    // vm.properties.offset = '1';
    // vm.properties.offsetPeriod = 'SU';
    vm.printOut = printOut;
    vm.rrule = '';
    vm.setFrequency = setFrequency;

    vm.preposition = ' in';
    vm.word = 'year';
    var friendly = {
      '0': 'YEARLY',
      '1': 'MONTHLY',
      '2': 'WEEKLY',
      '3': 'DAILY'
    };
    var unfriendly = {
      0: 'MO',
      1: 'TU',
      2: 'WE',
      3: 'TH',
      4: 'FR',
      5: 'SA',
      6: 'SU'
    };

    function setFrequency() {
      vm.word = localNames.frequencies[vm.properties.frequency];
      if (friendly[vm.properties.frequency] === 'YEARLY') {
        vm.preposition = ' in';
      } else if (friendly[vm.properties.frequency] === 'WEEKLY') {
        vm.preposition = ' on';
      } else {
        vm.preposition = '';
      }

      if (friendly[vm.properties.frequency] === 'WEEKLY' || friendly[vm.properties.frequency] === 'DAILY') {
        vm.properties.type = '';
      }
    }

    function printOut() {
      var byWeekDay = [];
      if (friendly[vm.properties.frequency] === 'WEEKLY') {
        byWeekDay = vm.properties.byWeekDay;
      }

      var bySetPos = null;
      var monthDay = null;
      var byMonth = null;
      if (friendly[vm.properties.frequency] === 'YEARLY' || friendly[vm.properties.frequency] === 'MONTHLY') {
        if (vm.properties.type === 'offset') {
          if (vm.properties.offsetPeriod === 'wkday') {
            byWeekDay.push(RRule['MO']);
            byWeekDay.push(RRule['TU']);
            byWeekDay.push(RRule['WE']);
            byWeekDay.push(RRule['TH']);
            byWeekDay.push(RRule['FR']);
            bySetPos = parseInt(vm.properties.offset);
          } else if (vm.properties.offsetPeriod === 'wkend') {
            byWeekDay.push(RRule['SA']);
            byWeekDay.push(RRule['SU']);
            bySetPos = parseInt(vm.properties.offset);
          } else {
            byWeekDay.push(RRule[unfriendly[vm.properties.offsetPeriod]].nth(vm.properties.offset))
          }
        } else {
          monthDay = vm.properties.monthDay;
        }

        if (friendly[vm.properties.frequency] === 'YEARLY') {
          byMonth = vm.properties.byMonth;
        }
      }

      vm.rrule = new RRule({
        freq: parseInt(vm.properties.frequency),
        interval: vm.properties.interval,
        bymonth: byMonth,
        bymonthday: monthDay,
        bysetpos: bySetPos,
        byweekday: byWeekDay
      });
    }
  }

  acRecurrenceController.$inject = ['localNames', '$filter', 'RRule'];
  angular.module('ac-recurrence').controller('acRecurrenceController', acRecurrenceController);
})();


/***/ })
/******/ ]);