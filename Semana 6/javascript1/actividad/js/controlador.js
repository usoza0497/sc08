let botonAgregar = document.querySelector('#btnAgregar');
let inputProducto = document.querySelector('#txtNombreProducto');
let inputPrecio = document.querySelector('#txtPrecioProducto');
let inputdDescripcion = document.querySelector('#txtDescripcionProducto');


botonAgregar.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    let sNombre = inputProducto.value;
    let nPrecio = Number(inputPrecio.value)
    let sDescripcion = inputdDescripcion.value

    registrar_libro(sNombre, nPrecio, sDescripcion);
}