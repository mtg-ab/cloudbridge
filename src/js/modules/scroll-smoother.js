const { gsap } = require("gsap/dist/gsap");
const { ScrollSmoother } = require('gsap/dist/ScrollSmoother.js');
gsap.registerPlugin(ScrollSmoother);

jQuery( document ).ready(function() {
    ScrollSmoother.create({
        wrapper: "div#smooth-wrapper",
        content: "div#smooth-content",
        smooth: 2,
        effects: true
    });
})