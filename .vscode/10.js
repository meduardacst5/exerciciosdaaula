function lista04ex01(){
    alert("Lista de compras!")
    let lista = []
    let opcao;
    let listacompleta = "";
    
    while (opcao != 3){
        opcao = parseInt (prompt ("- Menu -\n1- Incluir item\n2- Ver lista\n3- Sair"));
        switch(opcao) {
            case 1:
                let item = prompt ("Que item você deseja inserir?");
                lista.push(item);
                alert("Item incluído");
                break;
            case 2:
                alert("Exibir lista");
                for (let i=0; i<lista.length; i++) {
                    //listacompleta = listacompleta + lista[i] + "\n"
                    listacompleta += lista[i] + "\n"
                } 
                alert(listacompleta);
                break;
            case 3: alert("Saindo! Muito obrigado pela preferência.");
                break; 
            default: 
                alert ("Insira uma opção válida");
        }
    }
}
lista04ex01();