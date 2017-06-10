;(function() {
  'use strict';

  describe('acRecurrence', function() {
    var scope, elem;

    beforeEach(module('ac-recurrence'));

    var tpl = '<ac-recurrence ng-model="myRRule"></ac-recurrence>';

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      scope.myRRule = '';
      elem = $compile(tpl)(scope);
      scope.$digest();
    }));

    it('defaults to yearly', function() {
      expect(scope.myRRule).toEqual('FREQ=YEARLY');
    })
  });
})();
