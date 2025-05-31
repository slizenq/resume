document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");
  const follower = document.querySelector(".cursor-follower");

  // Проверка на тач-устройства
  if (window.matchMedia("(pointer: coarse)").matches) {
    if (cursor) cursor.style.display = "none";
    if (follower) follower.style.display = "none";
    return;
  }

  if (!cursor || !follower) return;

  // Скрываем стандартный курсор
  document.body.style.cursor = "none";

  let posX = 0,
    posY = 0;
  let followerX = 0,
    followerY = 0;

  // Плавная анимация
  function animate() {
    // Основной курсор - мгновенное следование
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    // Второй курсор - с плавным следованием
    followerX += (posX - followerX) / 8;
    followerY += (posY - followerY) / 8;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animate);
  }

  animate();

  // Обновление позиции
  document.addEventListener("mousemove", function (e) {
    posX = e.clientX;
    posY = e.clientY;
  });

  // Эффект при клике
  document.addEventListener("mousedown", function () {
    document.body.classList.add("cursor-click");
  });

  document.addEventListener("mouseup", function () {
    document.body.classList.remove("cursor-click");
  });
});
