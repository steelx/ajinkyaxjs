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
{% highlight html %}
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
{% endhighlight %}

Initialize our base angularjs file app.js
{% highlight javascript %}
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
{% endhighlight %}

And create your 'chart.html', dont worry I will take you through the code after this.
{% highlight html %}
<svg style="background: whitesmoke;">
  <g class="datapoints" ng-transclude ></g>
</svg>
{% endhighlight %}

#### Inside ```app.directive('chart'), function(){```
  - You can see ```restrict: 'E'``` it denotes we are creating a Directive - Element only (i.e. a new HTML tag)
  - ```replace: true``` means we want to replace current html ELEMENT with our SVG element from Chart.html.
  - ```transclude: true``` literal translation it means including of part. We are going to inject our 2nd directive using this, we will pass datapoints inside Chart.html ```<g ng-transclude>``` element.  Read more <a href="https://docs.angularjs.org/api/ng/directive/ngTransclude">here.</a>
  - ```templateUrl: 'chart.html'``` will load our Chart directive html from external file.
 
You will see now all SVG datapoints pilled up on each other since we have same x and y coordinates for all of them.


Now, inside our 'datapoint' directive, we will dynamically take x and y coordinates from our html element, since we had set ```transclude: true ```
I have updated the `template` value for datapoint directive. Also, now jump into LINK and Controller functions.
We need to place datapoints with value ZERO at bottom of chart and 100 at top of chart. However, we will also need to equally distribute them accross our SVG Chart (base), since highest value can be also set to 1000 or 1 million we need to be prepared for any condition.

{% highlight javascript %}
app.directive('datapoint', function(){
  return {
    replace: true,
    scope: {
      d: '@'
    },
    template: '<circle ng-attr-cx="{{cx}}" ng-attr-cy="{{cy}}" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#ffffff" stroke="#5B90BF" />',
    link: function(scope, element, attrs){
      //link function runs before compile
      //so our datapoint values will be updated before displaying
      
      //link function takes 4 parameters
      //scope - whatever scope object we create
      //element - current datapoint element
      //attrs - any atributes given to our current datapoint directive
    }
  }
});
{% endhighlight %}


Lets update LINK function inside datapoint directive
{% highlight javascript %}
link: function(scope, element, attrs){
  scope.d = parseInt(scope.d, 10);
  scope.radius = 4;
  scope.strokeWidth = 3;
}
{% endhighlight %}

```parseInt(scope.d, 10)``` this scope is coming from our isolate scope ie. ```scope: {
      d: '@'
    }```

Once we have values on our LINK scope, we are updating that to our template, on this line
```template: '<circle ng-attr-cx="{{cx}}" ng-attr-cy="{{cy}}" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#ffffff" stroke="#5B90BF" />'```


Now lets fix cx and cy values.

Since our 'chart' directive is wrapping several other 'datapoint' directive we will control the values from Chart and update our datapoint positions. In this way our datapoints can communicate with eachother.


We will need to add Controller function to Chart directive, and as well update datapoint directive to load chart controller.

{% highlight javascript %}
app.directive('chart', function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'chart.html',
    controller: function($scope, $element, $attrs){
        this.name = "chartDirective";
      };
    }
  };
});

app.directive('datapoint', function(){
  return {
    replace: true,
    require: '^chart',
    scope: {
      d: '@'
    },
    template: '<circle ng-attr-cx="{{cx}}" ng-attr-cy="{{cy}}" ng-attr-r="{{radius}}" ng-attr-stroke-width="{{strokeWidth}}" fill="#ffffff" stroke="#5B90BF" />',
    link: function(scope, element, attrs, ctrl){
      ...
      //ctrl - we mentioned require: ^chart. It means we are loading Chart controller
      // and '^' with uparrow as indicator here that Chart directive will be parent of datapoint
      console.log(ctrl.name); //outputs ==> 'chartDirective'

    }
...
{% endhighlight %}


####Getting Y coordinates

Inside datapoint `link` function
{% highlight javascript %}
...
    link: function(scope, element, attrs, ctrl){
      scope.d = parseInt(scope.d, 10);
      scope.radius = 4;
      scope.strokeWidth = 3;
      
      setY();
      function setY(){
        scope.cy = ctrl.getY(scope);
      }
    }
{% endhighlight %}

And now inside Chart directive `controller` function
{% highlight javascript %}
...
  controller: function($scope, $element, $attrs){
    this.getY = function(point){
      var adjustment = point.radius + point.strokeWidth - 1;
      var heightSpacer = (H - borderWidth - adjustment) / highest;
      
      return H - borderWidth - point.d*heightSpacer;
    };

{% endhighlight %}


draft..(this post is a draft)
