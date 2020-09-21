$ (document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('fixed-nav');
        } else {
            $('nav').removeClass('fixed-nav');
        }
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
     });
     $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });

    // Navigation Scrolling
     // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });

        // Animations
        $('.js--waypoint-1').waypoint(function (direction) {
           $('.js--waypoint-1').addClass('animate__animated animate__fadeIn');
            }, {
                offset:'50%'
            });

            $('.js--waypoint-2').waypoint(function (direction) {
                $('.js--waypoint-2').addClass('animate__animated animate__fadeIn');
                 }, {
                     offset:'50%'
                 });

                 $('.js--waypoint-3').waypoint(function (direction) {
                    $('.js--waypoint-3').addClass('animate__animated animate__bounceInDown');
                     }, {
                         offset:'50%'
                     });

// Mobile Navigation
    $('.js--nav-icon').click(function(){
        const nav = $('.js--main-nav')
        const icon = $('.js--nav-icon ion-icon')
    
        nav.slideToggle(200)

        
        if (icon[0].name == 'menu-outline') {
            icon[0].name = 'close-outline'
        } else if (icon[0].name == 'close-outline') {
            icon[0].name = 'menu-outline'
        }
    });

    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if ($(window).width() > 767){
        nav.css("display", "block");
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
        
        } else {
        
        nav.css("display", "none");
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
        
        }
        
        });

});
