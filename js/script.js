// 1. Знаходимо елементи модального вікна
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal-close");

// 2. Знаходимо всі зображення в галереї
// Використовуємо селектор ".card img", щоб знайти всі теги <img> всередині карток
const previewImages = document.querySelectorAll(".card img");

// 3. Навішуємо подію кліку на кожну знайдену картинку
previewImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "flex"; // Показуємо темний фон і вікно
        modalImg.src = this.src;      // Передаємо шлях клікнутої картинки у модальне вікно
    });
});

// 4. Функція закриття по кліку на "хрестик"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 5. Функція закриття по кліку на темний фон (поза картинкою)
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// --- ЛОГІКА КНОПКИ "ВГОРУ" ---
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Показуємо кнопку, якщо користувач прокрутив сторінку вниз на 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// При кліку плавно повертаємося нагору
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Забезпечує плавну прокрутку
    });
});