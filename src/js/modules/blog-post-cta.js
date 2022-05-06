jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("contain-post")){
        
        if(jQuery("div").hasClass("contain-blog-post-cta")){

            jQuery('div.contain-blog-post-cta div.bloc').each(function( index ) {
                var bloc = jQuery(this).html();
                jQuery(bloc).appendTo("div.post-cta:eq("+index+")");
                jQuery(this).remove();
                if(jQuery("div").hasClass("post-cta")){
                    jQuery("div.contain-blog-post-cta").remove();
                }
                /*
                jQuery('div.post-cta').each(function( index ) {
                    jQuery("div.contain-blog-post-cta div.bloc:eq("+j+")").appendTo(jQuery(this).eq(index));
                })
                */
                
            })

        }

    }
})