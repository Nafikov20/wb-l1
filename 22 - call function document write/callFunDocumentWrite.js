let i = 0;
function callFunDocumentWrite() {
    try {
        i++;
        document.write('Call document write', i);
        callFunDocumentWrite();
    } catch (error) {
        console.error('Max call document write', i)
    }
}

callFunDocumentWrite()

// чтобы попробовать определить, сколько раз можно вызвать document.write() рекурсивно вызываем функцию, перед тем, как произойдет ошибка. Chrome показал Max call document write 6896. Как я понял достигнут лимит глубины вызовов.