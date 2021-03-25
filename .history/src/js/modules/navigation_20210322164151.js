$(window).scroll(function () {
    if ($(".navigation").length > 0) {
        $('.navigation .main-nav').toggleClass('top-nav', $(this).scrollTop() > 48);
    } 
});   