jQuery(document).ready(function() {
    if(jQuery("section").hasClass("faq")){
        jQuery( "section.faq div.bloc-faq div.bloc" ).each(function( index ) {
            jQuery(this).click(function( index ) {
                
                if(jQuery(this).hasClass("open")){
                    jQuery(this).removeClass('open')
                    jQuery( "section.faq div.bloc-faq div.bloc" ).removeClass('hide')
                }else{
                    jQuery( "section.faq div.bloc-faq div.bloc" ).removeClass('open')
                    jQuery( "section.faq div.bloc-faq div.bloc" ).addClass('hide')
                    jQuery(this).addClass('open')
                    jQuery(this).removeClass('hide')
                }
                
            })
        })
    }

});