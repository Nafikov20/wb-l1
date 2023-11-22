const body = document.querySelector('body');
const div = document.createElement('div');
div.innerHTML = 'Click me for toggle style';
div.addEventListener('click', () => {
    div.classList.toggle('red-text');
})

body.append(div);

//25.	Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, добавляет его в DOM и устанавливает для него стиль с помощью CSS.