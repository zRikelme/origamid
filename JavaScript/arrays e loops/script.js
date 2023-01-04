const lista = ["JAVASCRIPT", "HTML", "CSS", "PHP"];

const body = document.querySelector("body")

for(number=0; number < lista.length; number++) {
    body.innerHTML += "<li>" + lista[number] + "</li>";

}