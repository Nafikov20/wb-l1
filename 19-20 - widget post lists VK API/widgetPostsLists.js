const API_KEY = ''
const groupID = '222566997';
const max_posts = 100;
const posts_count = 5;
let offset = 0;
let cache = [];
// Флаг выполняется ли в данный момент запрос
let fetching = false;

const widgetContainer = document.querySelector('.widget__container');
const postsContainer = document.querySelector('.posts__container');

// Обработчик ответа от VK API.
function handleResponse(result) {

    fetching = false;

    // Если есть ошибка в ответе, выводим ее в консоль
    if (result.error) {
        console.error(result.error.error_msg);
        return;
    }

    const newPosts = result.response.items;// Извлекаем новые посты из ответа API

    cache = cache.concat(newPosts);// Добавляем новые посты в кэш.
    offset += posts_count;

    // Если количество постов в кэше превышает максимальное, обрезаем кэш
    if (cache.length > max_posts) {
        cache = cache.slice(-max_posts);
    }

    // Отображаем новые посты на странице.
    displayPosts(newPosts);

    // Сохраняем кэш и смещение в локальное хранилище браузера
    localStorage.setItem("cachedPosts", JSON.stringify(cache));
    localStorage.setItem("cachedOffset", offset);
}

// Функция для выполнения запроса к VK API.
function fetchPosts(offset = 0, count = 10) {

    const script = document.createElement('script');
    // Динамическая загрузки данных с VK API
    script.src = `https://api.vk.com/method/wall.get?owner_id=-${groupID}&count=${count}&offset=${offset}&access_token=${API_KEY}&v=5.131&callback=handleResponse`;
    document.head.append(script);// Добавляем созданный скрипт в заголовок документа, тем самым инициируя запрос
    fetching = true;// Устанавливаем флаг, что запрос в процессе выполнения
}

function displayPosts(posts) {
    // Функция для отображения постов на странице

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postText = document.createElement('p');
        postText.textContent = post.text;
        postElement.appendChild(postText);

        // Если у поста есть фото, создаем элемент img и добавляем его к посту
        if (post.attachments && post.attachments[0] && post.attachments[0].type === 'photo') {
            const photoUrl = post.attachments[0].photo.sizes[post.attachments[0].photo.sizes.length - 1].url;
            const postImage = document.createElement('img');
            postImage.src = photoUrl;
            postElement.appendChild(postImage);
        }

        postsContainer.appendChild(postElement);
        // Добавляем пост на страницу
    });
}
// Функция для загрузки постов из кэша
function loadCachedPosts() {


    const cachedData = localStorage.getItem('cachedPosts');
    const cachedOffset = +localStorage.getItem('cachedOffset');

    if (cachedData && cachedOffset !== offset) {// Если есть кэш и смещение в нем отличается от текущего, загружаем посты из кэша
        offset = cachedOffset;
        cache = JSON.parse(cachedData);
        displayPosts(cache);
        calculateLocalStorageSize();
        return;
    }
}
// 20 Задача
function calculateLocalStorageSize() {
    const totalBytes = getLocalStorageSize();
    console.log(`Объем занятой памяти: ${totalBytes} байт`);

}

// Функция для подсчета размера данных в localStorage
function getLocalStorageSize() {
    let totalBytes = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        // каждый символ весит 2 байта
        totalBytes += (key.length + value.length) * 2;
    }

    return totalBytes;
}

// При вызове функции updateWidget добавь вызов calculateLocalStorageSize
function updateWidget() {
    postsContainer.innerHTML = ''; // Очищаем контейнер с постами
    loadCachedPosts(); // Загружаем посты из кэша
    fetchPosts(cache.length); // Выполняем запрос новых постов
    calculateLocalStorageSize(); // Подсчитываем размер localStorage
}
// Функция для обновления виджета


widgetContainer.addEventListener('scroll',  () => {
    // Слушатель события скролла контейнера виджета

    // Если достигнут конец скролла и не выполняется другой запрос, запускаем обновление виджета
    if (widgetContainer.scrollHeight - widgetContainer.scrollTop === widgetContainer.clientHeight && !fetching) {
        // Запрос новых постов
        fetchPosts(offset);
    }
});

// Инициализация виджета при загрузке страницы
updateWidget();
