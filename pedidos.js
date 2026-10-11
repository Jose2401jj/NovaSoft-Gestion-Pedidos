const CLAVE_PEDIDOS = "novasoft_pedidos";

function obtenerPedidos() {
    try {
        const datos = localStorage.getItem(CLAVE_PEDIDOS);
        return datos ? JSON.parse(datos) : [];
    } catch (error) {
        console.error("Error al cargar pedidos:", error);
        return [];
    }
}

function registrarPedido(cliente, producto, cantidad) {
    const cantidadNumero = Number(cantidad);

    if (
        !cliente.trim() ||
        !producto.trim() ||
        !Number.isInteger(cantidadNumero) ||
        cantidadNumero <= 0
    ) {
        throw new Error("Los datos del pedido no son válidos.");
    }

    const nuevoPedido = {
        id: Date.now(),
        cliente: cliente.trim(),
        producto: producto.trim(),
        cantidad: cantidadNumero,
        estado: "Pendiente"
    };

    const pedidos = obtenerPedidos();
    pedidos.push(nuevoPedido);

    localStorage.setItem(
        CLAVE_PEDIDOS,
        JSON.stringify(pedidos)
    );

    return nuevoPedido;
}
