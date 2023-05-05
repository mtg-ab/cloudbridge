jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("pricing")){
        
        var height = jQuery("section.pricing div.bloc-offers").height();
        var height = height + 20;
        jQuery("section.pricing div.bloc-offers span.line").css("height",height)
        jQuery("section.pricing div.bloc-offers span.bg-color").css("height",height)
        jQuery( "section.pricing div.bloc-offers div.head-bloc" ).each(function( index ) {
            if(jQuery(this).hasClass('selected')){
                var position = jQuery(this).index()
                var position = position + 1
                jQuery( "section.pricing div.contain-bloc-offers div.bloc-infos div.info:nth-child("+position+")").addClass("selected");

            }
        })

        jQuery( "section.pricing div.bloc-offers div.question" ).each(function( index ) {
            jQuery(this).click(function( index ) {
                jQuery(this).find("div.contain-question").toggleClass('open')
            })
        })

        jQuery(document).mouseup(function(e) {
            var container =  jQuery( "section.pricing div.bloc-offers div.question" );
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                jQuery( "section.pricing div.bloc-offers div.question div.contain-question" ).removeClass('open')
            }
        });
        

    }
})
