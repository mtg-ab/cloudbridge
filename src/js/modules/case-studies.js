const { RGBA_ASTC_10x10_Format } = require("three");

jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("case-studies")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        if(jQuery("section.case-studies svg.line-1").length > 0){

            gsap.to("section.case-studies svg.line-1",{
                scrollTrigger: {
                trigger: "section.case-studies",
                start:"-=450",
                toggleClass: {targets: "section.case-studies svg.line-1", className: "active"}
                }
            });

        }

        if(jQuery("section.case-studies svg.line-2").length > 0){

            gsap.to("section.case-studies svg.line-2",{
                scrollTrigger: {
                    trigger: "section.case-studies svg.line-2",
                    start: "-=450px",
                    end: "+=1500px",
                    toggleClass: {targets: "section.case-studies svg.line-2", className: "active"}
                }
            });

        }

        //INIT TIMELINE
        let slider = gsap.timeline({
            scrollTrigger: {
                trigger: "section.case-studies",
                start:"-=350",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        slider.to("section.case-studies div.bloc-slider",0.75, { opacity:1,y:0,ease: "power2.inOut" });

        var numItems = jQuery('section.case-studies div.slider div.bloc').length;
        var num = 100 / numItems;
        jQuery( "section.case-studies div.steps i" ).css("width",""+num+"%")

        var $ = require('jquery');
        var Flickity = require('flickity');
        require('flickity-fade');

        var flkty = new Flickity( 'section.case-studies div.slider', {
            wrapAround: true,
            pageDots: false,
            fade:true,
            draggable:false,
            autoPlay: false,
            prevNextButtons: false,
            on:{
                change: function( index ) {
                    var id = index;

                    let sliderInText = gsap.timeline();

                    sliderInText.to("section.case-studies div.bloc p.words span.word span.char",0, { opacity:0,scaleY:1,y:45,delay:0});
                    sliderInText.to("section.case-studies div.bloc p.name strong",0, { opacity:0,scaleY:1,y:45,delay:-0.45});
                    sliderInText.to("section.case-studies div.bloc  p.name span",0, { opacity:0,scaleY:1,y:45,delay:-0.45});
                    sliderInText.to("section.case-studies div.bloc figure img",0, { opacity:0,scaleY:1,y:45,delay:-0.45});

                    sliderInText.to("section.case-studies div.is-selected p.words span.word span.char",0.75, { opacity:1,delay:0,y:0,ease: "power2.In" });
                    sliderInText.to("section.case-studies div.is-selected p.name span",0.55, { opacity:1,y:0,delay:-0.55,ease: "power2.In" });
                    sliderInText.to("section.case-studies div.is-selected p.name strong",0.55, { opacity:1,y:0,delay:-0.55,ease: "power2.In" });
                    sliderInText.to("section.case-studies div.is-selected figure img",0.55, { opacity:1,y:0,delay:-0.55,ease: "power2.In" });

                    jQuery( "section.case-studies div.slider div.bloc" ).each(function( index ) {
                        
                        if(jQuery(this).hasClass('is-selected')){
                            var numItems = jQuery('section.case-studies div.slider div.bloc').length;
                            var num = 100 / numItems;
                            var id = jQuery(this).data('id');
                            var num = num * id;
                            jQuery( "section.case-studies div.steps i" ).css("width",""+num+"%")
                            if(id < 10){
                                jQuery("section.case-studies span.actual").html("0"+id+"")
                            }else{
                                jQuery("section.case-studies span.actual").html(""+id+"")
                            }
                        }
                        
                    })
                } 
            }
        })

        jQuery('span.btn-next').on( 'click', function() {
            animOutTxt();
            setTimeout(
                function() {
                    flkty.next();
                    animInTxt();
                },
            700);
        });

        jQuery('span.btn-prev').on( 'click', function() {
            animOutTxt();
            setTimeout(
                function() {
                    flkty.previous();
                    animInTxt();
                }, 
            700);
        });


        function animOutTxt(){

            let sliderOutText = gsap.timeline();
            sliderOutText.to("section.case-studies div.bloc p.words span.word span.char",0.55, { opacity:0,y:-45,ease: "power2.In" });
            sliderOutText.to("section.case-studies div.bloc p.name strong",0.55, { opacity:0,delay:-0.45,y:-45,ease: "power2.In" });
            sliderOutText.to("section.case-studies div.bloc p.name span",0.55, { opacity:0,delay:-0.55,y:-45,ease: "power2.In" });
            sliderOutText.to("section.case-studies div.bloc figure img",0.55, { opacity:0,delay:-0.55,y:-45,ease: "power2.In" });

        }

    }
})