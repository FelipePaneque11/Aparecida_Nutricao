var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click" , function(event){
    event.preventDefault(); // nao da reload na pagina
    
    var form = document.querySelector("#form");
    var paciente = obtemPacienteDoFormulario(form);                                                                                         
   
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
         exibeMensagensDeErro(erros);     
        return; // esse return vazio faz com que saia da função , sendo assim,
                //o codigo nao chega a adicionar o paciente na tabela
    }
    
    adicionaPacienteNaTabela(paciente);
    form.reset();
    var LimpaErro = document.querySelector("#mensagem-erro")
    LimpaErro.innerHTML = ""
});


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = ""; // limpa os erros da pagina ao clicar no botao;

    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)
    })
}

function obtemPacienteDoFormulario(form){
      //pegando o valor do form
    var paciente = {
        nome: form.nome.value ,
        peso: form.peso.value ,
        altura: form.altura.value ,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value , form.altura.value), 
    };
    return paciente;    
};

function montaTr(paciente){
    //cria Tr no html
    var pacienteTr = document.createElement("tr");
    //adiciona a classe .paciente na Tr
    pacienteTr.classList.add("paciente");
    //coloca a td dentro da tr com o appendChield
    pacienteTr.appendChild(montaTd(paciente.nome , "info-nome")) ;
    pacienteTr.appendChild(montaTd(paciente.peso , "info-peso")) ;
    pacienteTr.appendChild(montaTd(paciente.altura , "info-altura")) ;
    pacienteTr.appendChild(montaTd(paciente.gordura , "info-gordura")) ;
    pacienteTr.appendChild(montaTd(paciente.imc , "info-imc"));

  
    return pacienteTr;
}

function montaTd(dado , classe){
    var td = document.createElement("td");
    td.textContent = dado ;
    td.classList.add(classe);
    return td;
}


function validaPeso (peso){
    if(peso >= 0 && peso < 400){
        return true ;
    }else {
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 2.0){
        return true ;
    } else {
        return false
    }
}


function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (paciente.nome.length == 0 ){
        erros.push("Nome não pode estar vazio")
    }

    if (paciente.gordura.length == 0 ){
        erros.push("A gordura não pode estar vazio")
    }

    if (paciente.peso.length == 0 ){
        erros.push("O peso não pode estar vazio")
    }

    if (paciente.altura.length == 0 ){
        erros.push("A altura não pode estar vazio")
    }

    return erros;
}

