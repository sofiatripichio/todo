document.addEventListener('DOMContentLoaded', function() {
    const productos = [
        { nombre: 'Detergente', descripción: "Detergente ecológico", precio: 1.20, stock: 100, imagen: 'imagenes/detergente ecologico.jpg'},
        { nombre: 'Pan', precio: 0.90, stock: 50, imagen: 'pan.jpg' },
        { nombre: 'Leche', precio: 1.50, stock: 75, imagen: 'leche.jpg' }
    ];

    const productosDiv = document.getElementById('productos');

    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto'; // Asignar la clase 'producto'
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <p class="producto-nombre">${producto.nombre} <br> ${producto.descripción} <br> $${producto.precio.toFixed(2)}</p>
            <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
            <input type="number" id="cantidad-${index}" value="0" min="0" max="${producto.stock}" data-stock="${producto.stock}" class="producto-input">
        `;
        productosDiv.appendChild(productoDiv);
    });
});

function realizarCompra() {
    const productos = [
        { nombre: 'Manzanas', precio: 1.20, stock: 100 },
        { nombre: 'Pan', precio: 0.90, stock: 50 },
        { nombre: 'Leche', precio: 1.50, stock: 75 },
        { nombre: 'Mermelada', precio: 1.50, stock: 75 }
    ];

    let totalCompra = 0;
    let error = false;

    productos.forEach((producto, index) => {
        const cantidadInput = document.getElementById(`cantidad-${index}`);
        const cantidad = parseInt(cantidadInput.value, 10);
        const stock = parseInt(cantidadInput.dataset.stock, 10);

        if (isNaN(cantidad) || cantidad < 0 || cantidad > stock) {
            error = true;
        } else {
            totalCompra += cantidad * producto.precio;
        }
    });

    const resultadoDiv = document.getElementById('resultado');
    if (error) {
        resultadoDiv.innerHTML = '<p style="color: red;">Error: Cantidad inválida en uno o más productos.</p>';
    } else {
        resultadoDiv.innerHTML = `<p>Total a pagar: $${totalCompra.toFixed(2)}</p>`;
    }
}


