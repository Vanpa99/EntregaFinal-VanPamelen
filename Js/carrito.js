const contenedorCard = document.querySelector("#contenedor-productos-carrito");
const unidadesElement = document.querySelector("#unidades");
const precioElement = document.querySelector("#precio");
const carritoVacioElement = document.querySelector("#carrito-vacio");
const totalesElement = document.querySelector("#totales");
// const reiniciarCarritoElement = document.querySelector("#reiniciar");



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