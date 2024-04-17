$(document).ready(function(){

    //preloader
    $(window).load(function () {
        $("#loading").fadeOut(1000);
    });
    
    //mixitup
    var mixer = mixitup('#hello', {
    animation: {
        duration: 300
    }
    
    });

    //counter
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });

    //slickslider
    $('.wrapper').slick();
})

//AOS
AOS.init({
    duration: 300,
    easing: 'linear'
});




