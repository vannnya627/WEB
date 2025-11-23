// Слухаємо подію "натискання клавіші" (keydown)
document.addEventListener('keydown', function(event) {
    // 1. Отримуємо код клавіші (наприклад, "KeyA" або "Enter")
    const code = event.code;

    // 2. Шукаємо в HTML елемент, у якого data-code співпадає з натиснутою клавішею
    // Ми використовуємо селектор атрибутів: [data-code="..."]
    const keyElement = document.querySelector(`.key[data-code="${code}"]`);

    // 3. Якщо такий елемент знайдено на екрані - додаємо йому клас "active"
    if (keyElement) {
        keyElement.classList.add('active');

        // (Опціонально) Запобігаємо стандартній дії деяких клавіш (наприклад, прокрутка сторінки стрілками)
        // Але залишимо Tab і F5 працювати як зазвичай
        if(code !== "F5" && code !== "F12" && code !== "Tab") {
            event.preventDefault();
        }
    }
});

// Слухаємо подію "відпускання клавіші" (keyup)
document.addEventListener('keyup', function(event) {
    const code = event.code;
    const keyElement = document.querySelector(`.key[data-code="${code}"]`);

    // Коли відпускаємо кнопку - прибираємо клас "active"
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});