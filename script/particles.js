document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 30 : 100;

  // Создание частиц
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(${Math.floor(Math.random() * 100 + 155)}, 
              ${Math.floor(Math.random() * 100 + 155)}, 
              ${Math.floor(Math.random() * 100 + 155)}, 
              ${Math.random() * 0.5 + 0.2})`,
    });
  }

  // Анимация частиц
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Обновление позиции
      p.x += p.speedX;
      p.y += p.speedY;

      // Отскок от границ
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      // Рисование частицы
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Линии между близкими частицами
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distance = Math.sqrt(
          Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
        );

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Реакция на движение мыши
  let mouseX = null;
  let mouseY = null;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Влияние на близкие частицы
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const distance = Math.sqrt(
        Math.pow(p.x - mouseX, 2) + Math.pow(p.y - mouseY, 2)
      );

      if (distance < 150) {
        p.speedX = (p.x - mouseX) * -0.01;
        p.speedY = (p.y - mouseY) * -0.01;
      }
    }
  });

  // Реакция на ресайз окна
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
