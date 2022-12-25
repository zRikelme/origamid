const circulo = document.querySelector('#circulo');
function mover(event) {
    circulo.style.top = event.y + "px";
    circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", mover);