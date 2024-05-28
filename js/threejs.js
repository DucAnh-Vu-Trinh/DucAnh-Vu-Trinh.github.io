import * as THREE from 'three';
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import colors from './colors.js';

const threeColors = {};

for (let className in colors) {
  threeColors[className] = new THREE.Color(colors[className]);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

// This will enable the damping (inertia) of the controls, which will provide a smoother interaction experience.
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Disable zooming
controls.enableZoom = false;

// Disable panning
controls.enablePan = false;

// Enable rotation
controls.enableRotate = true;
// Reduce rotation speed
controls.rotateSpeed = 0.6;

// Create a directional light and add it to the scene
const directionalLightTop = new THREE.DirectionalLight(0xffffff, 1);
const directionalLightBot = new THREE.DirectionalLight(0xffffff, 1);

directionalLightTop.position.set(0, 0, 18); // set the position of the light
directionalLightBot.position.set(0, 0, -18); // set the position of the light

scene.add(directionalLightTop);
scene.add(directionalLightBot);
scene.background = new THREE.Color(threeColors['bg-dark']); // set the background color of the scene 

// Create a VRMLLoader instance
const loader = new VRMLLoader();

// Load a VRML resource
loader.load(
  // URL of the VRML resource
  'asset/3D model/stm32_buck_usb.wrl',
  
  // onLoad callback
  function (object) {
    // Scale the object
    object.scale.set(1, 1, 1);

    // Set the object's position to the center of the scene
    const box = new THREE.Box3().setFromObject( object );
    const center = box.getCenter( new THREE.Vector3() );

    object.position.x += ( object.position.x - center.x );
    object.position.y += ( object.position.y - center.y );
    object.position.z += ( object.position.z - center.z );

    // Add a default material to the object
    // object.traverse(function (child) {
    //   if (child instanceof THREE.Mesh) {
    //     child.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //   }
    // });

    // Add the loaded object to the scene
    scene.add(object);
  },

  // onProgress callback
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },

  // onError callback
  function (error) {
    console.error('An error occurred while loading the VRML model:', error);
  }
);

window.addEventListener('resize', function() {
  camera.position.z = window.innerWidth * 0.0302;
});
camera.lookAt(scene.position);

function animate() {
  requestAnimationFrame(animate);

  // Update the controls in your animation loop.
  controls.update();
  renderer.render(scene, camera);
}

animate();