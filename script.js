document.addEventListener("DOMContentLoaded", function () {
    const gradients = [
        "linear-gradient(to bottom right, #FF8EFC, #FBFBFB)",
        "linear-gradient(to bottom right, #90EE90, #6A0572)",
        "linear-gradient(to bottom right, #FFD700, #FFA500)"
    ];

    let currentGradientIndex = 0;

    const body = document.body;

    function setNextGradient() {
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
        body.style.background = gradients[currentGradientIndex];
    }

    // Переключение фона при клике на body
    body.addEventListener("click", setNextGradient);

    // Переключение фона при клике на кнопку
    const themeButton = document.getElementById("themeButton");
    themeButton.addEventListener("click", setNextGradient);

    // Начальный фон
    body.style.background = gradients[currentGradientIndex];
});
