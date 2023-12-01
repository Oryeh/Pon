document.addEventListener("DOMContentLoaded", function () {
    const gradients = [
        "linear-gradient(to bottom right, #FF8EFC, #FBFBFB)",
        "linear-gradient(to bottom right, #90EE90, #6A0572)",
        "linear-gradient(to bottom right, #FFD700, #FFA500)"
    ];

    let currentGradientIndex = 0;

    const infoBox = document.querySelector(".info-box");

    function setNextGradient() {
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
        document.body.style.background = gradients[currentGradientIndex];
    }

    // Переключение фона при клике на .info-box
    infoBox.addEventListener("click", setNextGradient);

    // Начальный фон
    document.body.style.background = gradients[currentGradientIndex];
});
