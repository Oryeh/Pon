// script.js
document.addEventListener('DOMContentLoaded', init);

function init() {
  const container = document.getElementById('scene-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.ConeGeometry(2, 4, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const tree = new THREE.Mesh(geometry, material);
  scene.add(tree);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = - (event.clientY / window.innerHeight) * 2 + 1;

    tree.rotation.x = mouseY * 2;
    tree.rotation.y = mouseX * 2;
  });

  function animate() {
    requestAnimationFrame(animate);

    tree.rotation.x += 0.005;
    tree.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  animate();
}
