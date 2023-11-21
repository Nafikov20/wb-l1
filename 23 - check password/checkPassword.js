function checkPassword(password) {
    let complexity = 0;

    // Проверка длины пароля
    if (password.length >= 6) {
        complexity++;
    }

    // Проверка наличия хотя бы одной заглавной буквы
    if (/[A-Z]/.test(password)) {
        complexity++;
    }

    // Проверка наличия хотя бы одной строчной буквы
    if (/[a-z]/.test(password)) {
        complexity++;
    }

    // Проверка наличия хотя бы одной цифры
    if (/\d/.test(password)) {
        complexity++;
    }

    // Проверка наличия хотя бы одного специального символа
    if (/[^A-Za-z0-9]/.test(password)) {
        complexity++;
    }

    return complexity;
}

function analyzePassword() {
    const password = document.getElementById('password').value;
    const complexity = checkPassword(password);

    let message = 'Оценка сложности пароля: ';

    switch (complexity) {
        case 0:
            message += 'Очень слабый';
            break;
        case 1:
            message += 'Слабый';
            break;
        case 2:
            message += 'Средний';
            break;
        case 3:
            message += 'Хороший';
            break;
        case 4:
            message += 'Отличный';
            break;
        case 5:
            message += 'Превосходный';
            break;
    }

    alert(message);

    // Дополнительные рекомендации для улучшения пароля
    if (complexity <= 2) {
        alert('Рекомендации по улучшению пароля: увеличьте длину, используйте заглавные буквы, строчные буквы, цифры и специальные символы.');
    }
}
