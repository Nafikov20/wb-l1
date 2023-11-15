const objBook = {
    name: 'Овод',
    author: 'Этель Лилиан Войнич',
    year: 1897,

    // Объявляем методы для доступа к свойствам
    getName() {
        return this.name
    },
    getAuthor() {
        return this.author
    },
    getYear() {
        return this.year
    },
    changeName(data) {
       return this.name = data
    },
    changeAuthor(data) {
        return this.author = data
    },
    changeYear(data) {
        return this.year = data
    }
}
// Создаем новую книгу
const test = Object.create(objBook);
test.changeName("Там, где раки поют");
test.changeAuthor("Делия Оуэнс");
test.changeYear(2018);

// Проверяем значения
console.log(test.getName());    // Вывод: Там, где раки поют
console.log(test.getAuthor());  // Вывод: Делия Оуэнс
console.log(test.getYear());    // Вывод: 2018




//12.	Задача на работу с объектами: создайте объект, представляющий собой книгу.
//      Объект должен иметь свойства, такие как: название книги, автор и год издания.
//      Напишите методы для получения и изменения значений свойств книги.