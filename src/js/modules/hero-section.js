import * as THREE from 'three';

if(document.getElementById("contain-canvas")){

    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 1000 );
    camera.position.set(0,0,1);

    const scene = new THREE.Scene();

    //INIT SHADERS
    const vertex = `
    uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 pixels;
        float PI = 3.1415926;
        void main(){
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
    `;

    const fragment = `uniform float time;
    uniform float progress;
    uniform sampler2D texture1;
    uniform vec4 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    float PI = 3.1415926;

    float mod289(float x){return x - floor(x * (1.0 / 29.0)) * 29.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 29.0)) * 29.0;}
    vec4 perm(vec4 x){return mod289(((x * 3.0) + 1.0) * x);}

    float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float lines(vec2 uv, float offset){
        return smoothstep(
            0.,0.16+ offset*0.0055,
            abs(0.15*(sin(uv.x*5.) + offset*.02 ))
        );
    }

    mat2 rotate2D(float angle){
        return mat2(
            cos(angle),sin(angle),
            sin(angle),-cos(angle)
        );
    }

    void main(){

        vec3 color1 = vec3(0.537,0.333,0.647);
        vec3 color2 = vec3(0.647,0.435,0.714);
        vec3 color3 = vec3(0.098,0.184,0.439);

        float n = noise(vPosition + time);

        vec2 baseUV = rotate2D(n)*vPosition.xy*0.5;
        float basePattern = lines(baseUV, 0.001);
        float secondPattern = lines(baseUV, 0.5);

        vec3 baseColor = mix(color1,color2,basePattern);
        vec3 secondBaseColor = mix(baseColor,color3,secondPattern);

        gl_FragColor = vec4(vec3(secondBaseColor),1.);

    }`;

    const material  = new THREE.ShaderMaterial( {
        side:THREE.DoubleSide,
        uniforms: { 
            time: { // float initialized to 0
                value:0, 
            },
            resolution:{
                value: new THREE.Vector4()
            }
        },
        //wireframe:true,
        vertexShader: vertex,
        fragmentShader: fragment
    });

    const geometry = new THREE.SphereBufferGeometry( 1.5, 32, 32 );

    const plane = new THREE.Mesh( geometry, material );
    plane.rotation.z -= 200;
    scene.add( plane );

    const height = document.querySelector('#contain-canvas').offsetHeight

    const renderer = new THREE.WebGLRenderer( );
    renderer.setSize( window.innerWidth, height );
    renderer.setAnimationLoop( render );
    document.getElementById("contain-canvas").appendChild( renderer.domElement );

    //ANIMATION
    function render(n) {
        n++;
        requestAnimationFrame( render );
        material.uniforms.time.value = (0.00025 * n);
        renderer.render( scene, camera );
    }

    //RESIZE
    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize(){

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        const height = document.querySelector('#contain-canvas').offsetHeight
        renderer.setSize( window.innerWidth, height );

    }
}

jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-section")){

        const { gsap } = require("gsap/dist/gsap");

        var tl = gsap.timeline();
        tl.to("section.hero-section div.bloc-txt",0.7, { opacity:1,ease: "power2.inOut",delay:0.5 });
        tl.to("section.hero-section div.hero-section-container__bloc",0.7, { opacity:1,y:0,ease: "power2.Out",delay:-0.75 });

        setTimeout(
            function() 
            {
                jQuery('section.hero-section video').trigger('play');
            }, 50
        );
    }
})