// Definir productos y stock
const productos = [
    { nombre: "Producto 1", precio: 10, stock: 5 },
    { nombre: "Producto 2", precio: 15, stock: 3 },
    { nombre: "Producto 3", precio: 20, stock: 2 },
];

const productList = document.getElementById('product-list');
const buyButton = document.getElementById('buy-button');
const message = document.getElementById('message');

// Cargar productos en la lista
productos.forEach((producto, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${producto.nombre} - $${producto.precio} 
        <input type="number" id="cantidad-${index}" min="0" max="${producto.stock}" value="0">
        (Stock: ${producto.stock})
    `;
    productList.appendChild(listItem);
});

// Manejar la compra
buyButton.addEventListener('click', () => {
    let total = 0;
    let error = false;

    productos.forEach((producto, index) => {
        const cantidad = parseInt((document.getElementById(`cantidad-${index}`) as HTMLInputElement).value);
        if (cantidad < 0 || cantidad > producto.stock) {
            error = true;
        } else {
            total += cantidad * producto.precio;
        }
    });

    if (error) {
        message.textContent = "Error: Cantidad de productos incorrecta.";
    } else {
        message.textContent = `Total de la compra: $${total}`;
    }
});
