'use strict'

let lista_productos = [];

function registrar_producto(psTitulo, pnPrecio, psDescripcion) {
    let nuevoProducto = [];
    nuevoProducto.push(psTitulo, pnPrecio, psDescripcion);

    lista_productos.push(nuevoProducto);
};

function listar_productos() {
    return lista_productos;
};