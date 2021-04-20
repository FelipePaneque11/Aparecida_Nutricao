var  titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição da Aparecida";


var pacientes = document.querySelectorAll(".paciente");

for( var i = 0 ; i < pacientes.length ; i++) {

    var paciente = pacientes[i];
    
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    pesoEhValido = validaPeso(peso) ; // true ou false
    alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
        
    } 

    if(!alturaEhValido){
        alturaEhValido = false;
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido && pesoEhValido){
        var imc = calculaImc(peso , altura)
        tdImc.textContent = imc;

    }

}

function calculaImc ( peso, altura){
    var imc = 0 ;
    imc  = peso / (altura * altura);
    return imc.toFixed(2);
}




