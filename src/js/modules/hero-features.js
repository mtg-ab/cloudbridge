jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("hero-features")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var tl = gsap.timeline();
        tl.to("section.hero-features div.bloc-title p",0.7, { opacity:1,ease: "power2.inOut",delay:0 });
        tl.to("section.hero-features div.bloc-title div.row-btns",0.7, { opacity:1,y:0,ease: "power2.inOut",delay:-0.5 });
        tl.to("section.hero-features div.blocs div.bloc img",0.75, { opacity:1,x:0,stagger:0.2,delay:0,ease: "power2.inOut" });


        var Flickity = require('flickity');

        let tickerSpeed = 1;

        let flickity = null;
        const slideshowEl = document.querySelector('section.hero-features div.blocs');

        const update = () => {
        if (flickity.slides) {
            flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
            flickity.selectedIndex = flickity.dragEndRestingSelect();
            flickity.updateSelectedSlide();
            flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
        };

        flickity = new Flickity(slideshowEl, {
            autoPlay: false,
            prevNextButtons: true,
            pageDots: false,
            draggable: true,
            wrapAround: true,
            selectedAttraction: 0.015,
            friction: 0.45,
            prevNextButtons: false,
        });
        flickity.x = 0;

        update();

    }

});