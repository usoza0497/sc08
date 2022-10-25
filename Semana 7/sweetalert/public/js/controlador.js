'use strict';

//Leer datos, imprimir, validar, y responder ante eventos

imprimir_lista_libros();

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputTitulo = document.querySelector('#txtTitulo');
let inputEditorial = document.querySelector('#txtEditorial');
let inputPrecio = document.querySelector('#txtPrecio');

botonRegistrar.addEventListener('click', obtenerDatos);

function ValidarInputs(psTitulo, psEditorial, pnPrecio) {
    if (psTitulo == '' || psTitulo == null || psTitulo == undefined) {
        imprimirMsjError('Estimado usuario el TITULO es requerido');
        ResaltarLabelInvalido('lblTitulo');
        ResaltarInputInvalido('txtTitulo');
        return false;
    }
    if (psEditorial == '' || psEditorial == null || psEditorial == undefined) {
        imprimirMsjError('Estimado usuario la EDITORIAL es requerida');
        ResaltarLabelInvalido('lblEditorial');
        ResaltarInputInvalido('txtEditorial');
        return false;
    }
    if (pnPrecio == '' || pnPrecio == null || pnPrecio == undefined) {
        imprimirMsjError('Estimado usuario el PRECIO es requerido');
        ResaltarLabelInvalido('lblPrecio');
        ResaltarInputInvalido('txtPrecio');
        return false;
    }
    if (pnPrecio <= 0) {
        imprimirMsjError('Estimado usuario el PRECIO debe ser mayor que cero');
        ResaltarLabelInvalido('lblPrecio');
        ResaltarInputInvalido('txtPrecio');
        return false;
    }

    return true; 
}

function imprimirMsjError(pmensaje) {
    Swal.fire({
        title: 'Error',
        text: pmensaje,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

function imprimirMsjCorrecto(pmensaje) {
    Swal.fire({
        title: 'Genial!',
        text: pmensaje,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

function ResaltarLabelInvalido(pLabelID) {
    let elementLabel = document.getElementById(pLabelID)
    let styleOrigin = elementLabel.style;

    elementLabel.style =  'color: red';
    
    setTimeout(function(){
        elementLabel.style = styleOrigin;

    }, 5000);
}

function ResaltarInputInvalido(pInputID) {
    let elementInput = document.getElementById(pInputID)
    let styleOrigin = elementInput.style;

    elementInput.style =  'border-color: red';
    
    setTimeout(function(){
        elementInput.style = styleOrigin;

    }, 5000);
}

function ResaltarLabelInvalido(pLabelID) {
    let elementLabel = document.getElementById(pLabelID)
    let styleOrigin = elementLabel.style;

    elementLabel.style =  'color: red';
    
    setTimeout(function(){
        elementLabel.style = styleOrigin;

    }, 5000);
}

function obtenerDatos() {
    let sTitulo = inputTitulo.value;
    let sEditorial = inputEditorial.value;
    let nPrecio = Number(inputPrecio.value);

    if (ValidarInputs(sTitulo, sEditorial, nPrecio)  == false) {
        return;
    };

    registrar_libro(sTitulo, sEditorial, nPrecio);
    imprimir_lista_libros();
    imprimirMsjCorrecto()
};

function imprimir_lista_libros() {
    let tbody = document.querySelector('#tblLibros tbody');
    let lista_libros = obtener_lista_libros();

    tbody.innerHTML = '';

    for(let i = 0; i < lista_libros.length; i++) {
        let fila = tbody.insertRow();
        let celdaTitulo = fila.insertCell();
        let celdaEditorial = fila.insertCell();
        let celdaPrecio = fila.insertCell();

        celdaTitulo.innerHTML = lista_libros[i][0];
        celdaEditorial.innerHTML = lista_libros[i][1];
        celdaPrecio.innerHTML = lista_libros[i][2];

    }
}