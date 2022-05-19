jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("latest-news")){

        var numItems = jQuery('section.latest-news div.slider div.bloc').length;
        var num = 100 / numItems;
        jQuery( "section.latest-news div.steps i" ).css("width",""+num+"%")
        var Flickity = require('flickity-fade');

        var flky = new Flickity( 'section.latest-news div.slider', {
            freeScroll: true,
            wrapAround: true,
            pageDots: false,
            fade:true,
            prevNextButtons: false,
            autoPlay: 4500,
            draggable:false,
            on:{
                change: function( index ) {
                    var id = index;
                    
                    jQuery( "section.latest-news div.slider div.bloc" ).each(function( index ) {
                        if(jQuery(this).hasClass('is-selected')){
                            var numItems = jQuery('section.latest-news div.slider div.bloc').length;
                            var num = 100 / numItems;
                            var id = jQuery(this).data('id');
                            var num = num * id;
                            
                            jQuery( "section.latest-news div.steps i" ).css("width",""+num+"%")
                            if(id < 10){
                                jQuery("section.latest-news span.actual").html("0"+id+"")
                            }else{
                                jQuery("section.latest-news span.actual").html(""+id+"")
                            }
                        }
                    })
                } 
            }
        })

    }
})