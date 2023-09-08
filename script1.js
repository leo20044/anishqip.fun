document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});


  // Countdown function
  function startCountdown() {
    let countdown = 15;
    const countdownDisplay = document.querySelector('.countdown');
    const revealButtonContainer = document.querySelector('.reveal-button-container');

    const countdownInterval = setInterval(() => {
      countdown--;
      countdownDisplay.textContent = countdown;

      if (countdown === 0) {
        clearInterval(countdownInterval);
        revealButtonContainer.style.display = 'block';
      }
    }, 1000);
  }

  // Start countdown when the page loads
  window.onload = startCountdown;
