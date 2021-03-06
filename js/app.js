'use strict';
var app = angular.module('ajinkya', [], function($interpolateProvider) {
  //using interpolateProvider to overcome Jekyll syntax issue
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});


app.controller('Work', function ($scope, $http) {
    $scope.websites = [
        {
            "title": "Flock Admin Panel",
            "url": "https://admin.flock.com",
            "description": "I developed the comeplete MVC Web Application from scratch (Only the JavaScript part), enjoyed working on angularjs.",
            "imagesrc": "https://i.imgur.com/sahOegu.jpg"
        },
        {
            "title": "Tata Nano",
            "url": "http://www.tatanano.com",
            "description": "I developed the comeplete frontend, using HTML, CSS and jquery.",
            "imagesrc": "https://i.imgur.com/kQD4jLQ.jpg"
        },
        {
            "title": "Bramha Corp",
            "url": "http://www.bramhacorp.in/",
            "description": "Bramha Builder wanted interactive flash based website, but I buld the whole website in jquery, css to achive the desired interactivity.",
            "imagesrc": "https://i.imgur.com/aUiUxak.jpg"
        },
        {
            "title": "Valueabled",
            "url": "http://www.valueabled.com/",
            "description": "Its a portal based website. I developed start to end frontend using HTML, CSS and jQuery.",
            "imagesrc": "https://i.imgur.com/dqsqcTM.jpg"
        },
        {
            "title": "MTS Discover",
            "url": "http://www.mtsdiscover.com/",
            "description": "MTS wanted a rockband portal. I developed complete frontend, website was not thought out with mobile first approach.",
            "imagesrc": "https://i.imgur.com/6YaCF60.jpg"
        },
        {
            "title": "Nano Art in Motion",
            "url": "http://www.tatanano.com/nanoartinmotion/",
            "description": "TATA Nano Art-in-motion full interactive website, i developed using HTML5, CSS and jQuery.",
            "imagesrc": "https://i.imgur.com/iLBhaCu.jpg"
        }
    ];
});


app.controller('Hobby', function ($scope) {
    $scope.hobbies = [
        {
            name: "GoLang",
            url: "http://golang.org/",
            text: "GO programing language is just beautiful combinations of C, Python and Javascript. In future I would definitely work on GoLang projects."
        },
        {
            name: "Biking",
            url: "http://www.scott-sports.com/global/en/products/234061008/bike-aspect-670-l/",
            text: "I love to ride on my Mountain bike Scott Aspec 670. I dream on riding down the Himalay's."
        },
        {
            name: "Soccer",
            text: "I don't follow any Soccer tournaments nor EPL, but I love to play soccer."
        },
        {
            name: "RC planes",
            text: "Flying RC plane is not a toy, you need to fly them with skills. I already crashed my first plane, but it was a good learning for me."
        }
    ];
});
