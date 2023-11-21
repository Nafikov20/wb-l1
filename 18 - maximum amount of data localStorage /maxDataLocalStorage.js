const setLocalStorage = () => {
    // Пробуем заполнить максимально данными в localStorage
    for(let i = 0; i < 100000; i++) {
        try {
            const myKey = `key-${i}`;
            const myValue = 'x'.repeat(1000);
            localStorage.setItem(myKey, myValue)
        } catch (error) {

        }
    }
}


const localStorageSpace = () => {
    setLocalStorage()
    // Подсчитываем объем данных, который удалось записать
    let isTotal = 0,xKeyLen, xKey;
    for (xKey in localStorage) {
        if (!localStorage.hasOwnProperty(xKey)) continue;
        xKeyLen = (localStorage[xKey].length + xKey.length) * 2;
        isTotal += xKeyLen;
    }
    return  (isTotal / 1024).toFixed(2);
};


console.log( `size: ${localStorageSpace()}kb`);