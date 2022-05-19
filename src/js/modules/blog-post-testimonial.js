jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("contain-post")){
        
        if(jQuery("div").hasClass("bloc-testimonial-post")){

            jQuery('div.bloc-testimonial-post').each(function( index ) {
                
                if(jQuery("div").hasClass("post-testimonial")){
                    var bloc = jQuery(this).parent().html();
                    jQuery(bloc).appendTo("div.post-testimonial:eq("+index+")");
                    jQuery(this).remove();
                    jQuery("div.contain-bloc-testimonial-post").remove();
                    jQuery("div.bloc-hide").remove();
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