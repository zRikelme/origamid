let botao = document.querySelector('.botao');

function mostrar() {
    let texto = document.querySelector('.texto');
    texto.classList.toggle("ativar");
};

botao.addEventListener("click", mostrar);

