'use strict';
angular.module('learnApp')
    .directive('stickyHeader', function(){

        return {
            restrict: 'A',
            link: function(scope, elem, attrs){
                var $header = elem,
                    $body = angular.element('body'),
                    $window = angular.element(window);

                $window.bind('scroll' ,function () {

                    if ($window.width() >= 1000) {

                        var offset = Number(attrs.offset);

                        if ($body.scrollTop() >= offset) {
                            $header.addClass('fixed');
                        } else if ($body.scrollTop() < offset) {
                            $header.removeClass('fixed');
                        }
                    }

                });
            }
        }
    })

    .directive('includeReplace', function () {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };
    });