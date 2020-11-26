var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");


    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var tdtelefone = paciente.querySelector(".info-telefone");

            paciente.classList.add("invisivel");
            var nome = tdNome.textContent;
            var telefone = tdtelefone.textContent;

            var expressao = new RegExp(this.value, "i");

            if(expressao.test(nome) || expressao.test(telefone)){
                paciente.classList.remove("invisivel");
            }else{
                paciente.classList.add("invisivel");
            }
        }

    }
    else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});