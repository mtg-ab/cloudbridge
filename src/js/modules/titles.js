jQuery( document ).ready(function() {

    const { gsap } = require("gsap/dist/gsap");
    var ScrollTrigger = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    jQuery( "h2" ).each(function( index ) {
        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: jQuery(this),
                start:"-=650",
            }
        });
        //INIT TIMELINE
    
        //ANIM TIMELINE
        tl.staggerTo(jQuery(this).find("span.char"),0.25, { opacity:1,x:0,y:0,stagger:0.015,ease: "power2.Out" });
        //ANIM TIMELINE 
    })

    jQuery( "h1" ).each(function( index ) {
        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: jQuery(this),
                start:"-=650",
            }
        });
        //INIT TIMELINE
    
        //ANIM TIMELINE
        tl.staggerTo(jQuery(this).find("span.char"),0.25, { opacity:1,x:0,y:0,stagger:0.015,ease: "power2.Out" });
        //ANIM TIMELINE 
    })
})