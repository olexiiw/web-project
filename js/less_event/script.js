const box = document.getElementById('interactive-box');

// Реакція на наведення миші
box.addEventListener('mouseenter', function() {
    box.style.backgroundColor = 'lightgreen';
});
// Реакція на відведення миші
box.addEventListener('mouseleave', function() {
    box.style.backgroundColor = 'lightblue';
});
// Реакція на клік
box.addEventListener('click', function() {
    box.textContent = 'Ого, ти клікнув!';
    box.style.borderRadius = '50%'; // Перетворюємо на коло
});

const form = document.getElementById('myForm');
const input = document.getElementById('username');
const message = document.getElementById('greetingMessage');

form.addEventListener('submit', function(event) {
    // Зупиняємо стандартну поведінку (перезавантаження сторінки)
    event.preventDefault(); 
    // Беремо значення, яке ввів користувач
    const userName = input.value;
    // Виводимо повідомлення
    message.textContent = `Привіт, ${userName}! Твою форму успішно оброблено.`;
    // Очищаємо поле вводу
    input.value = '';
});

const topBtn = document.getElementById('scrollTopBtn');
// Слухаємо подію прокрутки всього вікна браузера
window.addEventListener('scroll', function() {
    // Якщо прокрутили вниз більше ніж на 300 пікселів
    if (window.scrollY > 300) {
        topBtn.classList.add('show'); // Показуємо кнопку
    } else {
        topBtn.classList.remove('show'); // Ховаємо кнопку
    }
});
// Слухаємо клік по самій кнопці
topBtn.addEventListener('click', function() {
    // Плавно скролимо на координату (0, 0)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
