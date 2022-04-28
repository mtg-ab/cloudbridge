jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("datas")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.datas",
                start:"-=250",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.datas div.bloc",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        //INIT ANIM

    }
    

});