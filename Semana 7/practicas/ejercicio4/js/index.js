const boton = document.querySelector('#btn-imprimir');
const listaGeneros  = document.querySelectorAll('.chk-generos');

const outputResultado = document.querySelector('#out-resultado');

boton.addEventListener('click', imprimir);

function imprimir() {
    let generosSeleccionados = '';

    for(let i = 0; i < listaGeneros.length; i++){
        
        if(listaGeneros[i].checked == true){
            generosSeleccionados += listaGeneros[i].value + ' ';
        }
    }


    outputResultado.value = generosSeleccionados;
}