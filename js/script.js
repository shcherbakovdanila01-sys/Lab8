// Задача 1: Калькулятор любви
function runTask3() {
    let firstName = prompt("Введите имя первого человека:");
    let secondName = prompt("Введите имя второго человека:");
    if (!firstName || !secondName) {
        alert("Пожалуйста, введите оба имени!");
        return;
    }
    // Генерируем случайный процент от 0 до 100 (можно сделать детерминированным на основе имен, но для простоты - случайный)
    let result = Math.floor(Math.random() * 101);
    alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
}

// Задача 2: BMI Калькулятор
function runTask2() {
    function getBMICategory(bmi) {
        if (bmi <= 18.5) return "Недостаточный вес";
        else if (bmi <= 25) return "Нормально";
        else if (bmi <= 30) return "У вас излишек веса";
        else return "Ожирение";
    }
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }
    let weight = prompt("Введите ваш вес в кг:");
    let height = prompt("Введите ваш рост в метрах:");
    weight = parseFloat(weight);
    height = parseFloat(height);
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Пожалуйста, введите корректные положительные числа!");
    } else {
        let bmi = calculateBMI(weight, height);
        let category = getBMICategory(bmi);
        alert(`Ваш BMI: ${bmi.toFixed(2)}. Категория: ${category}`);
    }
}

// Задача 3: Является ли год високосным?
function runTask4() {
    let year = prompt("Введите год:");
    year = parseInt(year);
    if (isNaN(year) || year <= 0) {
        alert("Пожалуйста, введите корректный год!");
        return;
    }
    let isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    let message = isLeap ? "Високосный год" : "Не является високосным";
    alert(message);
}



// Задача 4: Кто оплачивает ужин?
function runTask5() {
    // Массив имен (можно заменить на prompt для ввода списка, но для примера - заданный)
    let names = ['Дима', 'Катя', 'Петр', 'Лена'];
    if (names.length === 0) {
        alert("Массив имен пуст!");
        return;
    }
    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedName = names[randomIndex];
    alert(`Оплачивать будет ${selectedName}`);
}

// При желании, скрывать селектор после выбора: добавьте в каждую функцию
// document.getElementById('task-selector').style.display = 'none';
