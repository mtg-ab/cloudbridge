jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("latest-case-studies")){

        var numItems = jQuery('section.atest-case-studies div.slider div.bloc').length;
        var num = 100 / numItems;
        jQuery( "section.latest-case-studies div.steps i" ).css("width",""+num+"%")
        var Flickity = require('flickity-fade');

        var flky = new Flickity( 'section.latest-case-studies div.slider', {
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
                    
                    jQuery( "section.latest-case-studies div.slider div.bloc" ).each(function( index ) {
                        if(jQuery(this).hasClass('is-selected')){
                            var numItems = jQuery('section.latest-case-studies div.slider div.bloc').length;
                            var num = 100 / numItems;
                            var id = jQuery(this).data('id');
                            var num = num * id;
                            
                            jQuery( "section.latest-case-studies div.steps i" ).css("width",""+num+"%")
                            if(id < 10){
                                jQuery("section.latest-case-studies span.actual").html("0"+id+"")
                            }else{
                                jQuery("section.latest-case-studies span.actual").html(""+id+"")
                            }
                        }
                    })
                } 
            }
        })

    }
})