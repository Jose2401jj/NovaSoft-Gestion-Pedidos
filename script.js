
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formPedido");
    const listaPedidos = document.getElementById("listaPedidos");

    function mostrarPedidos() {
        const pedidos = obtenerPedidos();
        listaPedidos.innerHTML = "";

        if (pedidos.length === 0) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");

            celda.colSpan = 4;
            celda.textContent = "No hay pedidos registrados";

            fila.appendChild(celda);
            listaPedidos.appendChild(fila);
            return;
        }

        pedidos.forEach(pedido => {
            const fila = document.createElement("tr");

            [
                pedido.cliente,
                pedido.producto,
                pedido.cantidad,
                pedido.estado
            ].forEach(valor => {
                const celda = document.createElement("td");
                celda.textContent = valor;
                fila.appendChild(celda);
            });

            listaPedidos.appendChild(fila);
        });
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const cliente = document.getElementById("cliente").value;
        const producto = document.getElementById("producto").value;
        const cantidad = document.getElementById("cantidad").value;

        try {
            registrarPedido(cliente, producto, cantidad);
            mostrarPedidos();
            formulario.reset();
            alert("Pedido registrado correctamente");
        } catch (error) {
            alert(error.message);
        }
    });

    mostrarPedidos();
});
