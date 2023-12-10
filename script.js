document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('infoBox');
    infoBox.style.display = 'block';

    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const size = Math.random() * 3 + 1; // Размер снежинки от 1 до 4
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Длительность анимации от 2 до 5 секунд

    document.body.appendChild(snowflake);
}
