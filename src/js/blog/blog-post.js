jQuery( document ).ready(function() {
    if(jQuery("main").hasClass("single-post")){
        
        //ANCHOR

        jQuery('div.bloc-contain-post h2').each(function(index) {
            index += 1
            jQuery(this).attr('data-id', index);
            jQuery('div.bloc-anchor-post ul').append(jQuery('<li/>', {html: "<span data-id='"+index +"'>"+index+" - "+jQuery(this).text()+"</span>"}));
            
            
        });

        if(jQuery('div.bloc-anchor-post ul li').length < 1){
            jQuery('div.bloc-anchor-post').remove();
        }
    
        jQuery('div.bloc-anchor-post ul li').each(function(index) {
            jQuery(this).click(function(index) {
                var id = jQuery(this).find('span').data('id');
                console.log(id);
                jQuery('div.bloc-contain-post h2').each(function(index) {
                    var idTitle = jQuery(this).data('id');
                    if(id == idTitle){
                        jQuery('html, body').animate({
                            scrollTop: jQuery(this).offset().top - 150
                        }, 500);
                    }
                })
            })
        })
        
        //ANCHOR

    }
})