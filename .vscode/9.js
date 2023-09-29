function exercicio9() {
    let login = "madu@senai.bir";
    let senha = "1234";

    let loginDigitado;
    let senhaDigitada;

    let tentativa = 3;

    function verificaTentativas(){
        if (tentativa > 1){
            tentativa--;
            console.log (`${tentativa} tentativa(s) restante(s)`);
        } else {
            tentiva --;
            alert("Acesso Bloqueado!");
        }
    }
    do {
        loginDigitado = prompt ("Login: ");
        senhaDigitada = prompt ("Senha: ");
        if ( (loginDigitado == login) && (senhaDigitada == senha)){
            alert ("Bem-vindo, Madu!")
            tentativa = 0
        } else if ((loginDigitado != login) || (senhaDigitada != senha)) {
            alert("Login ou senha inválido!");
            verificaTentativas();
        }
    } while (tentativa > 0);
}
exercicio9();