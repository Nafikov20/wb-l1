
function convertingJsonString(data) {
    // Проверка на примитивные типы данных
    const checkData = typeof data !== 'object' || data === null
    if (checkData) {
        // Если это строка, заключаем в кавычки
        if (typeof data === 'string') {
            return `"${data}"`;
        } else {
            // Преобразуем прочие примитивы в строки
            return String(data);
        }
    }

    // Обработка массивов
    if (Array.isArray(data)) {
        // Рекурсивно применяем customStringify для каждого элемента массива и объединяем результат в строку
        const arrayString = data.map(element => convertingJsonString(element)).join(',');
        return `[${arrayString}]`;
    }

    // Обработка объектов
    const objectString = Object.keys(data)
        .map(key => `"${key}":${convertingJsonString(data[key])}`)
        .join(',');

    return `{${objectString}}`;
}

const sampleObj = {
    name: 'Sid',
    age: 29,
    engineer: true,
    expertise: ['html', 'css', 'react'],
    address: {
        city: 'New york',
        state: 'NY'
    }
};


console.log(convertingJsonString(sampleObj));
// 9.	Реализовать функцию конвертации JSON в строку