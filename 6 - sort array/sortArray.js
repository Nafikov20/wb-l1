function sortedArray(arr) {
    // Сортировка массива
    return arr.sort((a, b) => {
        // Условие, если нет одинаковых возрастов, сортировка идет только по дате
        if (a.age !== b.age) return a.age - b.age
        //  Если есть совпадения по дате, сортировка продалжается по имени в алфавитном порядке
        return a.name > b.name ? 1 : -1
    });
}


const arrayOfObjects = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Eva', age: 28 },
    { name: 'Oleg', age: 33 },
    { name: 'Charlie', age: 33 },
    { name: 'Grace', age: 26 },
    { name: 'David', age: 31 },
    { name: 'Michael', age: 33 },
    { name: 'Sophie', age: 29 },
    { name: 'Olivia', age: 27 }
];

console.log(sortedArray(arrayOfObjects));


//6.	Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }.
//  Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.