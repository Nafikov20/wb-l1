const asyncAwaitTast = async () => {
    // Создаем промис, который разрешится через 500 миллисекунд.
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 500)
    });

    // будет ждать, пока промис не выполнится, используя await
    let result = await promise;

    console.log(result);

    return result;
}

asyncAwaitTast().then((result) => {
    console.log('Результат в then', result);
});

//15.	Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.