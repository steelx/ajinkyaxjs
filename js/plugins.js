//classie
(function(h){function f(a,b){(c(a,b)?d:e)(a,b)}var c,e,d;"classList"in document.documentElement?(c=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},d=function(a,b){a.classList.remove(b)}):(c=function(a,b){return RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},e=function(a,b){c(a,b)||(a.className=a.className+" "+b)},d=function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ")});var g={hasClass:c,addClass:e,removeClass:d,toggleClass:f,has:c,
    add:e,remove:d,toggle:f};"function"===typeof define&&define.amd?define(g):h.classie=g})(window);

/**
 * borderMenu
 */
(function() {

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {

        var menu = document.getElementById( 'bt-menu' ),
            trigger = menu.querySelector( 'a.bt-menu-trigger' ),
        // triggerPlay only for demo 6
            triggerPlay = document.querySelector( 'a.bt-menu-trigger-out' ),
        // event type (if mobile use touch events)
            eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function() {
                classie.remove( menu, 'bt-menu-open' );
                classie.add( menu, 'bt-menu-close' );
            },
            closeClickFn = function( ev ) {
                resetMenu();
                overlay.removeEventListener( eventtype, closeClickFn );
            };

        var overlay = document.createElement('div');
        overlay.className = 'bt-overlay';
        menu.appendChild( overlay );

        trigger.addEventListener( eventtype, function( ev ) {
            ev.stopPropagation();
            ev.preventDefault();

            if( classie.has( menu, 'bt-menu-open' ) ) {
                resetMenu();
            }
            else {
                classie.remove( menu, 'bt-menu-close' );
                classie.add( menu, 'bt-menu-open' );
                overlay.addEventListener( eventtype, closeClickFn );
            }
        });

        if( triggerPlay ) {
            triggerPlay.addEventListener( eventtype, function( ev ) {
                ev.stopPropagation();
                ev.preventDefault();

                classie.remove( menu, 'bt-menu-close' );
                classie.add( menu, 'bt-menu-open' );
                overlay.addEventListener( eventtype, closeClickFn );
            });
        }

    }

    init();

})();

