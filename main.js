import * as THREE from 'three';
const scene=new  THREE.Scene();
const canvas=document.querySelector("canvas.webgl");
//const geometry=new THREE.BoxGeometry();
//const material=new THREE.MeshBasicMaterial();
//scene.add(geometry,material);
const attributes={
    width: window.innerWidth,
    height:window.innerHeight,
};

window.addEventListener("resize",()=>{
    width= window.innerWidth;
    height=window.innerHeight;
    camera.aspect=attributes.width/attributes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(attributes.width,attributes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));


});

const camera=new THREE.PerspectiveCamera(75,attributes.width/attributes.height,0.1,1000);
camera.position.z=3;
scene.add(camera);
const renderer=new THREE.WebGLRenderer(
    {
        canvas:canvas,
    }
);
renderer.setSize(attributes.width,attributes.height);
renderer.render(scene,camera);
