//Captando dados do HTML com JS puro
//document.getElementById('firstname').value;

// Com JQuery
// $('#firstname').val()

var listaNomes = [];

function btnCadastrar() {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();

    var validacao = validFormulario(firstname, lastname);
        if (!validacao){
            alert("Preencha todos os dados");
            return;
        }

        let pessoaObjeto = {firstname, lastname}
        listaNomes.push(pessoaObjeto);
        AdicionarNomesElementoHtml(pessoaObjeto);
    }

function AdicionarNomesElementoHtml(pessoaObjeto) {
    // Primeiro Exemplo
    var elementoHtml = document.getElementById("lista-nomes");
    // var novaDiv = document.createElement("div");
    // novaDiv.innerHTML = `${pessoaObjeto.firstname} ${pessoaObjeto.lastname}`
    // elementoHtml.appendChild(novaDiv);
    
    //Segundo exemplo
    var novoCodigoHtml =` <li class="mt-3 list-group-item">${pessoaObjeto.firstname} ${pessoaObjeto.lastname}</li>`;
    elementoHtml.insertAdjacentHTML("beforeend",novoCodigoHtml);
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
