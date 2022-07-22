jQuery( document ).ready(function() {

    const { gsap } = require("gsap/dist/gsap");
    var ScrollTrigger = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    //INIT TIMELINE
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: jQuery("section.listing-posts"),
            start:"-=550",
        }
    });
    //INIT TIMELINE

    //ANIM TIMELINE
    tl.staggerTo(jQuery("section.listing-posts div.bloc"),0.55, { opacity:1,x:0,y:0,stagger:0.15,ease: "power2.Out" });
    //ANIM TIMELINE 

    jQuery( "section.listing-posts div.bloc svg" ).each(function( index ) {
        gsap.to(jQuery(this),{
            scrollTrigger: {
                trigger: jQuery(this),
                start:"-=450",
                toggleClass: {targets: jQuery(this), className: "active"}
            }
        });
    })

})