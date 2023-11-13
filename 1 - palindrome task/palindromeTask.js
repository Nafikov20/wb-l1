function palindromeTask(text) {
    // старый текст первожу в нижний регистр методом toLowerCase(), методом split('') делаю массив для того, чтобы методом filter() убрать пробелы, и потом объяденяю в один целый текс методом join()
    const oldArrText= text.toLowerCase().split('').filter((t) => t !== ' ').join('');
    // тоже самое делаю в этой строке, но еще разворачиваю массив методм reverse()
    const newArrText = text.toLowerCase().split('').filter((t) => t !== ' ').reverse().join('');
    // тут я сравниваю два полученных результата и вывожу в консоль результат
    const checkPalindrome = oldArrText === newArrText ? 'Текст является палиндромом' : 'Текст не является палиндромом';
    return console.log(checkPalindrome)
}

palindromeTask('аргенТина манит негра');
palindromeTask('А луна канула');
palindromeTask('А роза упала на лапу Азора');

// 1.	Задача о палиндроме:. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»)