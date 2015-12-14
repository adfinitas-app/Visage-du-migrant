/*
 jQuery animateNumber plugin v0.0.12
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var q=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var g=Math.floor(a);d(e.elem).prop("number",a).text(g+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(g,k){var c=Math.floor(g).toString(),u=d(k.elem);if(c.length>a){for(var f=c,l=a,m=f.split("").reverse(),c=[],n,r,p,t=0,h=Math.ceil(f.length/l);t<h;t++){n="";for(p=0;p<l;p++){r=t*l+p;if(r===f.length)break;n+=m[r]}c.push(n)}f=c.length-1;l=q(c[f]);c[f]=q(parseInt(l,10).toString());c=c.join(b);c=q(c)}u.prop("number",g).text(c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),g=[a],k=1,c=arguments.length;k<c;k++)g.push(arguments[k]);
if(b.numberStep){var h=this.each(function(){this._animateNumberSetter=b.numberStep}),f=a.complete;a.complete=function(){h.each(function(){delete this._animateNumberSetter});f&&f.apply(this,arguments)}}return e.animate.apply(e,g)}})(jQuery);

/* Froogaloop */
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);
return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;
var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=
window.$f=e}();

$(document).foundation();

$(document).ready(function(){
    "use_strict";
    
    var imagesBuffer = new Array()
    function preloadImages() {
        var i = 0, j = 0;
        var onLoadImage = function() {
            j++;
            if(j < i) {
                return;
            }
            $(window).trigger('resize').trigger('scroll');
        }
        
        for (; i < preloadImages.arguments.length; i++) {
            imagesBuffer[i] = new Image()
            imagesBuffer[i].src = "img/" + preloadImages.arguments[i];
            $(imagesBuffer[i]).load(onLoadImage);
        }
        
    };
      
    function throttle(callback, delay) {
        var last;
        var timer;
        return function () {
            var context = this;
            var now = +new Date();
            var args = arguments;
            if (last && now < last + delay) {
                // le délai n'est pas écoulé on reset le timer
                clearTimeout(timer);
                timer = setTimeout(function () {
                    last = now;
                    callback.apply(context, args);
                }, delay);
            } else {
                last = now;
                callback.apply(context, args);
            }
        };
    };

    var shuffle = function(arrayItem) {
      var i = arrayItem.length, j, temp;
      if ( i == 0 ) return arrayItem;
      while ( --i ) {
         j = Math.floor( Math.random() * ( i + 1 ) );
         temp = arrayItem[i];
         arrayItem[i] = arrayItem[j];
         arrayItem[j] = temp;
      }
      return arrayItem;
    };

    if (navigator.platform.indexOf("Mac")!=-1) {
        $("<style type='text/css'> body .button{ padding: .5em 1.2em .4em; } </style>").appendTo("head");
    }
    
    $('#facebook-nav-link').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=http://visagesdemigrants.lacimade.org');
    
    var isScrolling = false;
    var widthBreakpoint = 1100;
    var bodyWidth = $('body').outerWidth();
    
    $(window).on('resize', function(){
        bodyWidth = $('body').outerWidth();
        $('.content-carrousel article .vertical-align').css('display', 'block').flexVerticalCenter();
    });
    
    $('*[data-equalizer]').on('postEqualized.zf.Equalizer', function(){
        $('.content-carrousel article .vertical-align').css('display', 'block').flexVerticalCenter();
    });
    
    var isMobileWidth = function() {
        return  bodyWidth < widthBreakpoint;
    };

    $('#home-link').hover(function(){
        $('#main-sub-menu').addClass('visible');
        $('#menu-hover').css('display', 'block');
    });
    
    $('#main-sub-menu a').click(function(){
        $('#main-sub-menu').removeClass('visible');
        $('#menu-hover').css('display', 'none');
    });
    
    $('#main-sub-menu').mouseleave(function(){
        $('#main-sub-menu').removeClass('visible');
        $('#menu-hover').css('display', 'none');
    });
    
    $('a[data-modal-id="credits-modal"]').click(function(e){
        $('#credits-modal').addClass('visible');
        e.preventDefault();
        return false;
    });
    $('#credits-modal').click(function(e){
        $('#credits-modal').removeClass('visible');
        e.preventDefault();
        return false;
    });
    
    $('.personna-mobile-info a').click(function(e){
        var $parent = $(this).parent().parent();
        $parent.find('.personna-content, .personna-menu').css('display', 'block');
        $parent.find('.active').removeClass('active');
        $parent.find('.personna-menu a:eq(0), .personna-content article:eq(0)').addClass('active');
        
        var index = $parent.parent().attr('id').replace('personna-section-','');
        if(index == 3 || index == 5 || index == 6) $parent.addClass('parcours-bg');
        
        var offset = $parent.find('.personna-menu').offset().top - 20;
        $('html,body').animate({
            scrollTop: offset
        }, 1000, function(){
            isScrolling = false;
            initialScroll = initialScrollLength + offset;
        });
                
        e.preventDefault();
        return false;
    });
    
    var initialScrollLength = 3.5e3,
        initialScroll = $(window).scrollTop(),
        scrollEnabled = false;
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        initialScrollLength = 1.2e3;
    }
        
    var sectionNameMap = {
        'cery': 'personna-section-1',
        'francis': 'personna-section-2',
        'ammar': 'personna-section-3',
        'joseph': 'personna-section-4',
        'reva': 'personna-section-5',
        'issa': 'personna-section-6',
        'aider': 'section-3',
        'engagement': 'section-4',
        'soutenir': 'section-5',
        'top': 'section-1'
    };
    
    if(!isMobileWidth()){ 
        $('.personna-section li:first-child a, .personna-section li:first-child article').addClass('active');
        $('#personna-section-3 > div, #personna-section-5 > div, #personna-section-6 > div').addClass('parcours-bg');
    } else {
        $("<style type='text/css'> #section-1 .inner-bg { transition: all .3s ease-in-out; } </style>").appendTo("head");
    }
    
    var headerAnimStart = function(){

        var yDistanceInitial,
            yDistance,
            isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            
        $(document).on('touchstart', function(e){
            var touch = isIos ? e.originalEvent.targetTouches[0] : e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            yDistanceInitial = touch.pageY;
        });
        
        $(document).on('touchend', function(event){
            var distance = yDistance;

            mousewheel({ 'wheelDeltaY': distance, 'disableThrottle': false });  
            
            /*
            // throttle
            var count = Math.floor(distance / 100);
            var negatif = count < 0;
            if(negatif) count = -1 * count;
            
            console.log(distance, negatif, count);
            
            for(var i = 0; i <= count; i++) {
                if(i == count) {
                    mousewheel({ 'wheelDeltaY': distance });  
                } else {
                    if(negatif) {
                        mousewheel({ 'wheelDeltaY': i * -100 });  
                    } else {
                        mousewheel({ 'wheelDeltaY': i * 100 });  
                    }
                }
            }
            */
        });
        
        $(document).on('touchmove', function(e){
            var touch = isIos ? e.originalEvent.targetTouches[0] : e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            yDistance = -1* (yDistanceInitial - touch.pageY);
            
            if(!scrollEnabled) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });
        
        $('html,body').animate({
            scrollTop: 0
        }, 0);
        
        $('#section-1-part-1, #section-1-part-1 .button, #section-1-part-2, #section-1-part-1 p, #section-1-part-1 div'
           + '#section-1-part-2 p, #section-1-part-2 .button, #section-1-part-2 span, #section-1-part-2 small').fadeOut(0);
           
        $('#section-1-part-1, #section-1-part-1 p:eq(0), #section-1-part-1 .button').fadeIn(600);

        var $bgElement = $('#section-1 > .inner-bg'),
            bgZoomIncrease = .4,
            timer,
            disabled = document.location.hash.length > 1 && document.location.hash != '#section-1' ? false : true,
            lastStepPassed = false,
            mobileButtonEnabled = false;
        
        function mousewheel(e) {
            if(disabled && e.autoScroll !== true) {
                /*
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
                e.returnValue = false;
                return false;
                */
                clearInterval(timer);
            }
            
            var windowScroll = $(window).scrollTop();

            if(windowScroll > 0) {
                initialScroll = initialScrollLength + windowScroll;
            } else if(initialScroll > initialScrollLength){
                initialScroll = initialScrollLength;
            } else {
                
                var step;
                if(e.wheelDeltaY) {
                    step = e.wheelDeltaY;
                } else if(e.deltaY) {
                    step = window.attachEvent ?  (-1* e.deltaY) : (e.deltaY * -80);
                } else {
                    return;
                }

                if(!e.disableThrottle) {
                    if(step > 200) step = 200;
                    if(step < -200) step = -200;
                }
                
                initialScroll -= step;
                
                if(initialScroll < 0) initialScroll = 0;
            }

            if (initialScroll < initialScrollLength) {
                scrollEnabled = false;
                lastStepPassed = false;

                if(mobileButtonEnabled) {
                    if(isMobileWidth()) {
                        $('#main-mobile-header').removeClass('scrolled');
                    }
                    mobileButtonEnabled = false;
                }
                
                if(initialScroll == 0) {
                    $bgElement.css('transform', 'scale(1)');
                } else {
                    $bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease * (initialScroll / initialScrollLength)) ) + ')');
                }
                
                if(initialScroll > ((5/6) * initialScrollLength)) {
                    //$bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease*(5/6)) ) + ')');
                    $('#section-1-part-1').fadeOut(0);
                    $('#section-1-part-1 p').fadeIn(0);
                    $('#section-1-part-2, #section-1-part-2 .button, #section-1-part-2 div, #section-1-part-2 p, #section-1-part-2 span, #section-1-part-2 small').fadeIn(600);
                } else if(initialScroll > (4.6/6) * initialScrollLength) {
                    //$bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease*(4/6)) ) + ')');
                    $('#section-1-part-1').fadeOut(200);
                    $('#section-1-part-1 p').fadeIn(0);
                    $('#section-1-part-2').fadeOut(0);
                } else if (initialScroll > (3/6) * initialScrollLength) {
                    //$bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease*(3/6)) ) + ')');
                    $('#section-1-part-2').fadeOut(0);
                    $('#section-1-part-1').fadeIn(200);
                    $('#section-1-part-1 p:eq(2)').fadeIn(600);
                } else if (initialScroll > (.7/6) * initialScrollLength) {
                    //$bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease*(2/6)) ) + ')');
                    $('#section-1-part-1 p:eq(2):visible').fadeOut(600);
                    $('#section-1-part-1 p:eq(1)').fadeIn(600);
                } else /* if (initialScroll > (1/12) * initialScrollLength)*/ {
                    //$bgElement.css('transform', 'scale(' + ( 1 + (bgZoomIncrease*(1/12)) ) + ')');
                    $('#section-1-part-1 p:eq(1):visible').fadeOut(600);
                    $('#section-1-part-1').fadeIn(600);
                    $('#section-1-part-1 p:eq(0), #section-1-part-1 .button').fadeIn(600);
                } /* else if( initialScroll < 5) {
                    //$bgElement.css('transform', 'scale(1)');
                    
                    $('#section-1-part-1, #section-1-part-2, #section-1-part-1 p,'
                        + '#section-1-part-2 p, #section-1-part-2 span, #section-1-part-2 small').fadeOut(200);
                } */
            } else {
                scrollEnabled = true;
                if(!lastStepPassed) {
                    lastStepPassed = true;
                    $('#section-1-part-1').fadeOut(1);
                    $('#section-1-part-1 p').fadeIn(1);
                    $('#section-1-part-2, #section-1-part-2 div, #section-1-part-2 p, #section-1-part-2 span, #section-1-part-2 small').fadeIn(600);
                    $bgElement.css('transform', 'scale(' + ( 1 + bgZoomIncrease ) + ')');
                }
                
                if(!mobileButtonEnabled){
                    if(isMobileWidth()){
                        $('#main-mobile-header').addClass('scrolled');
                    }
                    mobileButtonEnabled = true;
                }
            }
            
            if(!scrollEnabled) {
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
                e.returnValue = false;
                return false;
            }
        }
        
        if(disabled) {
            var autostep = 8,
                k = 0;
                
            setTimeout(function(){
                timer = setInterval(function(){
                    k += autostep;
                    mousewheel({ wheelDeltaY: -autostep, autoScroll: true });
                    if(k >= initialScrollLength) {
                        disabled = false;
                        clearInterval(timer);
                    }
                },40);
            }, 500);
        }

        var body = $("body").get(0);
        if (body.addEventListener) {
            if("onwheel" in document.createElement("div")) {
                body.addEventListener('wheel', mousewheel, false);
            } else if(document.onmousewheel !== undefined) {
                body.addEventListener('mousewheel', mousewheel, false);
            } else {
                body.addEventListener("DOMMouseScroll", mousewheel, false);
                body.addEventListener("MozMousePixelScroll", mousewheel, false);
            }
        } else {
            body.attachEvent("onmousewheel", mousewheel);
        }
        
        /***************
         * SMOOTH SCROLL
         *************/
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target, $target, mapSection;
                if(mapSection = sectionNameMap[this.hash.replace('#','')]) {
                    target = '#'+mapSection;
                } else {
                    target = this.hash;
                }
                $target = $(target);
                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    isScrolling = true;
                    
                    $('#main-nav .active').removeClass('active');
                    $(this).addClass('active');

                    scrollEnabled = true;
                    var hash = this.hash;
                    $('html,body').animate({
                        scrollTop: $target.offset().top
                    }, 1000, function(){
                        isScrolling = false;
                        document.location.hash = hash;
                        initialScroll = initialScrollLength + $target.offset().top;
                        mousewheel({ wheelDeltaY: -10, autoScroll: true });
                    });
                    return false;
                }
            }
        });
        
        /*
        $('#section-1-part-1').fadeIn(600);
        $('#section-1-part-1 p:eq(0)').fadeIn(600);
        
        var elements = [
            '#section-1-part-1 p:eq(1)',
            '#section-1-part-1 p:eq(2)',
            '#section-1-part-2, #section-1-part-2 p, #section-1-part-2 span, #section-1-part-2 small',
        ];
        
        for(var i = 0; i < elements.length; i++) {
            $(elements[i]).css('display', 'none');
        }

        var interval = setInterval(function(){
            var el = elements.shift();
            
            if(!elements.length) {
                clearInterval(interval);
                
                setTimeout(function(){
                    $('#section-1-part-1').fadeOut(200);
                    $(el).delay(500).fadeIn(800);
                }, 3e3);
                
            } else {
                $(el).fadeIn(500);
            }
        }, 2e3);
        */
    };
    
    $('#main-nav h1').click(function(){
        isScrolling = true;
        $('html,body').animate({
            scrollTop: 0
        }, 1000, function(){
            document.location.hash = '';
        });
        isScrolling = false;
    });
    
    var initWaypoints = function() {
        $('.personna-section').each(function(e, i){
            var el = this;
            var personnaIndex = e;
            $(this).waypoint({
              handler: function(direction) {
                 if(isScrolling) return;
                 if($('#main-video:visible').length) return;

                 if(isMobileWidth() && $(el).find('.active').length < 1) {
                    setTimeout(function(){
                        $('#' + el.id + ' .personna-menu li:first-child a, #' + el.id + ' .personna-content li:first-child article')
                            .fadeIn(100).delay(100).addClass('active').attr('style', '');
                        if(personnaIndex == 2 || personnaIndex == 4 || personnaIndex == 5){
                            $('#' + el.id + ' > div').addClass('parcours-bg');
                        }
                    }, 600);
                 }
                 
                 $('#main-nav #nav-states li a.active, #home-link.active').removeClass('active');
                 var elTarget = el.id;
                 for(var eie in sectionNameMap) {
                    if(sectionNameMap.hasOwnProperty(eie)) {
                        if(sectionNameMap[eie] == elTarget) elTarget = eie;
                    }
                 }
                 
                 $('#main-nav #nav-states li a[href="#' + elTarget + '"]').addClass('active');
              }
            });
        });
        
        $('#section-3, #section-4, #section-5').each(function(e, i) {
            var id = $(this).attr('id');
            $(this).waypoint({
              handler: function(direction) {
                 if(isScrolling) return;
                 var elTarget = id;
                 for(var eie in sectionNameMap) {
                    if(sectionNameMap.hasOwnProperty(eie)) {
                        if(sectionNameMap[eie] == elTarget) elTarget = eie;
                    }
                 }
                 $('#main-nav #nav-states li a.active, #home-link.active').removeClass('active');
                 $('#main-nav #nav-states li a[href="#' + elTarget + '"]').addClass('active');
              }
            });
        });
        
        $('#section-1').waypoint({
          handler: function(direction) {
             if(isScrolling) return;
             $('#main-nav #nav-states li a.active').removeClass('active');
          },
          offset: -20
        });
    };
    
    var $fPlayer = null;
    
    var closeFilm = function(){
        $('html').removeClass('fullscreen');
        isScrolling = true;
        $('html,body').scrollTop(0);
        isScrolling = false;
        $('#main-video').css('display', 'none');
        
        if($fPlayer && $fPlayer.removeEvent){
            $fPlayer.removeEvent('finish');
        }
        
        var $iframe = $('#main-video iframe');
        $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
        initWaypoints();
        headerAnimStart();
    };
    
    var loadVideoEvents = function() {
        $('#main-video iframe').on('load', function(){
            $fPlayer = $f($('#main-video iframe')[0]);

            // When the player is ready, add listeners for pause, finish, and playProgress
            $fPlayer.addEvent('ready', function() {
                $fPlayer.addEvent('finish', function(){
                    closeFilm();
                });
            });
        });
    };
    
    var openFilm = function(){
        $('html').addClass('fullscreen');
        isScrolling = true;
        $('html,body').scrollTop(0);
        isScrolling = false;
        $('#main-video').css('display', 'block');
        var $iframe = $('#main-video iframe');
        $iframe.attr('src', $iframe.attr('data-src'));
    };
    
    $('#skip-link').click(closeFilm);
    $('#watch-film').click(openFilm);
    loadVideoEvents();

    /*if(document.location.href.indexOf('bypass_intro') > 0) {
        closeFilm();*/ 
    if(document.location.hash.length > 1) {
        closeFilm();
        
        var target, $target, mapSection;
        if(mapSection = sectionNameMap[document.location.hash.replace('#','')]) {
            target = '#'+mapSection;
        } else {
            target = document.location.hash;
        }
        if(target != 'section-1') {
            target = $(target);
            target = target.length ? target : $('[name=' + document.location.hash.slice(1) + ']');
            if (target.length) {
                isScrolling = true;
                
                $('#main-nav .active').removeClass('active');
                $(this).addClass('active');

                scrollEnabled = true;
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, function(){
                    isScrolling = false;
                    initialScroll = initialScrollLength + target.offset().top;
                });
            }
         }
    }
    /*}*/

    $('.personna-section').each(function(e, i){
        var $el = $(this);
        var personnaIndex = e;

        $el.find('.personna-menu a').click(function(e){
            e.preventDefault();
            if($(this).hasClass('active')) {
                var $el2 = $el.find('.active');
                $el.find('.parcours-bg').removeClass('parcours-bg');
                $el.find('article.active').animate({'opacity': 0}, 100, function(){ $el2.removeClass('active'); });
                return false;
            }
            
            $el.find('.active').removeClass('active');
            var index = (parseInt($(this)[0].className.replace('icon-','')) - 1);
            var $art = $el.find('.personna-content article:eq(' + index + ')');
            $art.css('opacity', 0);
            $art.addClass('active');
            $art.animate({'opacity': 1}, 100);
            $(this).addClass('active');
            $($el.children()[0]).removeClass('parcours-bg');

            if(index == 3 || index == 4 || index == 0) {
                if(personnaIndex == 2 || personnaIndex == 4 || personnaIndex == 5) {
                    console.log(index, personnaIndex, 'ok');
                    $($el.children()[0]).addClass('parcours-bg');
                }
                
            } else if(index == 2) { // animations
                if(personnaIndex == 0){
                    $('#anim-1').addClass('animated');
                } else if(personnaIndex == 2) {
                    anim3();
                } else if(personnaIndex == 3) {
                    anim4();
                } else if(personnaIndex == 4) {
                    $('#anim-5').addClass('animated');
                } else if(personnaIndex == 5) {
                    $('#anim-6').addClass('animated');
                }
            } else if(index == 1) {
                $($el.children()[0]).addClass('parcours-bg');
            }
            
            return false;
        });
    });
    
    $('.content-carrousel').each(function(e, i){
        var $el = $(this);
        $el.find('nav a').click(function(e){
            $el.find('.active').removeClass('active');
            $el.find('.content').find('article:eq(' + (parseInt($(this).attr('data-index')) - 1) + ')').addClass('active');
            $(this).addClass('active');
            
            setTimeout(function(){
                $(window).trigger('resize');
            }, 150);
            e.preventDefault();
            return false;
        });
    });
    
    
    
    $('*[data-href]').click(function(){
        window.open($(this).attr('data-href'));
    });
    
    
    // ANIM 2
    for(var j = 0; j < (17*5); j++) {
        $('#anim-2 ul').append('<li/>');
    }
    setInterval(function(){
        $('#anim-2 ul li.active').removeClass('active');
        
        var $items = [];
        var containerBottomOffset = $('#anim-2').offset().top + $('#anim-2').outerHeight();
        $('#anim-2 li').each(function(){ 
            if($(this).offset().top + $(this).outerHeight() <= containerBottomOffset - 80){
                $items.push($(this));
            }
        });
        var items = shuffle($items);
        
        setTimeout(function(){
            $(items[0]).addClass('active');
            $(items[1]).addClass('active');
            $(items[2]).addClass('active');
        }, 700);
    }, 4.5e3);
    
    // ANIM 3
    var anim3 = function(){
        var $el = $('#anim-3');
        var delay = 300;
        var ratios = [
            70,
            49,
            37,
            30,
            25
        ];
        var numbers = [
            23,
            17,
            13,
            11,
            10
        ];
        
        $el.find('.bloc').css('width', '0%');
        
        $el.find('.bloc').each(function(i, e){
            var i = i;
            setTimeout(function(){
                console.log(i, ratios[i]);
                $el.find('#bloc-'+(i+1)).animate({'width': ratios[i] + "%"}, 3e3);
                $el.find('#bloc-'+(i+1) + ' i').animateNumber({
                    number: numbers[i],
                }, 3e3);
            },i*delay);
        });
    };
    
    var anim4 = function(){
        var $el = $('#anim-4');
        $el.find('.counter').animateNumber({
            number: 23000,
        }, 3e3);
        $('#anim-4-line').css('width', '0%').animate({'width': '90%'}, 3e3);
        $('.date').css('opacity', '0');
        $('.date').each(function(i, e){
            setTimeout(function(){
                $(e).animate({'opacity': '1'}, 500);
            }, i * 700);
        });
    };
    
    preloadImages(
        "section-menu-icons.png",
        "personna-foot-bg.png",
        "sub-menu-bg.jpg",
        "section-3-bg.jpg",
        "section-4-bg.jpg",
        "section-5-bg.jpg",
        "anim-4-arrow.png",
        "anim-1-bg.png",
        "anim-4-bg.png",
        "anim-2-sprite.png",
        "anim-5-mask.png",
        "anim-6-layer-1.png",
        "faux.png",
        "vrai.png",
        "quote-bg.png",
        "section-aider-image_02.jpg",
        "section-aider-image_03.jpg",
        "section-aider-image_04.jpg",
        "personna-1-content-bg.png",
        "personna-2-content-bg.png",
        "personna-3-content-bg.png",
        "personna-4-content-bg.png",
        "personna-5-content-bg.png",
        "personna-6-content-bg.png"
    );
});