jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("hero-single-feature")){

        const { gsap } = require("gsap/dist/gsap");

        var tl = gsap.timeline();
        tl.to("section.hero-single-feature div.bloc-title p",0.7, { opacity:1,ease: "power2.inOut",delay:0 });
        tl.to("section.hero-single-feature div.bloc-title div.row-btns",0.7, { opacity:1,y:0,ease: "power2.Out",delay:-0.7 });
        tl.to("section.hero-single-feature div.bloc-img",1, { opacity:1,y:0,ease: "power2.Out",delay:-0.45 });


    }

});