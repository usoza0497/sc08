const boton = document.querySelector('#btn-imprimir');

boton.addEventListener('click', imprimir);

function imprimir() {
    const listaMonedas = document.querySelector('#slt-moneda');
    const inputMonto = document.querySelector('#txt-monto');

    const outputResultado = document.querySelector('#out-resultado');

    let moneda = listaMonedas.value;
    let monto = inputMonto.value;

    switch (moneda) {
        case '$':
            outputResultado.value = '$' + monto;
            break;
        case '₡':
            outputResultado.value = '₡' + monto;
            break;
        case '€':
            outputResultado.value = '€' + monto;
            break;
    }
}