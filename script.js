
document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('infoBox');
    infoBox.style.display = 'block';
// script.js
document.addEventListener('DOMContentLoaded', init);

    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
});
function init() {
  const container = document.getElementById('scene-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
  const geometry = new THREE.ConeGeometry(2, 4, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const tree = new THREE.Mesh(geometry, material);
  scene.add(tree);

    const size = Math.random() * 3 + 1; // Размер снежинки от 1 до 4
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Длительность анимации от 2 до 5 секунд
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

    document.body.appendChild(snowflake);
