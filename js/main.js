/*global $, alert, console*/

$(window).on("load resize", function() {
        
    $(".slider, .slider .carousel-item").height($(window).height() - ($(".upper-bar").innerHeight() + $("nav").innerHeight()) + 1);
        
});

$(function () {

    "use strict";

    new WOW({mobile:!1}).init();
    
    
    $("nav ul li").on("click", function () {

        $(".navbar-collapse").removeClass("show");
        $("body, html").animate({
           
            scrollTop: $("#" + $(this).children().data('scroll')).offset().top
            
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
    
    $(".navbar-collapse").on("click", (e) => {e.stopPropagation()});
    
    // close when click somewhere
    $(document).bind("click", function(e) {
        if ($(".navbar-collapse").hasClass("show") && e.target !== document.querySelector(".show") && e.target !== document.querySelector(".navbar-toggler") && e.target !== document.querySelector(".navbar")) {$(".navbar-toggler").click()}
    });
});














