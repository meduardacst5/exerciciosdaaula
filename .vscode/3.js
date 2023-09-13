function lista02x03() {

    let resposta = prompt ("Você é gestante? Digite 1 para sim e 2 para nao");
    if (resposta == 1) {
        alert("Você está na fila preferencial")
    } else {
        let resposta2 =  prompt ("Você tem quantos anos?");
        if (resposta2 >= 65) {
            alert("Você está na fila preferencial")
        } else {
            let resposta3 = prompt ("Você tem alguma deficiência? Digite 1 para sim e 2 para não");
            if (resposta3 == 1) {
                alert("Você está na fila preferencial")
            } else {
                alert("Fila comum")
            }
        }
    }
}

lista02x03();