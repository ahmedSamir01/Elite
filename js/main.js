/*global $, alert, console*/

$(function () {

    "use strict";


    $(window).on("load resize", function() {
        
        $(".slider, .slider .carousel-item").height($(window).height() - ($(".upper-bar").innerHeight() + $("nav").innerHeight()) + 1);
        
    });
    
    
    $("nav ul li").on("click", function () {

        $(".navbar-collapse").removeClass("show");
        $("body, html").animate({
           
            scrollTop: $("#" + $(this).data('scroll')).offset().top
            
        }, 1000);

        
    });
    
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














