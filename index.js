//Captando dados do HTML com JS puro
//document.getElementById('firstname').value;

// Com JQuery
// $('#firstname').val()

var listaNomes = [];

function btnCadastrar() {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();

    console.log(firstname);
    console.log(lastname);
    var validacao = validFormulario(firstname, lastname);
        if (!validacao){
            alert("Preencha todos os dados");
            return;
        }
        let pessoaObjeto = {firstname, lastname}
        listaNomes.push(pessoaObjeto)

        console.log(listaNomes);
    }

function AdicionarNomesElementoHtml(pessoaObjeto) {
    // Primeiro Exemplo
    var elementoHtml = document.getElementById("lista-nomes");
    var novaDiv = document.createElement("div");
    novaDiv.innerHTML = `$(pessoaObjeto.firstname) $(pessoaObjeto.lastname)`
    
}

function eventEscrever(event){
    // console.log(event.key);
}

function carregarPagina(){
    console.log("A Página foi carregada");
    
}

function validFormulario(firstname, lastname) {
    if (!firstname || !lastname){
        return false;
    } return true;
    
}
