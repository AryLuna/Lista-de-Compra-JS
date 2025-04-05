//id, nombre, categoria, precio, envio, oferta, stock, vendidos
//Verificar si hay productos en oferta
//Encontrar el primer producto sin stock
//Verficar cuales productos tienen envio gratis
//Calcular el valor total de tu inventario
//Calcular el numero total de productos vendidos
//Obtener todos los producto de una categoria

const productos = [
    {id: 85458, articulo: "calcetas", categoria: "lenceria", precio: 99, status: "oferta", envio: "envio gratis", stock: 565, ventas: 77},
    {id: 74512, articulo: "celular", categoria: "electronica", precio: 5999, status: "sin oferta", envio: "con costo adicional", stock: 50, ventas: 77},
    {id: 12547, articulo: "television", categoria: "electronica", precio: 10599, status: "oferta", envio: "con costo adicional", stock: 50, ventas: 3},
    {id: 35265, articulo: "calcetas", categoria: "lenceria", precio: 99, status: "sin oferta", envio: "envio gratis", stock: 565, ventas: 77},
    {id: 19032, articulo: "agua", categoria: "abarrotes", precio: 20, status: "oferta", envio: "con costo adicional", stock: 0, ventas: 500}
];

//Verificar si hay productos en oferta usando filter
function verificarOferta() {
    return productos.filter(producto => producto.status === "oferta");
}
console.log("Productos en oferta:", verificarOferta());

//Encontrar el primer producto sin stock usando find
function primerProductoSinStock() {
    return productos.find(producto => producto.stock === 0);
}
console.log("Primer producto sin stock:", primerProductoSinStock());

// Verificar cuales productos tienen envio gratis usando filter
function productosConEnvioGratis() {
    return productos.filter(producto => producto.envio === "envio gratis");
}
console.log("Productos con envío gratis:", productosConEnvioGratis());

//Calcular el valor total de tu inventario usando reduce
function calcularValorInventario() {
    return productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
}
console.log("Valor total de inventario:", calcularValorInventario());

//Calcular el número total de productos vendidos usando reduce
function totalProductosVendidos() {
    return productos.reduce((total, producto) => total + producto.ventas, 0);
}
console.log("Número total de productos vendidos:", totalProductosVendidos());

//Obtener todos los productos de una categoría usando filter
function obtenerProductosPorCategoria(categoria) {
    return productos.filter(producto => producto.categoria === categoria);
}

console.log("Productos de la categoría 'electronica':", obtenerProductosPorCategoria("electronica"));
