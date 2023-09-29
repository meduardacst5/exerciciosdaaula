function lista02x04(){
    let resposta = prompt ("Qual é a sua idade?");
    if(resposta >= 18) {
        alert("Você entrou para a festa!");
    } else {
        let resposta2 = prompt ("Você tem entre 16 e 18? Digite 1 para sim e digite 2 para não");
        if (resposta2 == 1) 
        alert("Você precisa vir somente acompanhado com seus pais.")
    else {
        let resposta3;
        alert("Você não poderá vir a festa")
        }
    }
}
lista02x04();