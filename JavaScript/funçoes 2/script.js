// function livro(nome, ano, autor) {
//     const nomeMaior = nome.toUpperCase();
//     const totalAnos = 2050 - ano;
//     const frase = nome + " por" + autor;

//     const objeto = {
//         nome: nomeMaior,
//         totalAnos,
//         frase,
//     }
//     return objeto;
// }

/* codigo simplificado */ 
function livro(nome, ano, autor) {
    return {
        nome: nome.toUpperCase(),
        totalAnos: 2022 - ano,
        frase: nome + ' por ' + autor,
    };
}
const livroRetorno = livro('Senhor dos Aneis', 1954, 'J. R. R. Tolkien')
console.log(livroRetorno);


