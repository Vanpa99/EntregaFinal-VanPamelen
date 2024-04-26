const contenedorCard = document.querySelector("#contenedor-productos");
async function ObtenerProductos(){
    fetch("./js/productos.json")
    .then (response => response.json())
    .then (data => {
    crearCardInicio(data);
    })
    console.log("String")
    
}

ObtenerProductos()



function crearCardInicio (productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "card-producto";
        nuevoProducto.innerHTML = `
            <img src=${producto.img} alt=${producto.nombre}>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar">Agregar</button>
        `
        contenedorCard.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0]
        .addEventListener("click", () => agregarAlCarrito (producto))
    });
}

crearCardInicio(listaProductos);

