// 1. Знаходимо елементи і зберігаємо їх у змінні
let title = document.querySelector('#message');
let button = document.querySelector('#magic-btn');
let box = document.querySelector('.box');

// 2. Створюємо функцію для реакції на клік
function doMagic() {
// Змінюємо текст заголовка
  title.textContent = 'Магія відбулася!';
  // Змінюємо стилі заголовка
  title.style.color = '#fff';
  // Змінюємо стилі контейнера (використовуємо camelCase!)
  box.style.backgroundColor = 'purple';
  box.style.borderRadius = '20px';
  box.style.padding = '30px';
  box.style.width = '800px';
  box.style.margin = '20px auto';
  // Ховаємо саму кнопку після натискання
  button.style.display = 'none';
}

// 3. Додаємо обробник події на кнопку
button.onclick = doMagic;