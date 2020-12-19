function equality() {
    let a = document.getElementById('inp');
    let oper = a.value.split(' ')[1],
        ch1 = a.value.split(' ')[0],
        ch2 = a.value.split(' ')[2];

    if (oper == '+') {
        a.value = Number(ch1) + Number(ch2);
    }

    if (oper == '-') {
        a.value = Number(ch1) - Number(ch2);
    }

    if (oper == '×') {
        a.value = Number(ch1) * Number(ch2);
    }

    if (oper == ':') {
        if (Number(ch2) == 0) {
            alert('Ошибка. Делить на 0 нельзя.');
            delit();
        } else {
            a.value = Number(ch1) / Number(ch2);
        }
    }
}

function addition() {
    let a = document.getElementById('inp'),
        m = document.getElementById('inp').value.split(' ');
    if (m != "" && m[m.length - 2] != "+" && m[m.length - 2] != "-" && m[m.length - 2] != ":" && m[m.length - 2] != "×") {
        a.value = a.value + " + ";
    } else {
        alert("Ошибка ввода");
    }
}

function subtraction() {
    let a = document.getElementById('inp'),
        m = document.getElementById('inp').value.split(' ');
    if (m != "" && m[m.length - 2] != "+" && m[m.length - 2] != "-" && m[m.length - 2] != ":" && m[m.length - 2] != "×") {
        a.value = a.value + " - ";
    } else {
        alert("Ошибка ввода");
    }
}

function multiplication() {
    let a = document.getElementById('inp'),
        m = document.getElementById('inp').value.split(' ');
    if (m != "" && m[m.length - 2] != "+" && m[m.length - 2] != "-" && m[m.length - 2] != ":" && m[m.length - 2] != "×") {
        a.value = a.value + " × ";
    } else {
        alert("Ошибка ввода");
    }
}

function division() {
    let a = document.getElementById('inp'),
        m = document.getElementById('inp').value.split(' ');
    if (m != "" && m[m.length - 2] != "+" && m[m.length - 2] != "-" && m[m.length - 2] != ":" && m[m.length - 2] != "×") {
        a.value = a.value + " : ";
    } else {
        alert("Ошибка ввода");
    }
}

function delit() {
    document.getElementById('inp').value = '';

}

function n9() {
    document.getElementById('inp').value = document.getElementById('inp').value + "9";
}

function n8() {
    document.getElementById('inp').value = document.getElementById('inp').value + "8";
}

function n7() {
    document.getElementById('inp').value = document.getElementById('inp').value + "7";
}

function n6() {
    document.getElementById('inp').value = document.getElementById('inp').value + "6";
}

function n5() {
    document.getElementById('inp').value = document.getElementById('inp').value + "5";
}

function n4() {
    document.getElementById('inp').value = document.getElementById('inp').value + "4";
}

function n3() {
    document.getElementById('inp').value = document.getElementById('inp').value + "3";
}

function n2() {
    document.getElementById('inp').value = document.getElementById('inp').value + "2";
}

function n1() {
    document.getElementById('inp').value = document.getElementById('inp').value + "1";
}

function n0() {
    if (document.getElementById('inp').value != '') {
        document.getElementById('inp').value = document.getElementById('inp').value + "0";
    } else {
        alert("Введите корректное значение");
    }
}