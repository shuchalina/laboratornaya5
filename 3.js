function copy() {
    let a = document.getElementById('inp1'),
        b = document.getElementById('inp2');
    if (a.value == '') {
        alert("Нет текста для копирования");
    } else {
        b.value = a.value;
    }
}

function del() {
    let a = document.getElementById('inp1'),
        b = document.getElementById('inp2');
    a.value = '';
    b.value = '';
}