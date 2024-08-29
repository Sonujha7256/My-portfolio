document.getElementById("menu").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

// Close navbar when a navigation item is clicked
document.querySelectorAll(".navbar ul li a").forEach(function (navItem) {
  navItem.addEventListener("click", function () {
    document.querySelector(".navbar").classList.remove("show");
  });
});

function startCounterAnimation(targetId, endValue) {
  let current = 0;
  const target = document.getElementById(targetId);
  const intervalId = setInterval(() => {
    current++;
    target.textContent = current + "+";
    if (current === endValue) {
      clearInterval(intervalId);
    }
  }, 50);
}

// Start counter animations when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation("counter-up-1", 1);
  startCounterAnimation("counter-up-2", 10);
  startCounterAnimation("counter-up-3", 3);
  startCounterAnimation("counter-up-4", 1);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the copyright text with the current year
  document.querySelector(".copyright").innerHTML =
    "&copy; " +
    currentYear +
    ' <a href="#" class="copyright-link">Sonu Kumar</a>. All Rights Reserved';
});
