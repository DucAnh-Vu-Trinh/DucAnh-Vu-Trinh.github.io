import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create an ambient light and add it to the scene
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

// Create a point light and add it to the scene
const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Create a GLTFLoader instance
const loader = new OBJLoader();

// Load an OBJ resource
loader.load(
    // URL of the OBJ resource
    'asset/3D model/STM32_BUCK_USB-stm32_buck_usb 1.obj',
    
    // onLoad callback
    function (object) {
        // Scale the object
        object.scale.set(2, 2, 2);
        // Set the object's position to the center of the scene
        const box = new THREE.Box3().setFromObject( object );
        const center = box.getCenter( new THREE.Vector3() );

        object.position.x += ( object.position.x - center.x );
        object.position.y += ( object.position.y - center.y );
        object.position.z += ( object.position.z - center.z );
        // Add a default material to the object
         object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        }
        });
        // Add the loaded object to the scene
        scene.add(object);
    },
  
    // onProgress callback
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
  
    // onError callback
    function (error) {
      console.error('An error occurred while loading the OBJ model:', error);
    }
  );
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  
  animate();