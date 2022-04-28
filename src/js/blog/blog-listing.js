jQuery( document ).ready(function() {
    if(jQuery("main").hasClass("blog-listing")){
        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        gsap.to("main.blog-listing section.hero-section-blog",{
            scrollTrigger: {
            trigger: "section.hero-section-blog svg",
            start:"-=600",
            toggleClass: {targets: "section.hero-section-blog svg", className: "active"}
            }
        });
    }
})