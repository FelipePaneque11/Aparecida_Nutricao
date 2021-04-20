var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input" , function(){
    var pacientes = document.querySelectorAll(".paciente");

    // se tem algo digitado - vai percorrer os nomes dos pacientes ;
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value , "i") // Expressão regular - Faz uma busca mais interativa ;
            // se o nome for diferente do digitado - adiciona a classe invisivel - se for igual ela remove a classe ;
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        }
    }else {
        //se nao tiver nada digitado , remove a classe invisivel , fazendo com que todos apareçam
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
            
        }
    }

});