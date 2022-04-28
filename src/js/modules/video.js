jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("video")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        if(jQuery("section.video svg.line-1").length > 0){

            gsap.to("section.video svg.line-1",{
                scrollTrigger: {
                trigger: "section.video",
                start:"-=450",
                toggleClass: {targets: "section.video svg.line-1", className: "active"}
                }
            });

        }

        if(jQuery("section.video svg.line-2").length > 0){

            gsap.to("section.video svg.line-2",{
                scrollTrigger: {
                    trigger: "section.video svg.line-2",
                    start: "-=450px",
                    end: "+=1500px",
                    toggleClass: {targets: "section.video svg.line-2", className: "active"}
                }
            });

        }

        var mrUtil = function ($) {
            var Util = {
                activateIframeSrc: function activateIframeSrc(iframe) {
                    var $iframe = $(iframe);
                    if ($iframe.attr('data-src')) {
                        $iframe.attr('src', $iframe.attr('data-src'));
                    }
                },
                idleIframeSrc: function idleIframeSrc(iframe) {
                    var $iframe = $(iframe);
                    $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
                }
            };
            return Util;
        }(jQuery);
        

        jQuery("section.video div.btn-play").click(function( index ) {        
            jQuery(this).fadeOut();
            jQuery(this).parent().find("img").fadeOut();
            jQuery(this).parent().find("video").trigger('play');
            
            var $iframe = jQuery(this).parent().find('iframe');
            mrUtil.activateIframeSrc($iframe);
            var symbol = jQuery(this).parent().find("iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
            //modify source to autoplay and start video
            jQuery(this).parent().find("iframe")[0].src += symbol + "autoplay=1";

        })

        

    }
})