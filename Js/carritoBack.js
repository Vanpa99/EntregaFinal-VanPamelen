function agregarAlCarrito(producto) {
        // ...  
    Toastify({
        text: "Has agregado un producto al carrito",
        duration: 1000,
        destination: "./carrito.html",
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "var(--main-color)",
          color: "var(--sec-color)"
        },
        onClick: function(){} // Callback after click
      }).showToast();
          // ...  


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

function reiniciarCarrito(){
    localStorage.removeItem("listaProductos");
    actualizarNumeroCarrito();
  }

actualizarNumeroCarrito();
