function lista02x02() {
    let numero1;
    let numero2;
    numero1 = prompt ("Digite um número: ");
    numero2 = prompt ("DIgite outro número: ");

    numero1 = parseInt (numero1)
    numero2 = parseInt (numero2)

    if (numero1 < numero2) {
        alert(`O numero ${numero1} é menor`);
    } else { 
        alert(`O numero ${numero1} é maior`);
    }
}
lista02x02();