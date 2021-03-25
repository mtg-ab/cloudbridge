$(window).scroll(function () {
    if ($(".navigation").length > 0) {
        $('.navigation .main-nav').toggleClass('fixed-navigation', $(this).scrollTop() > 48);
    } 
});   