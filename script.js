(function () {
    'use strict';
    angular.module('nameCalculatorApp', [])
        .controller('nameCalculatorController', function ($scope) {
            $scope.name = '';
            $scope.totalValue = 0;
            $scope.calculate = function () {
                var totalNameValue = calculateNumericForString($scope.name);//get total value;
                $scope.totalValue = totalNameValue;
            };
        });
    function calculateNumericForString(string) {
        var totalLength = 0;
        for (var i = 0; i < string.length; i++) {
            totalLength += string.charCodeAt(i);
        }
        return totalLength;
    }
})();