document.addEventListener("DOMContentLoaded", function () { 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".section, .project-card").forEach((section) => {
    observer.observe(section);
  });
 
  const bubblesContainer = document.querySelector(".bg-bubbles");
  if (bubblesContainer) {
    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("li");
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.width = `${20 + Math.random() * 30}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDelay = `${Math.random() * 10}s`;
      bubble.style.animationDuration = `${15 + Math.random() * 20}s`;
      bubblesContainer.appendChild(bubble);
    }
  }
});
