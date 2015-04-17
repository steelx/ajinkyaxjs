'use strict';
var app = angular.module('ajinkya', [], function($interpolateProvider) {
  //using interpolateProvider to overcome Jekyll syntax issue
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});


app.controller('Work', function ($scope, $http) {
    $scope.websites = [
        {
            "title": "Letters to Santa",
            "url": "http://www.letterstosanta.in",
            "description": "I developed the comeplete frontend, enjoyed working on animations.",
            "imagesrc": "http://i.imgur.com/DTCL6mZ.jpg"
        },
        {
            "title": "Tata Nano",
            "url": "http://www.tatanano.com",
            "description": "I developed the comeplete frontend, using HTML, CSS and jquery.",
            "imagesrc": "http://i.imgur.com/kQD4jLQ.jpg"
        },
        {
            "title": "Bramha Corp",
            "url": "http://www.bramhacorp.in/",
            "description": "Bramha Builder wanted interactive flash based website, but I buld the whole website in jquery, css to achive the desired interactivity.",
            "imagesrc": "http://i.imgur.com/aUiUxak.jpg"
        },
        {
            "title": "Valueabled",
            "url": "http://www.valueabled.com/",
            "description": "Its a portal based website. I developed start to end frontend using HTML, CSS and jQuery.",
            "imagesrc": "http://i.imgur.com/dqsqcTM.jpg"
        },
        {
            "title": "MTS Discover",
            "url": "http://www.mtsdiscover.com/",
            "description": "MTS wanted a rockband portal. I developed complete frontend, website was not thought out with mobile first approach.",
            "imagesrc": "http://i.imgur.com/6YaCF60.jpg"
        },
        {
            "title": "Nano Art in Motion",
            "url": "http://www.tatanano.com/nanoartinmotion/",
            "description": "TATA Nano Art-in-motion full interactive website, i developed using HTML5, CSS and jQuery.",
            "imagesrc": "http://i.imgur.com/iLBhaCu.jpg"
        }
    ];
});


app.controller('Hobby', function ($scope) {
    $scope.hobbies = [
        {
            name: "Ruby on Rails",
            url: "http://rubyonrails.org/",
            text: "Ruby language has amazed me everytime. Its been on my learning wishlist. I still try to read it, and I wish to create my own Ruby on Rails APP."
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
