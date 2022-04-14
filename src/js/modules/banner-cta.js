jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("case-studies")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "section.banner-cta",
              start:"-=300",
            }
        });
        //INIT TIMELINE

        //ANIM TIMELINE
        tl.to("section.banner-cta div.row-btns",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        //ANIM TIMELINE

    }
})