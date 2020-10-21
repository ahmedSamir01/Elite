/*global $, alert, console*/

$(function () {

    "use strict";


    $(window).on("load resize", function() {
        
        $(".slider, .slider .carousel-item").height($(window).height() - ($(".upper-bar").innerHeight() + $("nav").innerHeight()) + 1);
        
    });
    
    
    $(".navbar li").on("click", function (b) {

        b.preventDefault();

        console.log($(this).data('scroll'));
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 35

        }, 2000);

        $(".navbar li").removeClass("active");
        $(this).addClass("active");

    });

/*    $(".navbar li a").on("click", function (b) {

        b.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).data('scroll')).offset().top - 35

        }, 2000);

        $(".navbar a").removeClass("active");
        $(this).addClass("active");

    });*/
    
    var sc = $('.scrollToTop');
      
    $(window).on("scroll", function () {
        
        if ($(window).scrollTop() >= 1000) {

            if (sc.is(':hidden')) {

                sc.fadeIn();

            }

        } else {

            sc.fadeOut();

        }    
        
    });
    
    sc.on("click", function (e) {
            
        e.preventDefault();
            
        $("html, body").animate({
               
            scrollTop: 0
               
        }, 2000);
            
    });
    
});














