const boton = document.querySelector('#btn-imprimir');

boton.addEventListener('click', imprimir)

function imprimir() {
    const inputNombre = document.querySelector('#txt-nombre');
    const outputResultado = document.querySelector('#out-resultado');
    let nombre = inputNombre.value;
    outputResultado.value = nombre;
}