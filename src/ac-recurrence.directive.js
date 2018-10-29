(function() {
  'use strict';

  function recurrenceLink(scope, iElement, iAttrs, ngModelCtrl) {
    ngModelCtrl.$formatters.push(function(modelValue) {
      modelValue = modelValue || '';
      var rrule;
      try {
        rrule = new RRule(RRule.parseString(modelValue));
      } catch (e) {
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
        scope.vm.properties.byMonth = [
          ngModelCtrl.$viewValue.origOptions.bymonth
        ];
      }
      if (ngModelCtrl.$viewValue.origOptions.bymonthday) {
        scope.vm.properties.monthDay =
          ngModelCtrl.$viewValue.origOptions.bymonthday;
      } else {
        scope.vm.properties.monthDay = null;
      }
      scope.vm.properties.frequency = String(
        ngModelCtrl.$viewValue.origOptions.freq || 0
      );
      scope.vm.setFrequency();
      scope.vm.properties.interval =
        ngModelCtrl.$viewValue.origOptions.interval || null;
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
          scope.vm.properties.offset =
            ngModelCtrl.$viewValue.origOptions.bysetpos;
          if (angular.equals(scope.vm.properties.byWeekDay, [5, 6])) {
            scope.vm.properties.offsetPeriod = 'wkend';
          } else {
            scope.vm.properties.offsetPeriod = 'wkday';
          }
        }
      }
    };

    // Sets view value when properties change
    scope.$watch(
      'vm.properties',
      function() {
        ngModelCtrl.$setViewValue(scope.vm.rrule);
      },
      true
    );
  }

  function acRecurrence() {
    var directive = {
      controller: 'acRecurrenceController as vm',
      link: recurrenceLink,
      restrict: 'E',
      require: 'ngModel',
      scope: {
        onFrequencyChange: '&'
      },
      templateUrl: 'ac-recurrence.html'
    };

    return directive;
  }

  angular.module('ac-recurrence').directive('acRecurrence', acRecurrence);
})();
