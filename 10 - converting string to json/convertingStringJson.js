function convertingStringJson(data) {
    switch (typeof data) {
        // Если значение является строкой, обертываем его в двойные кавычки
        case 'string':
            return `"${data}"`;
        // Если значение является числом, логическим значением, undefined, преобразуем его в строку
        case 'number':
        case 'boolean':
        case 'undefined':
        // Если значение является объектом, проверяем, является ли оно массивом
        case 'object':
            if (Array.isArray(data)) {
                // Если это массив, рекурсивно обрабатываем каждый элемент и объединяем их в строку
                const elements = data.map(element => convertingStringJson(element));
                return `[${elements.join(',')}]`;
                // Если объект равен null, возвращаем строку 'null'
            } else if (data === null) {
                return 'null';
            } else {
                // Если это обычный объект, рекурсивно обрабатываем каждое свойство и объединяем их в строку
                const properties = Object.keys(data).map(key => `"${key}":${convertingStringJson(data[key])}`);
                return `{${properties.join(',')}}`;
            }
        // Если тип не является одним из ожидаемых, выбрасываем исключение
        default:
            throw new Error(`Неподдерживаемый тип JSON: ${typeof data}`);
    }
}
// Пример использования
const mockData = {
    name: 'John',
    age: 30,
    isStudent: true,
    hobbies: ['reading', 'playing guitar'],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};
const jsonString = convertingStringJson(mockData);
console.log(jsonString);

//10.	Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.