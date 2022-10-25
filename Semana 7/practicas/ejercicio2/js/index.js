const boton = document.querySelector('#btn-imprimir');

boton.addEventListener('click', imprimir);

function imprimir() {
    const listaMonedas = document.querySelector('#slt-moneda');
    const outputResultado = document.querySelector('#out-resultado');
    let moneda = listaMonedas.value;

    outputResultado.value = moneda;
}