//LISTA DE COMPRAS 
let listaDeCompras = new Set();
//Agregar Producto
const agregarProducto = (producto) => {
    listaDeCompras.add(producto); 
    console.log(`${producto} ha sido añadido.`);
};
//Eliminar producto y verificar existencia
const eliminarProducto = (producto) => {
    if (listaDeCompras.delete(producto)) {
        console.log(`${producto} ha sido eliminado.`);        
    } else {
        console.log(`${producto} no existe en la lista.`);
    }
};
//Lista de productos
const mostrarLista = () => {
    if (listaDeCompras.size === 0) {
        console.log("La lista de compra está vacía.");
    } else {
        console.log("Lista de compra:");
        listaDeCompras.forEach((producto) => {
            console.log(`- ${producto}`);
        });
    }
};
//Agregar productos
agregarProducto("Pan");
agregarProducto("Jamaica");
agregarProducto("Galletas")
agregarProducto("Chocolate");
agregarProducto("Pastel");

mostrarLista();

eliminarProducto("Jamaica")

mostrarLista();
//producto inexistente
eliminarProducto("huevos");