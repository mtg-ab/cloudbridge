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

})