//tabletopjs
(function(k){var g=!1;if("undefined"!==typeof process)var g=!0,l=require("request");Array.prototype.indexOf||(Array.prototype.indexOf=function(a,c){if(null==this)throw new TypeError;var d=Object(this),e=d.length>>>0;if(0===e)return-1;var b=0;1<arguments.length&&(b=Number(arguments[1]),b!=b?b=0:0!=b&&Infinity!=b&&-Infinity!=b&&(b=(0<b||-1)*Math.floor(Math.abs(b))));if(b>=e)return-1;for(b=0<=b?b:Math.max(e-Math.abs(b),0);b<e;b++)if(b in d&&d[b]===a)return b;return-1});var f=function(a){if(!(this&&this instanceof
    f))return new f(a);"string"===typeof a&&(a={key:a});this.callback=a.callback;this.wanted=a.wanted||[];this.key=a.key;this.simpleSheet=!!a.simpleSheet;this.parseNumbers=!!a.parseNumbers;this.wait=!!a.wait;this.reverse=!!a.reverse;this.postProcess=a.postProcess;this.debug=!!a.debug;this.query=a.query||"";this.orderby=a.orderby;this.endpoint=a.endpoint||"https://spreadsheets.google.com";this.singleton=!!a.singleton;this.simple_url=!!a.simple_url;this.callbackContext=a.callbackContext;"undefined"!==typeof a.proxy&&
(this.endpoint=a.proxy,this.singleton=this.simple_url=!0);this.parameterize=a.parameterize||!1;this.singleton&&("undefined"!==typeof f.singleton&&this.log("WARNING! Tabletop singleton already defined"),f.singleton=this);/key=/.test(this.key)&&(this.log("You passed a key as a URL! Attempting to parse."),this.key=this.key.match("key=(.*?)&")[1]);this.key?(this.log("Initializing with key "+this.key),this.models={},this.model_names=[],this.base_json_path="/feeds/worksheets/"+this.key+"/public/basic?alt=",
    this.base_json_path=g?this.base_json_path+"json":this.base_json_path+"json-in-script",this.wait||this.fetch()):this.log("You need to pass Tabletop a key!")};f.callbacks={};f.init=function(a){return new f(a)};f.sheets=function(){this.log("Times have changed! You'll want to use var tabletop = Tabletop.init(...); tabletop.sheets(...); instead of Tabletop.sheets(...)")};f.prototype={fetch:function(a){"undefined"!==typeof a&&(this.callback=a);this.requestData(this.base_json_path,this.loadSheets)},requestData:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          c){g?this.serverSideFetch(a,c):this.injectScript(a,c)},injectScript:function(a,c){var d=document.createElement("script"),e;if(this.singleton)c===this.loadSheets?e="Tabletop.singleton.loadSheets":c===this.loadSheet&&(e="Tabletop.singleton.loadSheet");else{var b=this;e="tt"+ +new Date+Math.floor(1E5*Math.random());f.callbacks[e]=function(){var a=Array.prototype.slice.call(arguments,0);c.apply(b,a);d.parentNode.removeChild(d);delete f.callbacks[e]};e="Tabletop.callbacks."+e}var m=a+"&callback="+e;this.simple_url?
    -1!==a.indexOf("/list/")?d.src=this.endpoint+"/"+this.key+"-"+a.split("/")[4]:d.src=this.endpoint+"/"+this.key:d.src=this.endpoint+m;this.parameterize&&(d.src=this.parameterize+encodeURIComponent(d.src));document.getElementsByTagName("script")[0].parentNode.appendChild(d)},serverSideFetch:function(a,c){var d=this;l({url:this.endpoint+a,json:!0},function(a,b,f){if(a)return console.error(a);c.call(d,f)})},isWanted:function(a){return 0===this.wanted.length?!0:-1!==this.wanted.indexOf(a)},data:function(){if(0!==
    this.model_names.length)return this.simpleSheet?(1<this.model_names.length&&this.debug&&this.log("WARNING You have more than one sheet but are using simple sheet mode! Don't blame me when something goes wrong."),this.models[this.model_names[0]].all()):this.models},addWanted:function(a){-1===this.wanted.indexOf(a)&&this.wanted.push(a)},loadSheets:function(a){var c,d,e=[];this.foundSheetNames=[];c=0;for(d=a.feed.entry.length;c<d;c++)if(this.foundSheetNames.push(a.feed.entry[c].title.$t),this.isWanted(a.feed.entry[c].content.$t)){var b=
    a.feed.entry[c].link[3].href.substr(a.feed.entry[c].link[3].href.length-3,3),b="/feeds/list/"+this.key+"/"+b+"/public/values?sq="+this.query+"&alt=",b=g?b+"json":b+"json-in-script";this.orderby&&(b+="&orderby=column:"+this.orderby.toLowerCase());this.reverse&&(b+="&reverse=true");e.push(b)}this.sheetsToLoad=e.length;c=0;for(d=e.length;c<d;c++)this.requestData(e[c],this.loadSheet)},sheets:function(a){if("undefined"===typeof a)return this.models;if("undefined"!==typeof this.models[a])return this.models[a]},
    loadSheet:function(a){a=new f.Model({data:a,parseNumbers:this.parseNumbers,postProcess:this.postProcess,tabletop:this});this.models[a.name]=a;-1===this.model_names.indexOf(a.name)&&this.model_names.push(a.name);this.sheetsToLoad--;0===this.sheetsToLoad&&this.doCallback()},doCallback:function(){0===this.sheetsToLoad&&this.callback.apply(this.callbackContext||this,[this.data(),this])},log:function(a){this.debug&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&Function.prototype.apply.apply(console.log,
        [console,arguments])}};f.Model=function(a){var c,d,e,b;this.column_names=[];this.name=a.data.feed.title.$t;this.elements=[];this.raw=a.data;if("undefined"===typeof a.data.feed.entry)a.tabletop.log("Missing data for "+this.name+", make sure you didn't forget column headers"),this.elements=[];else{for(c in a.data.feed.entry[0])/^gsx/.test(c)&&this.column_names.push(c.replace("gsx$",""));c=0;for(e=a.data.feed.entry.length;c<e;c++){var f=a.data.feed.entry[c],h={};d=0;for(b=this.column_names.length;d<
    b;d++){var g=f["gsx$"+this.column_names[d]];"undefined"!==typeof g?a.parseNumbers&&""!==g.$t&&!isNaN(g.$t)?h[this.column_names[d]]=+g.$t:h[this.column_names[d]]=g.$t:h[this.column_names[d]]=""}void 0===h.rowNumber&&(h.rowNumber=c+1);a.postProcess&&a.postProcess(h);this.elements.push(h)}}};f.Model.prototype={all:function(){return this.elements},toArray:function(){var a=[],c,d,e,b;c=0;for(e=this.elements.length;c<e;c++){var f=[];d=0;for(b=this.column_names.length;d<b;d++)f.push(this.elements[c][this.column_names[d]]);
    a.push(f)}return a}};g?module.exports=f:k.Tabletop=f})(this);