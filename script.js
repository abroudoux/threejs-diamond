import * as THREE from "three";
import diamond from "./public/diamond.jpg";

window.canvas = document.getElementById("canvas");
window.canvas.width = window.innerWidth;
window.canvas.height = window.innerHeight;
window.iw = window.innerWidth;
window.ih = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, iw / ih);
const renderer = new THREE.WebGLRenderer({ canvas });
const geometry = new THREE.BoxGeometry(1, 1, 1);
const texture = new THREE.TextureLoader().load(diamond);
const material = new THREE.MeshPhongMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);
const light = new THREE.PointLight(0xeeeeee);

scene.add(mesh);
scene.add(light);

camera.position.set(0, 0, 2);
light.position.set(0, 0, 2);

function loop() {
  requestAnimationFrame(loop);
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.005;
  renderer.render(scene, camera);
}

loop();
