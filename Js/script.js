const contenedorCard = document.querySelector("#contenedor-productos");


fetch("./Js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        crearCardInicio(productos);
    })


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
// crearCardInicio(listaProductos);




// fetch("./Js/productos.json")
// .then (response =>response.json())
// .then (data => {
//     data.forEach(producto => {
//         const nuevoProducto = document.createElement("div");
//                 nuevoProducto.classList = "card-producto";
//                 nuevoProducto.innerHTML = `
//                     <img src=${producto.img} alt=${producto.nombre}>
//                     <h3 class="producto-nombre">${producto.nombre}</h3>
//                     <p class="producto-precio">$${producto.precio}</p>
//                     <button class="producto-agregar">Agregar</button>
//                 `
//                 contenedorCard.appendChild(nuevoProducto);
//                 nuevoProducto.getElementsByTagName("button")[0]
//                 .addEventListener("click", () => agregarAlCarrito (producto))
//             });

//     });



//     fetch("./Js/productos.json")
//     .then (response => response.json())
//     .then (data => {
//     crearCardInicio(data);
//     })
//     console.log("String")

// function crearCardInicio (productos){
//     productos.forEach(producto => {
//         const nuevoProducto = document.createElement("div");
//         nuevoProducto.classList = "card-producto";
//         nuevoProducto.innerHTML = `
//             <img src=${producto.img} alt=${producto.nombre}>
//             <h3 class="producto-nombre">${producto.nombre}</h3>
//             <p class="producto-precio">$${producto.precio}</p>
//             <button class="producto-agregar">Agregar</button>
//         `
//         contenedorCard.appendChild(nuevoProducto);
//         nuevoProducto.getElementsByTagName("button")[0]
//         .addEventListener("click", () => agregarAlCarrito (producto))
//     });
// }

// crearCardInicio();

