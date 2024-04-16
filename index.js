let totalApagar = 0;

let cantidad = prompt("Ingrese la cantidad de productos: ");

while (cantidad < 0) {
  cantidad = prompt("Ingrese  cantidad correcta de productos: ");
}

let nombreProductos = [];
let cantidadProductos = [];
let precioProductos = [];
let subtotalProductos = [];



//
for (let index = 1; index <= cantidad; index++) {
  let nombre = prompt("¿Qué producto desea llevar?");
  nombreProductos.push(nombre);
  let cantidad = Number(prompt("¿Cuántas unidades? "));
  cantidadProductos.push(cantidad);
  let precio = Number(prompt("¿Cuánto sale cada unidad?"));
  precioProductos.push(precio);
  let subtotal = cantidad * precio;
  subtotalProductos.push(subtotal);
  totalApagar = totalApagar + subtotal;
}
alert("TOTAL A PAGAR: S/. " + totalApagar);

for (let i = 0; i < cantidad; i++) {
  console.log("-----PRODUCTO # " + (i + 1) + "-------");
  console.log("PRODUCTO : " + nombreProductos[i]);
  console.log("CANTIDAD : " + cantidadProductos[i]);
  console.log("PRECIO   : " + precioProductos[i]);
  console.log("SUBTOTAL : " + subtotalProductos[i]);
  console.log(" ");
}

console.log("TOTAL A PAGAR ES: S/. " + totalApagar);
