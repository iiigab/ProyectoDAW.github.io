document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formBoletos");
    const resumen = document.getElementById("resumen");

    // Escucha el evento de envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recargar la página

        // Obtener valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const funcion = document.getElementById("funcion").options[document.getElementById("funcion").selectedIndex].text;
        const tipo = document.getElementById("tipo").options[document.getElementById("tipo").selectedIndex].text;
        const cantidad = parseInt(document.getElementById("cantidad").value);

        // Calcular precio estimado
        let precioUnitario = 0;
        switch (tipo.toLowerCase()) {
            case "general":
                precioUnitario = 5;
                break;
            case "preferencial":
                precioUnitario = 8;
                break;
            case "vip":
                precioUnitario = 12;
                break;
        }

        const total = precioUnitario * cantidad;

        // Mostrar el resumen
        resumen.innerHTML = `
            <h2>Resumen de compra</h2>
            <div class="resumen-detalle">
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Función:</strong> ${funcion}</p>
                <p><strong>Tipo de asiento:</strong> ${tipo}</p>
                <p><strong>Cantidad de boletos:</strong> ${cantidad}</p>
                <p><strong>Precio unitario:</strong> $${precioUnitario.toFixed(2)}</p>
                <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
            </div>
            <p class="nota">* Este es un resumen demostrativo. El pago se habilitará próximamente.</p>
        `;
    });
});
