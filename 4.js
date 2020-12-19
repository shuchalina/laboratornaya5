function dotable() {
    let a = document.getElementById('horiz').value,
        b = document.getElementById('vert').value,
        c = document.getElementById('table');
    for (i = 1; i <= a; i++) {
        horiz = document.createElement("tr");
        for (j = 1; j <= b; j++) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(Math.round(Math.random() * 10)));
            horiz.appendChild(td);
            c.appendChild(horiz);
        }
    }
}