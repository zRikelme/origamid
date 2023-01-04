const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
   const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
       link.classList.add('ativo');
    }
}

// ativar itens do rocamneto //

const parametros = new URLSearchParams(location.search);
 
function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    elemento.checked = true;
    console.log(elemento)
}

links.forEach(ativarLink);

// Perguntas Frequentes //

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta() {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);


    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
