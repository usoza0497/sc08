//Leer datos, imprimir, validar, y responder ante eventos

'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputTitulo = document.querySelector('#txtTitulo');
let inputEditorial = document.querySelector('#txtEditorial');
let inputPrecio = document.querySelector('#txtPrecio');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let sTitulo = inputTitulo.value;
    let sEditorial = inputEditorial.value;
    let nPrecio = inputPrecio.value;

    console.log(sTitulo, sEditorial, nPrecio)
};
