jQuery( document ).ready(function() {
    
    if(jQuery("section").hasClass("key-numbers")){


        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        if(jQuery("section.key-numbers svg.line-1").length > 0){

            gsap.to("section.key-numbers svg.line-1",{
                scrollTrigger: {
                    trigger: "section.key-numbers",
                    start:"-=450",
                    toggleClass: {targets: "section.key-numbers svg.line-1", className: "active"}
                }
            });

        }

        if(jQuery("section.key-numbers svg.line-2").length > 0){

            gsap.to("section.key-numbers svg.line-2",{
                scrollTrigger: {
                    trigger: "section.key-numbers svg.line-2",
                    start: "-=450px",
                    end: "+=1500px",
                    toggleClass: {targets: "section.key-numbers svg.line-2", className: "active"}
                }
            });

        }

        var Flickity = require('flickity');

        function flickity_handle_wheel_event(e, flickity_instance, flickity_is_animating) {
            if (!flickity_is_animating) {    
                var direction = (Math.abs(e.deltaX) > Math.abs(e.deltaY)) ? e.deltaX : e.deltaY;
                if (direction > 0) {
                    flickity_instance.next();
                } else {
                    flickity_instance.previous();
                }
            }
        }

        function flickity_handle_wheel_event_text(e, flickity_instance, flickity_is_animating) {
            if (!flickity_is_animating) {    
                var direction = (Math.abs(e.deltaX) > Math.abs(e.deltaY)) ? e.deltaX : e.deltaY;
                if (direction > 0) {
                    flickity_instance.next();
                } else {
                    flickity_instance.previous();
                }
            }
        }

        var carousel_1 = document.querySelector("section.key-numbers");

        var flickity_1 = new Flickity("section.key-numbers div.numbers", {
            pageDots: false,
            prevNextButtons: false,
            verticalCells: false,
            selectedAttraction: 0.01,
            friction: 0.15,
            on:{
                change: function( index ) {
                    var id = index;
                    jQuery( "section.key-numbers div.numbers div.number" ).each(function( index ) {
                        if(jQuery(this).hasClass('is-selected')){
                            var tl = gsap.timeline();
                            tl.staggerTo(jQuery(this).find("span.char"),0.65, { y:0,stagger:0.1 });
                        }else{
                            var tl = gsap.timeline();
                            tl.staggerTo(jQuery(this).find("span.char"),0.65, { y:110,stagger:0.1 });
                        }
                    })
                } 
            }
        });

        var flickity_2 = new Flickity("section.key-numbers div.texts", {
            pageDots: false,
            prevNextButtons: false,
            verticalCells: false,
        });

        var flickity_1_is_animating = false;

        flickity_1.on("settle", function(index) {
            flickity_1_is_animating = false;
        });

        flickity_1.on("select", function(index) {
            flickity_1_is_animating = true;
        });

        var flickity_2_is_animating = false;

        flickity_2.on("settle", function(index) {
            flickity_2_is_animating = false;
        });

        flickity_2.on("select", function(index) {
            flickity_2_is_animating = true;
        });

        function initAnim(){
            carousel_1.onwheel = function(e) {
                flickity_handle_wheel_event(e, flickity_1, flickity_1_is_animating);
                flickity_handle_wheel_event_text(e, flickity_2, flickity_2_is_animating);
            }
            jQuery(document).on('touchmove', function() {
                flickity_handle_wheel_event(e, flickity_1, flickity_1_is_animating);
                flickity_handle_wheel_event_text(e, flickity_2, flickity_2_is_animating);
            });
        }
          
        
        var h = jQuery("section.key-numbers").offset().top;
        var wh = jQuery("section.key-numbers div.number").height();
        var x = jQuery("section.key-numbers div.number").length;
        var wh = wh * x;

        ScrollTrigger.create({
            trigger: "section.key-numbers",
            pin: true,
            start: 'top 0',
            scrub:1,
            end: () =>  '+='+wh+'',
            animation: initAnim(),
            //onEnter: () => initAnim(),
        })
        
        

    }
    

});