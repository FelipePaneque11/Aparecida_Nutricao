var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click" , function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load" , function(){
        var botaoErro = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
            botaoErro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                 adicionaPacienteNaTabela(paciente);
           } )

        }else {
            botaoErro.classList.remove("invisivel");
        }
    })

    xhr.send();
})