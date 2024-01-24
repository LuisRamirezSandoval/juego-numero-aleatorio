let numeroSecreto = 0;
let cont=0;

function asignarTextoElemento(etiqueta,texto){
    let nuevoValor = document.querySelector(etiqueta);
    nuevoValor.innerHTML = texto
};

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('h2',`Has Ganado en ${cont} ${cont > 1 ? 'intentos' : 'intento'} !!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('h2', "El numero secreto es menor");
        }else{
            asignarTextoElemento('h2',"El numero secreto es mayor");
        }
        cont++;
        document.getElementById('valorUsuario').value = ""; //limpiar input
    };
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
};

function condicionesIniciales(){
    asignarTextoElemento('h1',"Adivina el numero secreto");
    asignarTextoElemento('h2',"Ingresa un numero del 1 al 10 : ");
    numeroSecreto = generarNumeroSecreto();
    cont=1;
}

function reiniciarJuego(){
    document.getElementById('valorUsuario').value = ""; //limpiar imput
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute('disabled','true'); //deshablitar boton nuevo juego
}

condicionesIniciales();
