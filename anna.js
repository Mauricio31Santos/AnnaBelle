function fundo() {
    var change = document.getElementById('banner');
    change.style.background = "#000"
}

function evento() {
    var change = document.getElementById('banner');
    change.addEventListener('click', fundo);
}
window.addEventListener('load', evento);