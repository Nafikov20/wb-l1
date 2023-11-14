// Класс для удобного создания узлов связного списка
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function JSONLinkedList(json) {
    // Преобразую в объект
    const parsedJson = JSON.parse(json);
    // Проверяю, что это массив и что длинна больше нуля, иначе останавливаю функцию
    if (!Array.isArray(parsedJson) || parsedJson.length === 0) {
        return;
    }
    // Создаю новую ноду, который представляет собой голову связанного списка
    const head = new LinkedListNode(parsedJson[0]);
    let currentLinkedListNode = head;


    // В цикле обходим каждый элемент массива
    for (let i = 1; i < parsedJson.length; i++) {
        // Создаю новый узел с соответствующими данными
        const newNode = new LinkedListNode(parsedJson[i]);
        // Для текущего узла указываю ссылку на новый узел
        currentLinkedListNode.next = newNode;
        // В качестве текущего узла сохраняю только что созданный узел
        currentLinkedListNode = newNode;
    }
    return head;
}

// Пример использования
const jsonExample = '[1, 2, 3, 4, 5]';
const linkedList = JSONLinkedList(jsonExample);
console.log(linkedList);

//5.	Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.