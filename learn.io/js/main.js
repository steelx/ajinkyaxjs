//learnApp : Ajinkya Borade
//please feel free to read the uncompressed code
angular.module('learnApp', [])
    .run(function($rootScope, $location){

        $rootScope.homepage = ($location.absUrl().indexOf('index.html') !== -1)? false : true;
    });