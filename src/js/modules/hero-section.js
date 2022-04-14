jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-section")){

        const { gsap } = require("gsap/dist/gsap");

        var tl = gsap.timeline();
        tl.to("section.hero-section div.bloc-txt",0.7, { opacity:1,ease: "power2.inOut",delay:0.5 });
        tl.to("section.hero-section div.hero-section-container__bloc",0.7, { opacity:1,y:0,ease: "power2.Out",delay:-0.75 });

    }
})