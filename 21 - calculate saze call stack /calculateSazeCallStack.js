let i = 0;
function inc() {
    i++
    inc()
}
try {
    inc()
} catch (e) {
    i++;
    console.log('максимальный размер стэка', i)
}

//chrome macbook air m1 9179
//yandex macbook air m1 11033
//safari macbook air m1 45623