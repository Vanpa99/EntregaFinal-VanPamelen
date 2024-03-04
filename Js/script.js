let facturasDocena = 5000;
let bizcochosKg = 3000;
let masasFinasKg = 20000;
let alfajoresUnidad = 1000;
let precioFinal = 0;


let continuarComprando = true;

while (continuarComprando) {
    const productos = prompt("¡Bienvenido a Bakery! \n\nIngrese el número del producto que desea comprar:\n1. Facturas (Docena). \n2. Bizcochos (Kilo). \n3. Masas Finas (Kilo).  \n4. Alfajor Artesanal (Unidad). \n\n Para finalizar la compra ingrese 0:");

    switch (productos) {
        case "1":
            precioFinal += facturasDocena;
            alert("Se agregó Facturas (Docena). Precio: $" + facturasDocena + ". Precio total: $" + precioFinal );
        break;
        case "2":
          precioFinal += bizcochosKg;
          alert("Se agregó Bizcochos (Kilo). Precio: $" + bizcochosKg + ". Precio total: $" + precioFinal );            
        break;
        case "3":
          precioFinal += masasFinasKg;
          alert("Se agregó Masas Finas (Kilo). Precio: $" + masasFinasKg + ". Precio total: $" + precioFinal );            
        break;
        case "4":
          precioFinal += alfajoresUnidad;
          alert("Se agregó Alfajor Artesanal (Unidad). Precio: $" + alfajoresUnidad + ". Precio total: $" + precioFinal );
        break;
        case "0":
            continuarComprando = false;
            alert("El total de su compra es de $" + precioFinal + ". Muchas gracias ¡Que la disfrute!");
        break;
        default:
            alert("Producto no encontrado. Elija una opcion valida o escriba '0' para finalizar la compra.");
    }
}