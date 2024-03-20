// Definición de la lista de productos con sus nombres y precios
const listaProductos = [
  { nombre: "Facturas (Docena)", precio: 5000 },
  { nombre: "Bizcochos (Kilo)", precio: 3000 },
  { nombre: "Masas Finas (Kilo)", precio: 20000 },
  { nombre: "Alfajor Artesanal (Unidad)", precio: 1000 }
];

// Variable para almacenar el precio total de la compra
let precioFinal = 0;

// Definición de la función buscarProducto que recibe un nombre de producto como argumento
function buscarProducto(nombreProducto) {
  // Utilizamos el método find() en la lista de productos para buscar un producto que cumpla con la condición
  // La condición se verifica utilizando una función de flecha que recibe un parámetro 'producto'
  // Dentro de la función de flecha, convertimos tanto el nombre del producto como el nombre proporcionado a minúsculas
  // Usamos el método includes() para verificar si el nombre del producto incluye el nombre proporcionado
  // Si encuentra un producto que cumpla con la condición, lo devuelve
  // Si no encuentra ningún producto que cumpla con la condición, devolverá 'undefined'
  return listaProductos.find(producto => producto.nombre.toLowerCase().includes(nombreProducto.toLowerCase()));
} // cual es mas correcto? mi idea es que por mas que haya un error de tipeo la condicion de cumpla igual
// return listaProductos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());


// Función principal para interactuar con el usuario y realizar la compra
function usuario() {
  // Solicitar al usuario que ingrese su nombre
  let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  let continuarComprando = true;

  // Bucle para continuar comprando hasta que el usuario decida finalizar
  while (continuarComprando) {
      // Mostrar al usuario la lista de productos y solicitar que ingrese el nombre o número del producto que desea comprar
      const productos = prompt("¡Bienvenido a Bakery, " + nombreUsuario + "! \n\nIngrese el nombre o número del producto que desea comprar:\n1. Facturas (Docena). \n2. Bizcochos (Kilo). \n3. Masas Finas (Kilo).  \n4. Alfajor Artesanal (Unidad). \n\n Para finalizar la compra ingrese 0:");

      let productoEncontrado;

      // Verificar si se ingresó un número para seleccionar el producto del menú
      if (!isNaN(productos)) {
          // Si es un número, asignar el producto correspondiente a la opción del menú
          switch (productos) {
              case "1":
                  productoEncontrado = listaProductos[0];
                  break;
              case "2":
                  productoEncontrado = listaProductos[1];
                  break;
              case "3":
                  productoEncontrado = listaProductos[2];
                  break;
              case "4":
                  productoEncontrado = listaProductos[3];
                  break;
              case "0":
                  // Finalizar la compra y mostrar el precio total
                  continuarComprando = false;
                  alert("El total de su compra es de $" + precioFinal + ". Muchas gracias, " + nombreUsuario + " ¡Que la disfrute!");
                  break;
              default:
                  // Si se ingresa una opción inválida, mostrar un mensaje de error
                  alert(nombreUsuario + ", su producto no ha sido encontrado. Elija una opción válida o escriba '0' para finalizar la compra.");
                  continue; // Volver al inicio del bucle para seleccionar nuevamente
          }
      } else {
          // Si se ingresó un nombre, buscar el producto correspondiente en la lista
          productoEncontrado = buscarProducto(productos);
          if (!productoEncontrado) {
              // Si el producto no se encuentra, mostrar un mensaje de error
              alert(nombreUsuario + ", su producto no ha sido encontrado. Elija una opción válida o escriba '0' para finalizar la compra.");
              continue; // Volver al inicio del bucle para seleccionar nuevamente
          }
      }

      // Si se encuentra el producto, agregar su precio al precio total y mostrar la información al usuario
      if (productoEncontrado) {
          precioFinal += productoEncontrado.precio;
          alert("Se agregó " + productoEncontrado.nombre + ". Precio: $" + productoEncontrado.precio + ". Precio total: $" + precioFinal);
      }
  }
}

// Iniciar el proceso de compra llamando a la función 'usuario'
usuario();