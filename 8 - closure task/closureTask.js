// Задаем массив функций
const arrayFunction = [firstclosureTask, secondclosureTask, thirdclosureTask, fourthclosureTask];

// Определяем функцию closureTask, принимающую массив функций
function closureTask (arrFun) {
    // Внутри closureTask определяем функцию newFun
    function newFun() {
        // Создаем пустой массив для хранения результатов
        let result = []
        // Итерируем по каждой функции в массиве arrFun
        for (let i = 0; i < arrFun.length; i++) {
            // Вызываем текущую функцию и добавляем результат в массив result
            result.push(arrFun[i]())
        }
        // Возвращаем массив результатов
        return result
    }
    // Возвращаем функцию newFun из closureTask
    return newFun
}
// Создаем новую функцию resultFunction, используя closureTask с массивом arrayFunction
const resultFunction = closureTask(arrayFunction);
// Вызываем resultFunction, чтобы получить массив результатов
const resultArray = resultFunction();

console.log(resultArray);

function firstclosureTask() {
    return 'firstclosureTask';
}

function secondclosureTask() {
    return 'secondclosureTask';
}

function thirdclosureTask() {
    return 'thirdclosureTask';
}

function fourthclosureTask() {
    return 'fourthclosureTask';
}

// 8.	Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию,
//      которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.cd