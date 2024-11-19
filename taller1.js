const inventario = {
    "Televisor": { cantidad: 10, precio: 300 },
    "Laptop": { cantidad: 5, precio: 800 },
    "Smartphone": { cantidad: 15, precio: 500 },
};


function agregarProducto(nombre, cantidad, precio) {
    if (inventario[nombre]) {
        console.log(`El producto "${nombre}" ya existe en el inventario.`);
    } else {
        inventario[nombre] = { cantidad, precio };
        console.log(`Producto "${nombre}" agregado con éxito.`);
    }
}

function actualizarCantidad(nombre, cantidad) {
    if (inventario[nombre]) {
        inventario[nombre].cantidad += cantidad;
        console.log(`Cantidad actualizada: "${nombre}" ahora tiene ${inventario[nombre].cantidad} unidades.`);
    } else {
        console.log(`El producto "${nombre}" no fue encontrado en el inventario.`);
    }
}

function calcularValorTotal() {
    let valorTotal = 0;
    for (const producto in inventario) {
        const { cantidad, precio } = inventario[producto];
        valorTotal += cantidad * precio;
    }
    console.log(`El valor total del inventario es: $${valorTotal}`);
    return valorTotal;
}

function buscarProducto(nombre) {
    if (inventario[nombre]) {
        const { cantidad, precio } = inventario[nombre];
        console.log(`Producto encontrado: "${nombre}" - Cantidad: ${cantidad}, Precio: $${precio}`);
    } else {
        console.log(`El producto "${nombre}" no fue encontrado en el inventario.`);
    }
}


// Escenario de Pruebas

// Inicializa el inventario inicial
console.log("Inventario Inicial:", inventario);

// Agrega un nuevo producto al inventario
console.log("\nAgregando producto...");
agregarProducto("Monitor", 15, 200);
agregarProducto("Laptop", 5, 900); // Producto ya existente

// Actualiza la cantidad de un producto existente
console.log("\nActualizando cantidad...");
actualizarCantidad("Laptop", 5); // Incrementa Laptop en 5 unidades
actualizarCantidad("Tablet", 10); // Producto no existente

// Calcula el valor total del inventario
console.log("\nCalculando valor total del inventario...");
calcularValorTotal();

// Busca un producto en el inventario por nombre
console.log("\nBuscando productos...");
buscarProducto("Monitor"); // Producto existente
buscarProducto("Tablet");  // Producto no existente

// Inventario final para confirmar los cambios
console.log("\nInventario Final:", inventario);