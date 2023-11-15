// Создание массива arrayFunction, в котором содержатся ссылки на функции
const arrayFunction = [firstFun, secondFun, thirdFun, fourthFun];
// Определение функции runFunctionsRecursively с параметром index, которая будет вызывать функции из массива рекурсивно.
function runFunctionsRecursively(index) {
    // Условие проверки: если текущий индекс меньше длины массива arrayFunction, то выполняется следующий блок кода.
    if (index < arrayFunction.length) {
        // Извлечение функции из массива по текущему индексу.
        const currentFunction = arrayFunction[index];
        // Вызов текущей функции и передача ей колбэк-функции, которая будет вызывать runFunctionsRecursively с увеличенным на 1 индексом после завершения текущей функции.
        currentFunction(() => {
            runFunctionsRecursively(index + 1);
        });
    }
}
// Запуск выполнения функций из массива, начиная с индекса 0.
runFunctionsRecursively(0);

function firstFun(callback) {
    console.log('firstFun');
    callback();
}

function secondFun(callback) {
    console.log('secondFun');
    callback();
}

function thirdFun(callback) {
    console.log('thirdFun');
    callback();
}

function fourthFun(callback) {
    console.log('fourthFun');
    callback();
}
//
// 7.	Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер.
//      Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

//     Другими словами, нужно выполнить следующие шаги:
// 1.	Вызвать первую функцию из массива.
// 2.	После завершения работы первой функции вызвать вторую функцию.
// 3.	После завершения работы второй функции вызвать третью функцию.
// 4.	И так далее, пока все функции в массиве не будут вызваны по порядку.
