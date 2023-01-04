const imagens = document.querySelectorAll("#galeria img");

function galeriaTrocar(event) {
  const clicada = event.currentTarget;
  console.log(clicada.src);
}

function galeriaClique(imagem) {
  imagem.addEventListenner("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);