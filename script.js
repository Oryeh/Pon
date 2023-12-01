document.addEventListener("DOMContentLoaded", function () {
    const gradients = [
        "linear-gradient(to bottom right, #FF8EFC, #FBFBFB)",
        "linear-gradient(to bottom right, #90EE90, #6A0572)",
        "linear-gradient(to bottom right, #FFD700, #FFA500)"
    ];

    let currentGradientIndex = 0;

    const infoBox = document.querySelector(".info-box");
    const body = document.body;

    function setNextGradient() {
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
        body.style.background = gradients[currentGradientIndex];
    }

    // Переключение фона при клике на body (кроме .info-box)
    body.addEventListener("click", function (event) {
        if (!infoBox.contains(event.target)) {
            setNextGradient();
        }
    });

    // Начальный фон
    body.style.background = gradients[currentGradientIndex];
});
