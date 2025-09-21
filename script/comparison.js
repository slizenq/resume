document.addEventListener("DOMContentLoaded", function () {
  const sliderHandle = document.querySelector(".slider-handle");
  const styleB = document.querySelector(".style-b");
  let isDragging = false;

  sliderHandle.addEventListener("mousedown", function (e) {
    isDragging = true;
    e.preventDefault();
    document.body.style.cursor = "ew-resize";
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    const container = document.querySelector(".comparison-container");
    const containerRect = container.getBoundingClientRect();
    let pos = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    pos = Math.max(5, Math.min(pos, 95));

    sliderHandle.style.left = pos + "%";
    styleB.style.clipPath = `inset(0 0 0 ${pos}%)`;
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.cursor = "";
  });

  sliderHandle.addEventListener("touchstart", function (e) {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener("touchmove", function (e) {
    if (!isDragging || !e.touches.length) return;

    const container = document.querySelector(".comparison-container");
    const containerRect = container.getBoundingClientRect();
    const touch = e.touches[0];
    let pos =
      ((touch.clientX - containerRect.left) / containerRect.width) * 100;

    pos = Math.max(5, Math.min(pos, 95));

    sliderHandle.style.left = pos + "%";
    styleB.style.clipPath = `inset(0 0 0 ${pos}%)`;
  });

  document.addEventListener("touchend", function () {
    isDragging = false;
  });
});
