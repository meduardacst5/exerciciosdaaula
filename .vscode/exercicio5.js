function exercicio05 () {
    let largura;
    let comprimento;
    let valorM2 = 1200;
    let valorterreno; 

    largura = prompt("informe a largura do terreno: ")
    comprimento = prompt("informe o comprimento do terreno: ")

    let area = largura * comprimento;
    valorterreno = area * valorM2;

    alert(valorterreno);
}
exercicio05()