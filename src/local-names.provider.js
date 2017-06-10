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
