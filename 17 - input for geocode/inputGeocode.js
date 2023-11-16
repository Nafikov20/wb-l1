const api_key= '89e6e41b-620d-4461-a441-7892bf85566d'

// Функция debounceAsync для управления частотой вызова асинхронной функции
function debounceAsync(func, delay) {
    // Переменная для хранения идентификатора таймера
    let timerID = null;

    // Возвращаем асинхронную функцию, которая будет оберткой для задержки вызова переданной функции
    return async (...args) => {
        // Удаляем предыдущий таймаут
        clearTimeout(timerID);

        // Возвращаем Promise, который разрешится после завершения таймаута
        return new Promise(resolve => {
            // Создаем новый таймаут, по прошествии которого функция будет вызвана
            // с последними переданными ей аргументами
            timerID = setTimeout(async () => {
                // Вызываем переданную функцию и ожидаем её завершения
                const result = await func(...args);
                // Разрешаем Promise с результатом выполнения функции
                resolve(result);
            }, delay);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы input и select по их идентификаторам
    const addressInput = document.querySelector('#input');
    const selectElem = document.querySelector('#select');

    // Создаем функцию геокодирования с использованием Yandex Geocoding API
    const geocode = async (query) => {
        // Проверка наличия запроса
        if (!query) {
            return [];
        }
        try {
            // Отправка запроса к Yandex Geocoding API и получение ответа
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${api_key}&geocode=${query}&format=json`);
            const data = await response.json();
            // Извлечение результатов геокодирования из ответа
            const result = data.response.GeoObjectCollection.featureMember || [];

            // Обновляем элемент select новыми опциями
            updateSelectOptions(result);

            return result;
        } catch (error) {
            // Обработка ошибок и вывод в консоль
            console.error(error);
            return [];
        }
    };

    // Создаем функцию обновления опций в элементе select
    const updateSelectOptions = (options) => {
        // Очищаем существующие опции в элементе select
        selectElem.innerHTML = '';

        // Если нет результатов геокодирования, добавляем опцию "Ничего не найдено"
        if (options.length === 0) {
            const optionElem = document.createElement('option');
            optionElem.value = 'none';
            optionElem.textContent = 'Ничего не найдено';
            selectElem.appendChild(optionElem);
        } else {
            // Добавляем новые опции на основе результатов геокодирования
            options.forEach((option) => {
                const optionElem = document.createElement('option');
                // Значение опции устанавливаем в координаты (Point.pos)
                optionElem.value = option.GeoObject.Point.pos;
                // Текст опции устанавливаем в адрес (GeocoderMetaData.text)
                optionElem.textContent = option.GeoObject.metaDataProperty.GeocoderMetaData.text;
                // Добавляем опцию в элемент select
                selectElem.appendChild(optionElem);
            });
        }
    };

    // Создаем функцию debounceAsync с задержкой 300 миллисекунд
    const debouncedGeocode = debounceAsync(async (query) => {
        // Вызываем функцию геокодирования с переданным запросом
        await geocode(query);
    }, 300);

    // Устанавливаем слушатель события ввода для поля ввода адреса
    addressInput.addEventListener('input', (e) => {
        // Получаем значение введенного адреса
        const query = e.target.value;
        // Вызываем функцию debounceAsync для геокодирования
        debouncedGeocode(query);
    });

    // Обработка изменений в элементе select
    selectElem.addEventListener('change', (e) => {
        // Получаем выбранную опцию
        const selectedOption = selectElem.options[selectElem.selectedIndex];
        // Получаем текст выбранной опции (адрес) и присваиваем его полю ввода адреса
        const selectedText = selectedOption.textContent;
        addressInput.value = selectedText;
    });
});




//17.	Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес.
//      Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.
//      Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.