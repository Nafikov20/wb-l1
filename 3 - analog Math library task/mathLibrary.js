const MathX = (function () {
    // 1) Вычисление N-го числа в ряду Фибоначчи
    function  fibonacci(n) {
        // Если n меньше или равно 1 (n <= 1), то возвращается само значение n. Это базовый случай для чисел 0 и 1 в ряду Фибоначчи.
        // В противном случае (если n больше 1), возвращается сумма двух предыдущих чисел в ряду Фибоначчи, вычисленных рекурсивно: fibonacci(n - 1) + fibonacci(n - 2)
        return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }
    // 2) Вычисление всех чисел в ряду Фибоначчи
    function fibonacciArr(n) {
        // Array.from для создания массива, в котором будет находиться ряд Фибонначи
        // { length: n + 1 } определил размер массива, который хочу создать
        // (_, i) => fibonacci(i), вызываю колбек, первый аргумент игнорируется, второй это индекс + 1, вызываем вункцию fibonacci
        // В результате получается массив, содержащий числа ряда Фибоначчи от 0 до n.
        return Array.from({ length: n + 1 }, (_, i) => fibonacci(i));
    }


    // Функция для проверки, является ли число простым
    function isPrime(num) {
        // Запуск цикла, i <= Math.sqrt(num) цикл будет выполняться, пока i меньше или равно квадратному корню из num
        for (let i = 2; i <= Math.sqrt(num); i++) {
            // Условие на деление если число делится нацело, оно не является простым
            if (num % i === 0) return false;
        }
        // Если цикл завершился, и не было найдено делителей, число простое
        return num > 1;
    }

    // 3) Вычисление N-го простого числа
    function nthPrime(n) {
        // Инициализация переменных
        let count = 0;         // Счетчик простых чисел
        let candidate = 1;     // Первый кандидат на простое число

        // Цикл будет выполняться, пока не будет найдено n простых чисел
        while (count < n) {
            // Проверка, является ли текущий кандидат простым числом
            if (isPrime(++candidate)) {
                // Если да, увеличиваем счетчик простых чисел
                count++;
            }
        }

        // candidate теперь содержит n-е простое число
        return candidate;
    }


    // 4) Вычисление всех простыx чисел до N
    function primesUpToN(n) {
        // Array.from для создания массива
        // { length: n + 1 } определил размер массива, который хочу создать
        // (_, i) => i).filter(isPrime) метод filter() принимает функцию обратного вызова (isPrime), которая возвращает true или false для каждого элемента массива. В итоге, filter создает новый массив, содержащий только те элементы, для которых функция isPrime возвращает true.
        // В результате получается массив, содержащий все простые чисел до N
        return Array.from({ length: n + 1 }, (_, i) => i).filter(isPrime);
    }

    return {
        fibonacci: fibonacci,
        fibonacciArr: fibonacciArr,
        nthPrime: nthPrime,
        primesUpToN: primesUpToN,
    }
})();


console.log(MathX.fibonacci(6));
console.log(MathX.fibonacciArr(6))
console.log(MathX.nthPrime(3))
console.log(MathX.primesUpToN(3))


// 3.	Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
//     вычисление N-го числа в ряду Фибоначчи Ф вычисление всех чисел в ряду Фибоначчи до числа N вычисление N-го просто числа вычисление всех простых чисел до числа N
//     Аналог библиотеки Math:
// 1) Вычисление N-го числа в ряду Фибоначчи
// 2) Вычисление всех чисел в ряду Фибоначчи
// 3) Вычисление N-го простого числа
// 4) Вычисление всех простыx чисел до N
//
// Будет плюсом, если задумаетесь и об оптимизации.
