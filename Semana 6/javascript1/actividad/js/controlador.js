'use strict'

imprimir_productos();

let botonAgregar = document.querySelector('#btnAgregar');
let inputProducto = document.querySelector('#txtNombreProducto');
let inputPrecio = document.querySelector('#txtPrecioProducto');
let inputdDescripcion = document.querySelector('#txtDescripcionProducto');


botonAgregar.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    let sNombre = inputProducto.value;
    let nPrecio = Number(inputPrecio.value)
    let sDescripcion = inputdDescripcion.value

    registrar_producto(sNombre, nPrecio, sDescripcion);

    imprimir_productos();
};

function imprimir_productos() {
    let tbody = document.querySelector('#tblProductos tbody');
    let lista_productos = listar_productos();

    tbody.innerHTML = '';

    for(let i = 0; i < lista_productos.length; i++) {
        let fila = tbody.insertRow();
         let celdaNombre = fila.insertCell();
         let celdaPrecio = fila.insertCell();
         let celdaDescripcion = fila.insertCell();

         celdaNombre.innerHTML = lista_productos[i][0];
         celdaPrecio.innerHTML = lista_productos[i][1];
         celdaDescripcion.innerHTML = lista_productos[i][2];
    }
};