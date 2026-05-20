// Знаходимо необхідні елементи в DOM
const toggleBtn = document.getElementById('toggle-ux-btn');
const bodyElement = document.body;
const statusText = document.getElementById('status-text');
// Додаємо слухач подій на кнопку
toggleBtn.addEventListener('click', () => {
// Перемикаємо клас .zen-mode на тегу body
bodyElement.classList.toggle('zen-mode');
// Перевіряємо, чи увімкнено режим UI/UX магії
if (bodyElement.classList.contains('zen-mode')) {
statusText.textContent = '«Дзен» (UI/UX Оптимізовано)';
statusText.style.color = '#10b981';
toggleBtn.textContent = 'Повернути «Хаос»';
toggleBtn.style.backgroundColor = '#ef4444';
} else {
statusText.textContent = '«Хаос» (Без UI/UX)';
statusText.style.color = '';
toggleBtn.textContent = 'Увімкнути «Дзен» (Магію UI/UX)';
toggleBtn.style.backgroundColor = '#10b981';
}
});