function lista02x01() {
    let numerodigitado;
   numerodigitado = prompt("Digite um número: ");
   if (numerodigitado == 0) {
    alert("0 é neutro");
    } 
   else if ( (numerodigitado % 2) == 0 ){ 
    alert("O número é par");
    }
    else {
    alert("O número é impar");
    }
    }
    lista02x01()