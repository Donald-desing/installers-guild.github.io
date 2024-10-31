document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");

  function handleScroll() {
    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        step.classList.add("in-view");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});
