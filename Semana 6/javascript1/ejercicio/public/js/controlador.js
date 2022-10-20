'use strict';

//Leer datos, imprimir, validar, y responder ante eventos

imprimir_lista_libros();

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputTitulo = document.querySelector('#txtTitulo');
let inputEditorial = document.querySelector('#txtEditorial');
let inputPrecio = document.querySelector('#txtPrecio');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let sTitulo = inputTitulo.value;
    let sEditorial = inputEditorial.value;
    let nPrecio = Number(inputPrecio.value);

    registrar_libro(sTitulo, sEditorial, nPrecio);
    imprimir_lista_libros();
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