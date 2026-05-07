// console.log('цикл for');
// for (let i = 0; i < 10; i++) { 
//   console.log(i);
// }

// console.log('цикл while');
// let energy = 100;
// while (energy > 0) {
//   console.log(energy);
//   energy -= 25;
// }

// console.log('функції');
// function greetUser(name, role) {
//   if (role === 'admin') {
//     console.log(`Привіт, ${name}! Ви маєте права адміністратора.`);
//   } else {
//     console.log(`Привіт, ${name}! Ласкаво просимо на сайт.`);
//   }
// }
// greetUser('Олександр', 'admin');
// greetUser('Марія', 'user');
// greetUser('Іван', 'guest');

// Знаходимо порожні блоки на сторінці, куди будемо "малювати"
let catalogElement = document.getElementById("shop-catalog");
let receiptElement = document.getElementById("receipt-container");

// 1. ФУНКЦІЯ: Шаблон нашої картки
function createProductCard(itemNumber, price) {
    // Використовуємо зворотні лапки ` `, щоб писати HTML у кілька рядків 
    // і підставляти змінні через ${}
    return `
        <div class="card">
            <h3>Товар №${itemNumber}</h3>
            <p>Ціна: <b>${price}</b> грн</p>
            <button>У кошик</button>
        </div>
    `;
}
//2. ЦИКЛ FOR: Наповнюємо вітрину
for (let i = 1; i <= 8; i++) {
    let currentPrice = i * 400; // Ціни: 400, 800, 1200...
    
    // Додаємо згенеровану HTML-картку всередину нашого блоку на сторінці
    catalogElement.innerHTML += createProductCard(i, currentPrice);
}
//3. ЦИКЛ WHILE: Симулятор покупок
let wallet = 2500; // Бюджет клієнта
let itemPrice = 400; // Клієнт купує найдешевші товари по 400 грн
let itemsBought = 0;

receiptElement.innerHTML += `<h2>🧾 Ваш чек</h2>`;
receiptElement.innerHTML += `<p>Початковий бюджет: ${wallet} грн</p>`;

// Клієнт купує, ПОКИ вистачає грошей на хоча б 1 товар
while (wallet >= itemPrice) {
    wallet -= itemPrice; // Списуємо гроші
    itemsBought++;       // Рахуємо товар
    
    receiptElement.innerHTML += `<p>✅ Куплено товар за ${itemPrice} грн. Залишок: ${wallet} грн.</p>`;
}

receiptElement.innerHTML += `<h3>Покупки завершено! Ви придбали ${itemsBought} товарів.</h3>`;