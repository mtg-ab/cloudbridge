/**
 * Main.js
 *
 * @since 1.0.0
 */

/*Import Plugin
var Isotope = require('isotope-layout');
var Flickity = require('flickity');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');
*/

var Flickity = require('flickity');
var Flickity = require('flickity-fade');
import Splitting from "splitting";
import { gsap } from "gsap";
//import * as THREE from 'three';



Splitting({
    target: "h2, [data-splitting], h1, div.testimonial p",
    by: "chars",
    key: null
}); 


const { ScrollSmoother } = require('gsap/dist/ScrollSmoother.js');
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

jQuery( document ).ready(function() {
    
    let smoother = ScrollSmoother.create({
        wrapper: "div#smooth-wrapper",
        content: "div#smooth-content",
        smooth: 1.4,
        effects: true
    });
    
})



















