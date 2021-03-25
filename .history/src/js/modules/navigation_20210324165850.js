$(window).scroll(function () {
    if ($(".navigation").length > 0) {
        $('.navigation .main-nav').toggleClass('fixed-nav', $(this).scrollTop() > 48);
    } 
});   