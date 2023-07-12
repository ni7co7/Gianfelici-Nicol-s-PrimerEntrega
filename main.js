             // Calcula el importe total a pagar aplicando descuento según cantidad de productos comprados //


                                // INgresar cantidad de productos comprados//

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados:"));


                                // Precio unitario de cada producto//

const precioUnitario = 10;
                                // Calcular el subtotal

let subtotal = cantidadProductos * precioUnitario;

                                // Aplicar descuento basado en la cantidad de productos comprados //
let descuento = 0;
if (isNaN(cantidadProductos)) {
    console.log("Por favor, ingrese un número válido.");  // Ingrese un valor numérico //
}else if (cantidadProductos >= 10) {
    descuento = subtotal * 0.2;      // 20% de descuento //
}else if (cantidadProductos >= 5 && cantidadProductos <10) {
  descuento = subtotal * 0.1;        // 10% de descuento //
  console.log("Comprando 10 o mas productos obtenés 20 % de descuento")
}else if (cantidadProductos >= 3 && cantidadProductos <5) {
    console.log("Comprando 5 o mas productos obtenés 10 % de descuento") 
}else if (cantidadProductos > 0 && cantidadProductos <=2) {
  console.log("Comprando 3 o mas productos comenzás a obtener 5 % de descuento")    
   
}else if (cantidadProductos === 0 ) {
    console.log("Ingrese mínimo 1 producto")       // No puede ingresar 0 //
}
    
                                 // Calcular el total a pagar después de aplicar el descuento //

let total = subtotal - descuento;
                                 // Mostrar los resultados

console.log("Cantidad de productos comprados: " + cantidadProductos);
console.log("Subtotal: $" + subtotal);
console.log("Descuento: $" + descuento);
console.log("Total a pagar: $" + total);
