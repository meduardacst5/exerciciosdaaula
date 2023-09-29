function ex3(){
    let numeroDigitado1 = prompt ("Digite um número: ");
    let numeroDigitado2 = prompt ("Digite outro número: ");
    
    while (numeroDigitado2 <= numeroDigitado1) {
        alert("Número inválido");
        numeroDigitado2 = prompt ("Digite outro número: ");
    }

    for (numeroDigitado1; numeroDigitado1 <= numeroDigitado2; numeroDigitado1++ ) {
        if ( numeroDigitado1%2 == 0) {
            console.log (numeroDigitado1);
        }
    }

}

ex3();