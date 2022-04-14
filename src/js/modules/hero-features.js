jQuery( document ).ready(function() {

    if(jQuery("section.hero-features  div").hasClass("blocs")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        gsap.to("section.hero-features svg",{
            scrollTrigger: {
              trigger: "section.hero-features svg",
              start:"-=500",
              toggleClass: {targets: "section.hero-features svg", className: "active"}
            }
        });

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