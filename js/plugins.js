// trigger nice scroll

$(window).on("load", function() {
    
    setTimeout(function () {
        $("body").niceScroll({

            cursorborder: 0,
            cursorborderradius: '25px',
            cursorwidth: '7px',
            cursorcolor: '#08526d',
            cursorfixedheight: 120,
            zindex:'99999999'


        });
    }, 500);
});    


    
    
    
    
    
    