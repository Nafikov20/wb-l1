const div = document.querySelector('div');
div.addEventListener('click', () => {
    console.log(123)
    div.classList.toggle('active-animation');
})


//27.	Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.