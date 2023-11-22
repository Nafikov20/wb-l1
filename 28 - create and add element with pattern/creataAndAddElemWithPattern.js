const body = document.querySelector('body');
const template = document.querySelector('#template');

// Клонируем содержимое тега <template>
const cloneTemplate = template.content.cloneNode(true)
setTimeout(() => {body.append(cloneTemplate)}, 2000);


//28.	Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.