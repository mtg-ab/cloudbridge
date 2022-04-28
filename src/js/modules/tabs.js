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

        if ( matchMedia('screen and (max-width: 767px)').matches ) {
            var Flickity = require('flickity');
            var flky = new Flickity( 'section.tabs div.bloc-titles', {
                prevNextButtons: false,
                pageDots: false,
                cellAlign: "left",
                on:{
                    change: function( index ) {
                        var id = parseInt(index) + 1;
                        console.log(id)
                        jQuery( "section.tabs div.bloc-titles div.bloc" ).each(function( index ) {
                            var idBlocImg = jQuery(this).data('id'); 
                            if(id == idBlocImg){
                                jQuery(this).addClass('selected')
                            }else{
                                jQuery(this).removeClass('selected')
                            }
                        })
                        jQuery( "section.tabs div.bloc-imgs div.bloc" ).each(function( index ) {
                            var idBlocImg = jQuery(this).data('id'); 
                            if(id == idBlocImg){
                                jQuery(this).addClass('selected')
                            }else{
                                jQuery(this).removeClass('selected')
                            }
                        })
                    } 
                }
            })            
        }

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        gsap.to("section.tabs svg",{
            scrollTrigger: {
              trigger: "section.tabs svg",
              start:"-=600",
              toggleClass: {targets: "section.tabs svg", className: "active"}
            }
        });
        
        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "section.tabs",
              start:"-=450",
            }
        });
        //INIT TIMELINE

        //ANIM TIMELINE
        tl.staggerTo("section.tabs div.bloc-titles div.bloc",0, { opacity:1,stagger:0.2,ease: "power2.inOut" });
        tl.to("section.tabs div.bloc-imgs div.bloc div.bloc-txt",0.7, { opacity:1,stagger:0.2,ease: "power2.inOut",delay:-0.35 });
        tl.to("section.tabs div.bloc-imgs div.bloc div.bloc-img",0.7, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut",delay:-1.1 });
        //ANIM TIMELINE

    }
})