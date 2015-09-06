'use strict';
angular.module('learnApp')
    .directive('stickyHeader', function($log){

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
                $log.debug('stickyHeader init');
            }
        }
    })

    .directive('includeReplace', function ($log) {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function (scope, el) {
                el.replaceWith(el.children());
                $log.debug('includeReplace init');
            }
        };
    })

    .directive('getInTouchform', function ($http, $log) {

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'partials/getintouchform.html',
            scope : {
                required:'='
            },
            link: function (scope, el, attrs) {
                var initVariables = function(){
                    scope.$email = el.find("input[type='email']");
                    //scope.$submitButton = el.find("[type='submit']");
                    scope.isFormValid = false;
                };

                var initEvents = function() {
                    scope.$email.bind({
                        'input': emailValidation,
                        'blur': emailValidation
                    });
                    //scope.$submitButton.bind("click", scope.sendForm);
                };

                var emailValidation = function () {
                    //testing regular expression
                    //var $emailField = el.find("input[type='email']");
                    var $emailField = scope.$email;
                    console.log('e', $emailField, el);
                    var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;

                    if(filter.test($emailField.val())){
                        //if it's valid email
                        removeError($emailField);
                        return true;

                    } else{
                        //if it's NOT valid
                        addError($emailField);
                        return false;
                    }
                };

                var removeError = function (domField) {
                    domField.parent('div').removeClass("error-field");
                    domField.next("div.tooltip-error").remove();
                    isFormValidFn();
                };
                var addError = function (domField) {
                    //Check if error already present dont add again
                    if(!domField.parent('div').hasClass("error-field")){
                        domField.parent("div").addClass("error-field");
                        domField.after("<div class='tooltip-error'>" + domField.attr("errorMsg") + "</div>");
                        isFormValidFn();
                    }
                };

                var isFormValidFn = function () {
                    scope.isFormValid = el.find(".error-field").length === 0;
                };

                var sendAjax = function(){
                    scope.$submitButton.prop('disabled', true);
                    $http({
                        method: 'POST',
                        url: "//formspree.io/ajinkyab1987@gmail.com",
                        data: el.find('form').serialize(),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        cache: false
                    }).finally(function(){
                        //success allways
                        //formspree not sending data back
                        el.find('form').trigger("reset");
                        addMessage("success", "Thank you, we will get back to you soon!");
                    });

                };

                var addMessage = function addMessage(messagetype, message) {
                    // create a new div element
                    // and give it some content
                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("id", messagetype);
                    var newContent = document.createTextNode(message);
                    newDiv.appendChild(newContent); //add the text node to the newly created div.

                    // add the newly created element and its content into the DOM
                    el.find('.cta-inner').append(newDiv);

                    setTimeout(function(){
                        el.find('#'+messagetype).remove();
                        scope.$submitButton.prop('disabled', false);
                    }, 5000);
                };

                scope.sendForm = function (e) {
                    //e.preventDefault();//no need of prevent while using ngSubmit

                    isFormValidFn();
                    emailValidation();

                    if (scope.isFormValid) {
                        sendAjax();
                    }
                };


                //init
                initVariables();
                initEvents();

                $log.debug('getInTouchform init');
            }
        };
    });