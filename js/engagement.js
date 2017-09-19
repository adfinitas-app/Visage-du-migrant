$(document).foundation(); 

$(document).ready(function(){
    "use_strict";
    
    var isScrolling = false;
    var widthBreakpoint = 1100;
    var bodyWidth = $('body').outerWidth();
    
    $(window).on('resize', function(){
        bodyWidth = $('body').outerWidth();
    });
    
    var isMobileWidth = function() {
        return  bodyWidth < widthBreakpoint;
    };
    
    $('#facebook-nav-link').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=http://visagesdemigrants.lacimade.org');
    
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
    
    $('#engagement-section-1').click(function(){
        $('#engagement-section-1 iframe').addClass('visible')
            .attr('src', $('#engagement-section-1 iframe').attr('data-src'));
    });
    
    /***************
     * SMOOTH SCROLL
     *************/
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                isScrolling = true;
                
                $('#main-nav .active').removeClass('active');
                $(this).addClass('active');
                
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, function(){
                    isScrolling = false;
                });
                return false;
            }
        }
    });


    var initWaypoints = function() {
        $('.engagement-section').each(function(){
            var el = this;
            $(this).waypoint({
              handler: function(direction) {
                 
                 $('#main-nav #nav-states li a.active').removeClass('active');
                 $('#main-nav #nav-states li a[href="#' + this.element.id + '"]').addClass('active');
              }
            });
        });
    };
    
    // TMP
    $('#engagement-section-1').css('minHeight', screen.width*618/1091);
});
