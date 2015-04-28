---
layout: single
title: "Create simple Angularjs SVG Charts Directive"
description: "Step by step code to create SVG Charts directive in AngularJs"
author: "Ajinkya"
coverImg: "raspberry-pi.jpg"
---

#Create simple Angularjs SVG Charts Directive

I will show you Step by step code to create SVG Charts directive in AngularJs. This will be simple, also I will take your throught basics of AngularJs Directives

  - Directive Markup
  - Template
  - Restricting Directive Usage
  - Directive scope
  - Transclusion


You can fork my code here : <a href="http://plnkr.co/edit/f1QSWuJZorUrXFqT4dLI?p=preview" target="_blank">view on Plnkr</a>

Lets add out html mark up in index.html and dont forget to add ng-app at html tag.
```html
<chart height="200" width="300">
  <datapoint label="2000" d="20"></datapoint>
  <datapoint label="2001" d="18"></datapoint>
  <datapoint label="2002" d="0"></datapoint>
  <datapoint label="2003" d="40"></datapoint>
  <datapoint label="2004" d="50"></datapoint>
  <datapoint label="2005" d="70"></datapoint>
  <datapoint label="2006" d="90"></datapoint>
  <datapoint label="2007" d="90"></datapoint>
  <datapoint label="2008" d="30"></datapoint>
</chart>
```

Initialize our base angularjs file app.js
```javascript
var app = angular.module('ajApp', []);

app.directive('chart', function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'chart.html'
  };
});

app.directive('datapoint', function(){
  return {
    replace: true,
    template: '<circle cx="20" cy="20" r="4" stroke-width="3" fill="#ffffff" stroke="#5B90BF" />'
  };
});
```

And create your chart.html, dont worry I will take you through the code after this.
```html
<svg style="background: whitesmoke;">
  <g class="datapoints" ng-transclude ></g>
</svg>
```

draft..(this post is a draft)
