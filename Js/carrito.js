const contenedorCard = document.querySelector("#contenedor-productos-carrito");
const unidadesElement = document.querySelector("#unidades");
const precioElement = document.querySelector("#precio");
const carritoVacioElement = document.querySelector("#carrito-vacio");
const totalesElement = document.querySelector("#totales");
const reiniciarCarritoElement = document.querySelector("#btn-reiniciar");
const comprarElement = document.querySelector("#btn-comprar");



function crearCardInicio() {
    contenedorCard.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("listaProductos"));
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div-carrito");
            nuevoProducto.classList = "card-producto-carrito";
            nuevoProducto.innerHTML = `
                <img src=${producto.img} alt=${producto.nombre}>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <div class="div-carrito">
                    <button class="btn-carrito">-</button>
                    <span class="cantidad-carrito">${producto.cantidad}</span>
                    <button class="btn-carrito">+</button>
                </div>
            `
            contenedorCard.appendChild(nuevoProducto);
            nuevoProducto
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElement.innerText = agregarAlCarrito(producto);
                    actualizarTotales();
                });
            nuevoProducto
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto);
                    crearCardInicio();
                    actualizarTotales();
                        // ...  

                    Toastify({
                        text: "Has quitado un producto del carrito",
                        duration: 1000,
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

                });
        });
    }
}

crearCardInicio();
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("listaProductos"));
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    carritoVacio();
}


function carritoVacio() {
    const productos = JSON.parse(localStorage.getItem("listaProductos"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
    totalesElement.classList.toggle("escondido", !(productos && productos.length > 0));
}

carritoVacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("listaProductos");
    actualizarTotales();
    crearCardInicio();
    // ...  
    Swal.fire({
    title: "¿Quieres vaciar el carrito?",
    text: "Deberas volver a cargar los porductos en la pagina principal.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, vaciar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Vaciado!",
        text: "Su carrito está vacio.",
        icon: "success"
      });
    }
  });
    // ...  
}

comprarElement.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra realizada",
        showConfirmButton: true,
    });
}


