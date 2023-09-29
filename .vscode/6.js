function exercicio1() {
    alert ("Cronometro")
var numero = prompt ("Digite um número: ")
while (numero >= 60 || numero <= 1){
    numero = prompt ("Digite um número")
}  
for (let a = 0; a < numero; a++){
    console.log(a);
}
}

exercicio1()