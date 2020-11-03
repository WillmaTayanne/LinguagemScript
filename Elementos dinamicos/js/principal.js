var titulo = document.querySelector(".titulo");
titulo.textContent = "Alana Healthcare";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 800) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

calculoIMC = (peso,altura) => {

    let imc = peso / (altura ** 2);
    return imc.toFixed(2);
    
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
   event.preventDefault();

   var form = document.querySelector("#form-adiciona");

   var nome = form.nome.value; 
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

   var pacienteTr = document.createElement("tr");

   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");

   nomeTd.textContent = nome; 
   pesoTd.textContent = peso; 
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);

   var pesoEhValido = true;
   var alturaEhValida = true;

   if (Number(peso) <= 0 || Number(peso) >= 800) {
       pesoEhValido = false;
       imcTd.textContent = "Peso inválido";
       pacienteTr.classList.add("paciente-invalido");
   }

   if (Number(altura) <= 0 || Number(altura) >= 3.00) {
       alturaEhValida = false;
       imcTd.textContent = "Altura inválida";
       pacienteTr.classList.add("paciente-invalido");
   }

   if (pesoEhValido && alturaEhValida) {
       imcTd.textContent =  calculoIMC(Number(peso),Number(altura));

   }


   var tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr); 
});