var mas = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function clean() {
    document.getElementById("n00").innerHTML = '';
    document.getElementById("n01").innerHTML = '';
    document.getElementById("n02").innerHTML = '';
    document.getElementById("n11").innerHTML = '';
    document.getElementById("n10").innerHTML = '';
    document.getElementById("n12").innerHTML = '';
    document.getElementById("n20").innerHTML = '';
    document.getElementById("n21").innerHTML = '';
    document.getElementById("n22").innerHTML = '';
    mas = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    document.getElementById("hod").innerHTML = "Ваш ход";
}

function test() {
    if (mas[0][0] == 1 && mas[1][1] == 1 && mas[2][2] == 1) return 1;
    if (mas[0][0] == 2 && mas[1][1] == 2 && mas[2][2] == 2) return 2;
    if (mas[0][2] == 1 && mas[1][1] == 1 && mas[2][0] == 1) return 1;
    if (mas[0][2] == 2 && mas[1][1] == 2 && mas[2][0] == 2) return 2;

    let f = 0;

    for (let i = 0; i < 3; i++) {
        if (mas[i][0] == 1 && mas[i][1] == 1 && mas[i][2] == 1) return 1;
        if (mas[i][0] == 2 && mas[i][1] == 2 && mas[i][2] == 2) return 2;
        if (mas[0][i] == 1 && mas[1][i] == 1 && mas[2][i] == 1) return 1;
        if (mas[0][i] == 2 && mas[1][i] == 2 && mas[2][i] == 2) return 2;
        if (mas[i][0] != 0 && mas[i][1] != 0 && mas[i][2] != 0) f = f + 1;
    }
    if (f == 3) return 0;
    return 4;
}

function stepII() {
    let m = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mas[i][j] == "") {
                m.push(String(i) + String(j));
            }
        }
    }
    let t = m[Math.floor(Math.random() * m.length)];
    mas[Number(t[0])][Number(t[1])] = 2;
    document.getElementById("n" + t).innerHTML = 'x';
    document.getElementById("hod").innerHTML = "Ваш ход";
}

function inp(a) {
    if (document.getElementById("n" + a).innerHTML == '') {
        document.getElementById("n" + a).innerHTML = "o";
        mas[Number(a[0])][Number(a[1])] = 1;
    } else {
        alert("Это поле уже занято");
        return 0;
    }
    document.getElementById("hod").innerHTML = "Ход компьютера";
    if (test() == 4) setTimeout(() => { stepII(); }, 300);
    setTimeout(() => { if (test() == 2) alert("Поражение"); return 0; }, 400);
    if (test() == 1) setTimeout(() => { alert("Победа"); return 0; }, 400);
    if (test() == 0) setTimeout(() => { alert("Ничья"); return 0; }, 400);
}