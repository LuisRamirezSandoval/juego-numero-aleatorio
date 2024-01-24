let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero por favor:");

    if(numeroUsuario == numeroSecreto){
        alert(`Felicidades! el numero secreto es ${numeroSecreto}`)
    };
};