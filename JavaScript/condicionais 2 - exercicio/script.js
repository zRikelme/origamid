const botao = document.querySelector('button');

function somar() {
    const div = document.querySelector("div");
    const total = Number(div.innerText) + 1;
    div.innerText = total;

    if (total < 10) {
        div.innerText = total;
    }

    else {
        console.log('Nao e possivel adicionar mais');
    }
}

if (botao) {
  botao.addEventListener("click", somar);
}
