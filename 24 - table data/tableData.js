const url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
const pageSize = 50;
let currentPage = 1;
let data = []; // Здесь будут храниться полученные данные
let sortConfig = { key: null, order: 'asc' }; // Параметры сортировки

// Функция для загрузки данных
const fetchData = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных!');
        }

        // Получаем данные в формате JSON
        const jsonData = await response.json();

        // Сохраняем данные в глобальной переменной 'data'
        data = jsonData;

        // Вызываем функции для отрисовки таблицы и пагинации
        renderTable();
        renderPagination();
    } catch (error) {
        console.error(error);
    }
};

// Функция для отрисовки таблицы
const renderTable = () => {
    const table = document.querySelector('#dataTable');
    table.innerHTML = ''; // Очистить предыдущее содержимое

    // Реализуйте логику для отрисовки строк таблицы на основе текущей страницы и pageSize
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = data.slice(startIndex, endIndex);

    // Создаем заголовок таблицы
    const headerRow = document.createElement('tr');
    Object.keys(pageData[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        th.addEventListener('click', () => sortData(key));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Создаем строки таблицы
    pageData.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });
};

// Функция для отрисовки пагинации
const renderPagination = () => {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(data.length / pageSize);

    Array.from({ length: totalPages }, (_, i) => i + 1).forEach(page => {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.textContent = page;
        li.addEventListener('click', () => changePage(page));
        pagination.appendChild(li);
    });
};

// Функция для сортировки данных
const sortData = (key) => {
    if (sortConfig.key === key) {
        // Если текущая колонка совпадает с той, по которой уже идет сортировка,
        // меняем порядок сортировки
        sortConfig.order = sortConfig.order === 'asc' ? 'desc' : 'asc';
    } else {
        // Если сортировка идет по новой колонке, устанавливаем параметры сортировки
        sortConfig.key = key;
        sortConfig.order = 'asc';
    }

    // Применяем сортировку к данным
    data.sort((a, b) => {
        const comparison = a[key].localeCompare(b[key]);
        return sortConfig.order === 'asc' ? comparison : -comparison;
    });

    renderTable();
};

// Функция для смены текущей страницы
const changePage = (page) => {
    currentPage = page;
    renderTable();
};

// Загружаем данные и отрисовываем таблицу при загрузке страницы
window.onload = fetchData;
