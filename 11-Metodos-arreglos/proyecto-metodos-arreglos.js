const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


const priceLess100 = productos.filter(producto => producto.precio < 100);
console.log("Productos menores de $100:", priceLess100);


const alphabeticalOrder = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", alphabeticalOrder);


const justNames = productos.map(_name => _name.nombre);
console.log("Nombres de productos:", justNames);

const existCategory = productos.some( category => category.categoria === "Ropa");
console.log("¿Hay productos de ropa?", existCategory);

const allElectronics = productos.every( category => category.categoria === "Electrónica");
console.log("¿Todos los productos son electrónicos?", allElectronics);