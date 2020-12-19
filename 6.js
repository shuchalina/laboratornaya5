function scr() {
    window.scrollTo(0, 0);
}

function vid() {
    if ((screen.width == 1366 && screen.height == 768) || (screen.width == 1920 && screen.height == 1080)) {
        if (window.pageYOffset > 800) {
            document.getElementById('im').classList.add('eye');
        } else {
            document.getElementById('im').classList.remove('eye');
        }
    }
}

window.addEventListener('scroll', vid);