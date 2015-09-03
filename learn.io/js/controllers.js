'use strict';
angular.module('learnApp')

    .controller('ScrollController', function($scope, $location, anchorSmoothScroll) {

        $scope.gotoElement = function (eID){
            // call $anchorScroll()
            anchorSmoothScroll.scrollTo(eID);

        };
    });