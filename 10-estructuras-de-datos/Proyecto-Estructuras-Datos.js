const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto ${producto} ya está en la lista de compras.`);
        return;
    } else if (producto.trim() === "") {
        console.log("El producto no puede estar vacío.");
        return;
    }

    listaDeCompras.push(producto);
    console.log(`Producto agregado: ${producto}`);
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`El producto ${producto} ha sido eliminado de la lista de compras.`);
    } else {
        console.log(`El producto ${producto} no se encuentra en la lista de compras.`);
    }
};

const mostrarLista = () => {
    console.log("Lista de Compras:");
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
        return;
    }

    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto}`);
    });
};

// Pruebas
agregarProducto("Queso");
agregarProducto("Tarta");
agregarProducto("Galletas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche"); // Producto duplicado
agregarProducto(" "); // Producto vacío
eliminarProducto("Galletas"); // Elimina "Galletas" de la lista
eliminarProducto("Galleta"); // Elimina "Galletas" de la lista
mostrarLista(); // Muestra la lista de compras en la consola


/*const listaDeCompras = [];

const agregarProducto = (producto) => {
    // Validación de entrada
    if (typeof producto !== 'string' || producto.trim() === '') {
        console.log('Error: El producto debe ser un texto no vacío');
        return;
    }

    // Verificar duplicados (case insensitive)
    const productoNormalizado = producto.toLowerCase();
    const existeProducto = listaDeCompras.some(p => p.toLowerCase() === productoNormalizado);
    
    if (existeProducto) {
        console.log(`"${producto}" ya existe en la lista`);
        return;
    }

    // Agregar producto
    listaDeCompras.push(producto);
    console.log(`✔ "${producto}" agregado correctamente`);
    mostrarLista();
};

const eliminarProducto = (producto) => {
    // Buscar índice (case insensitive)
    const productoNormalizado = producto.toLowerCase();
    const indice = listaDeCompras.findIndex(p => p.toLowerCase() === productoNormalizado);

    if (indice === -1) {
        console.log(`✖ "${producto}" no encontrado en la lista`);
        return;
    }

    // Eliminar producto
    const [productoEliminado] = listaDeCompras.splice(indice, 1);
    console.log(`✔ "${productoEliminado}" eliminado correctamente`);
    mostrarLista();
};

const mostrarLista = () => {
    console.log('\n🛒 LISTA DE COMPRAS 🛒');
    
    if (listaDeCompras.length === 0) {
        console.log('(vacía)');
        return;
    }

    listaDeCompras.forEach((producto, i) => {
        console.log(`${i + 1}. ${producto}`);
    });
    
    console.log(`\nTotal: ${listaDeCompras.length} producto(s)`);
};

// Ejemplos de uso
agregarProducto('Manzanas');
agregarProducto('  leche  '); // Los espacios se recortan
agregarProducto('Pan integral');
agregarProducto('manzanas'); // No se agregará (duplicado)

eliminarProducto('  LeChe  '); // Se eliminará aunque tenga espacios y mayúsculas
mostrarLista();*/