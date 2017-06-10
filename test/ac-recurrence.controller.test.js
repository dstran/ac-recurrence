;(function() {
  'use strict';

  describe('acRecurrenceController', function() {
    var acRecurrenceController, scope;

    beforeEach(module('ac-recurrence'));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      acRecurrenceController = $controller('acRecurrenceController as vm', {
        $scope: scope,
      });
    }));

    describe('setFrequency', function() {
      it('uses in for yearly', function() {
        scope.vm.properties.frequency = 0;
        scope.vm.setFrequency();
        expect(scope.vm.preposition).toEqual(' in');
      });

      it('uses on for weekly', function() {
        scope.vm.properties.frequency = 2;
        scope.vm.setFrequency();
        expect(scope.vm.preposition).toEqual(' on');
      });

      it('uses empty string for monthly', function() {
        scope.vm.properties.frequency = 1;
        scope.vm.setFrequency();
        expect(scope.vm.preposition).toEqual('');
      });

      it('sets type to empty string for weekly', function() {
        scope.vm.properties.frequency = 2;
        scope.vm.properties.type = 'offset';
        scope.vm.setFrequency();
        expect(scope.vm.properties.type).toEqual('');
      });

      it('sets type to empty string for daily', function() {
        scope.vm.properties.frequency = 3;
        scope.vm.properties.type = 'offset';
        scope.vm.setFrequency();
        expect(scope.vm.properties.type).toEqual('');
      });

      it('does not set type to empty string for yearly', function() {
        scope.vm.properties.type = 'offset';
        scope.vm.setFrequency();
        expect(scope.vm.properties.type).toEqual('offset');
      });

      it('does not set type to empty string for monthly', function() {
        scope.vm.properties.frequency = 1;
        scope.vm.properties.type = 'offset';
        scope.vm.setFrequency();
        expect(scope.vm.properties.type).toEqual('offset');
      });
    });

    describe('printOut', function() {
      describe('yearly', function() {
        beforeEach(function() {
          scope.vm.properties.frequency = 0;
          scope.vm.properties.interval = null;
          scope.vm.properties.byMonth = null;
          scope.vm.properties.monthDay = null;
        });

        it('takes interval into account', function() {
          scope.vm.properties.interval = 3;
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;INTERVAL=3');
        });

        it('works with one month', function() {
          scope.vm.properties.byMonth = [8];
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYMONTH=8');
        });

        it('works with multiple months', function() {
          scope.vm.properties.byMonth = [2, 5];
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYMONTH=2,5');
        });

        it('by day', function() {
          scope.vm.properties.monthDay = 21;
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYMONTHDAY=21');
        });

        it('works with month and day', function() {
          scope.vm.properties.interval = 2;
          scope.vm.properties.byMonth = [4];
          scope.vm.properties.monthDay = 2;
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;INTERVAL=2;BYMONTH=4;BYMONTHDAY=2');
        });

        describe('offset', function() {
          it('sets first Sunday', function() {
            scope.vm.properties.type = 'offset';
            scope.vm.properties.offset = 1;
            scope.vm.properties.offsetPeriod = 6;
            scope.vm.printOut();
            expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYDAY=+1SU');
          });

          it('sets last Friday', function() {
            scope.vm.properties.type = 'offset';
            scope.vm.properties.offset = -1;
            scope.vm.properties.offsetPeriod = 4;
            scope.vm.printOut();
            expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYDAY=-1FR');
          });

          it('sets weekday', function() {
            scope.vm.properties.byMonth = [9];
            scope.vm.properties.type = 'offset';
            scope.vm.properties.offset = '2';
            scope.vm.properties.offsetPeriod = 'wkday';
            scope.vm.printOut();
            expect(scope.vm.rrule.toString()).toEqual('FREQ=YEARLY;BYMONTH=9;BYSETPOS=2;BYDAY=MO,TU,WE,TH,FR');
          });
        });
      });

      describe('weekly', function() {
        it('works by day', function() {
          scope.vm.properties.frequency = 2;
          scope.vm.properties.interval = null;
          scope.vm.properties.byWeekDay = [0];
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=WEEKLY;BYDAY=MO');
        });

        it('works with multiple days', function() {
          scope.vm.properties.frequency = 2;
          scope.vm.properties.interval = 2;
          scope.vm.properties.byWeekDay = [0, 2];
          scope.vm.printOut();
          expect(scope.vm.rrule.toString()).toEqual('FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE');
        });
      });
    });
  });
})();
