jQuery(document).ready(function() {
    if(jQuery("section").hasClass("faq")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "section.faq",
              start:"-=450",
            }
        });
        //INIT TIMELINE

        //ANIM TIMELINE
        tl.staggerTo("section.faq div.bloc-faq div.bloc",0.5, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        //ANIM TIMELINE

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