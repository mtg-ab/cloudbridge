jQuery( document ).ready(function() {

    jQuery(window).scroll(function() {
        var sticky = jQuery('header'),
        scroll = jQuery(window).scrollTop();

        if (scroll >= 50) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });

    jQuery(window).on('wheel', function(event){
        if(event.originalEvent.deltaY < 0){
            jQuery('header').addClass('active')
        }
        else {
            jQuery('header').removeClass('active')
        }
    });

    jQuery('header div.burger-menu').click(function(){

        jQuery(this).toggleClass('open');
        jQuery('header').toggleClass('open');
        jQuery('div.menu-mobile').toggleClass('open');

    });

});