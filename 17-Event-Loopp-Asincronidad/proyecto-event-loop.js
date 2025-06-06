const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"

    const statusPromise = new Promise((resolve) => {
        setTimeout(() => {
            updateOrderStatus(order, 'Completado');
            alert(`Pedido #${order.id} ha sido completado.`);
        }, 3000); // Simula un tiempo de preparación de 3 segundos
    });
    const message = await statusPromise;
    console.log(message);
}
