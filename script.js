document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('infoBox');
    infoBox.style.display = 'block';
    infoBox.style.animation = 'fadeIn 1s ease-out';

    for (let i = 0; i < 50; i++) {
        createStar();
    }

    // Добавляем таймер, чтобы текст не исчезал через несколько секунд
    setTimeout(function() {
        infoBox.style.animation = 'none'; // Отключаем анимацию после появления
    }, 1000); // 1000 миллисекунд (1 секунда)
});

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.background = getRandomColor();
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(star);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
