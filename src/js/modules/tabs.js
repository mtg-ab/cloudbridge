jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs")){
        
        jQuery( "section.tabs div.bloc-titles div.bloc" ).each(function( index ) {
            jQuery(this).click(function( index ) {
                jQuery( "section.tabs div.bloc-titles div.bloc" ).removeClass('selected');
                jQuery(this).addClass('selected')
                var id = jQuery(this).data('id'); 
                jQuery( "section.tabs div.bloc-imgs div.bloc" ).each(function( index ) {
                    var idBlocImg = jQuery(this).data('id'); 
                    if(id == idBlocImg){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })
    }
})