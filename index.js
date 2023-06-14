var nome = "Gabriel";
var idade = 29;
var status = "Empregado";
var salario = 2500;
var salarioLiq = "2500";

if (salario === salarioLiq){
    console.log("ok");
} else {
    console.log("Verificar");
}

//Objetos

var objeto1 = {
    nome: "Gabriel",
    idade: 29,
    status: "Empregado",
    renda: function renda(salario1, salario2) {
        console.log(salario1 + salario2);
    },
};

objeto1.renda (1500, 2000)


// Arrays

var variosObjetos = [
    objeto1 = {
        nome: "Gabriel",
        idade: 29,
        status: "Empregado",
        renda: function renda(salario1, salario2) {
            console.log(salario1 + salario2);
        },
    },
    objeto1 = {
        nome: "Gabriel",
        idade: 29,
        status: "Empregado",
        renda: function renda(salario1, salario2) {
            console.log(salario1 + salario2);
        },
    },
]

console.log(variosObjetos[0]);
// Funções

function teste(){
    console.log("Teste");
}

function somar(valor1, valor2){
    console.log(valor1 + valor2);
}

function subtrair(valor1, valor2){
    console.log(valor1 - valor2);
}
