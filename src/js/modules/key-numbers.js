jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("key-numbers")){
        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP


        var h = jQuery("section.key-numbers").offset().top;
        var wh = jQuery("section.key-numbers div.numbers").height();
        var wh = wh - 110;
        var h = h - 100;
        console.log(wh);
        

        tween = gsap.to("section.key-numbers div.numbers", {
            //y: "-"+wh+"",
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                pin: true,
                start: h,
                snap:1,
                scrub: 0.5,
                end: () =>  "+=" + wh +"",
            }
        });

        jQuery( "section.key-numbers div.numbers span" ).each(function( index ) {
            gsap.to(jQuery(this), {
                y: "-"+wh+"",
                scrollTrigger: {
                    trigger: jQuery(this),
                    pin: true,
                    start: h,
                    //end: "bottom 0",
                    scrub: 0.5,
                    //toggleClass: {targets:jQuery(this), className: "active"}
                }
            });
        })

    }
    

});