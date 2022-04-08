jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("logos")){
        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        let blocLine1 = jQuery('section.logos .bloc-line-1').height();
        let blocLine2 = jQuery('section.logos .bloc-line-2').height();



        var tween = gsap.to(".bloc-line-1", {
            y: "-"+blocLine1+"",
            ease: "none",
            scrollTrigger: {
                trigger: "section.logod",
                start:"-=550",
                scrub: 1.15,
            }
        });

        var tween = gsap.to(".bloc-line-2", {
            y: ""+blocLine2+"",
            ease: "none",
            scrollTrigger: {
                trigger: "section.logos",
                start:"-=550",
                scrub: 1.15,
            }
        });

        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "section.logos",
              start:"-=450",
            }
        });
        //INIT TIMELINE
        //INIT TIMELINE
        var tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: "section.logos",
              start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.logos div.bloc-line-1 div.bloc",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        tl2.staggerTo("section.logos div.bloc-line-2 div.bloc",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });

    }
    

});