
document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('infoBox');
    infoBox.style.display = 'block';
// script.js
document.addEventListener('DOMContentLoaded', init);

    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

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
