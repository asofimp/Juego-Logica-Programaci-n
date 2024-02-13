let nummeroSecreto = 0;
let intento =0;
let numerosSorteador = [];
let numeroMaximo = 10;



condicionesIniciales();

function asignarTextoElemento(elemento , text){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = text;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === nummeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${intento} ${ intento == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        //si el usuario no acerta
        if(numeroUsuario > nummeroSecreto){
            asignarTextoElemento('p', 'El numero es menor')
        }else if(numeroUsuario < nummeroSecreto){
            asignarTextoElemento('p', 'El numero es mayor')
        }
        intento++;
        //funcion para limpiar el input
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(nummeroSecreto)
    console.log(numerosSorteador)
    //includes retorna un booleano 
    if(numerosSorteador.length >= numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros ')
    }else {
        if( numerosSorteador.includes(numeroGenerado) ){
            return generarNumeroSecreto();
        }else{
            numerosSorteador.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicionesIniciales(){
    intento = 1
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    nummeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mansaje de intercalo de numeros
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
 
