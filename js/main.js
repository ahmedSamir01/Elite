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
    
    $(window).on("scroll load", _ => {
       
        if ($(this).scrollTop() > 1000) {
            
            $(".chevron").fadeIn(700);
            
        } else {
            
            $(".chevron").fadeOut(700);
        }
        
    });
    
    $(".chevron").on("click", function () {
        
        $("body, html").animate({
           
            scrollTop: 0
            
        }, 1000);
        
    });
});














