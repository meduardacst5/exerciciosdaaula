function exercicio02() {
    let nome;
    let sobrenome;

    nome = prompt("Qual seu primeiro nome?");
    sobrenome = prompt("qual seu sobrenome?");

    alert(`Olá ${nome} ${sobrenome}, seja bem vindo!`)
}

function exercicio1() {
    let numero1;
    let numero2;
    let resultado;

    numero1 = prompt ("Digite um número: ");
    numero2 = prompt (" Digite outro número: ");

    numero1 = parseFloat (numero1);
    numero2 = parseFloat (numero2);

    resultado = numero1 + numero2
    alert (`O resultado da soma ${numero1} com ${numero2} = ${resultado} `);
}
exercicio1()
exercicio02()

function exercicio3() {
    let valoremReal; 
    let multiplicadorDolar = 4.93;
    let cotacao; 

    valoremReal = prompt ("Qual valor que deseja converter?")
    cotacao = valoremReal/multiplicadorDolar; 
    cotacao = cotacao.toFixed(2)
    console.log (cotacao);
}
exercicio3()