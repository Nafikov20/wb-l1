const form = document.querySelector('#form');
const dialog = document.querySelector('#dialog');
const btnClose = document.querySelector('#close');
let p = document.createElement("p");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    p.textContent = `${firstName} ${lastName}`
    dialog.showModal()
    dialog.append(p)
})

btnClose.addEventListener('click', () => {
    dialog.close()
})


//29.	Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.