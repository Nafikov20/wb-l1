function enumChildNodes(node) {
    // если нам передали элемент
    if (node && 1 === node.nodeType) {
        // берем его первый дочерний узел
        let child = node.firstChild;
        // пока узлы не закончились
        while (child) {
            // если этот узел является элементом
            if (1 === child.nodeType) {
                // что-то делаем с найденным элементом
                console.log('элемент ' + child.tagName);
                // рекурсивно перечисляем дочерние узлы
                enumChildNodes(child);
            }
            // переходим к следующему узлу
            child = child.nextSibling;
        }
    }
}

// перечисляем содержимое body
enumChildNodes(document.body);

//26.	Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).