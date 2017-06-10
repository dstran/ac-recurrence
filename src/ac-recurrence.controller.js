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
