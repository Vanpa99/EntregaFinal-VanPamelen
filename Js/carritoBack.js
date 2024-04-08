function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("listaProductos"));
    let cuenta = 0;
    if (!memoria){
        const newProducto = getNuevoProductoParaMemoria (producto);
        localStorage.setItem("listaProductos",JSON.stringify([newProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(elav => elav.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("listaProductos",JSON.stringify(nuevaMemoria));
    } 
    actualizarNumeroCarrito();
    return cuenta;
}


function restarAlCarrito (producto){
    const memoria = JSON.parse(localStorage.getItem("listaProductos"));
    const indiceProducto = memoria.findIndex(elav => elav.id === producto.id);
    if( memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    }else {
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("listaProductos",JSON.stringify(memoria));
    actualizarNumeroCarrito();
}


function getNuevoProductoParaMemoria (producto) {
    const newProducto = producto;
    newProducto.cantidad = 1;
    return newProducto;
}


const cuentaCarritoElement = document.querySelector("#cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("listaProductos"));
    if(memoria && memoria.length > 0){
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
        cuentaCarritoElement.innerText = cuenta;
    } else {
        cuentaCarritoElement.innerText = 0 ;

    }
}

actualizarNumeroCarrito();
