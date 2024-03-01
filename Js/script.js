
// Productos con precio
const listaProd = {
    facturasDocena: 5000,
    bizcochosKg: 3000,
    masasFinasKg: 20000,
    alfajoresUnidad: 1000
};

let valorTotal = 0;
do {
    let elegir = parseInt(prompt("¡Bienvenido! ¿Que desea comprar?: \n1. Facturas x12    \n2. Bizcochos x Kg.    \n3. Masas Finas x Kg.  \n4. Alfajores Artesanales x Unidad.    \n5. Chipa x Unidad."));

    let producto;
    switch (elegir) {
        case 1:
            producto = "facturasDocena";
            break;
        case 2:
            producto = "bizcochosKg";
            break;
        case 3:
            producto = "masasFinasKg";
            break;
        case 4:
            producto = "alfajoresUnidad";
            break;
        default:
            alert("Producto no encontrado u opción inválida. Por favor, vuelva a intentarlo.");
    }

    if (producto) {
        valorTotal += listaProd[producto];
        alert("Ha seleccionado " + producto + ". Precio: $" + listaProd[producto]);
      }

      var continuar = parseInt(prompt("¿Desea comprar algo mas? \n1. Si \n2. No"));

} while (continuar === "si");
