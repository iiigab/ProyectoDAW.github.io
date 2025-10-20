document.getElementById("contact-form").addEventListener("submit", function(e) {
    let valido = true;

    // limpiar mensajes previos
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // validar nombre
    const nombre = document.getElementById("name").value.trim();
    if (nombre.length < 3) {
        document.getElementById("error-name").textContent = "El nombre debe tener al menos 3 caracteres.";
        valido = false;
    }

    // validar correo
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById("error-email").textContent = "Ingrese un correo válido.";
        valido = false;
    }

    // validar mensaje
    const mensaje = document.getElementById("message").value.trim();
    if (mensaje.length < 10) {
        document.getElementById("error-message").textContent = "El mensaje debe tener al menos 10 caracteres.";
        valido = false;
    }

    if (!valido) {
        e.preventDefault(); // evita que se envíe si hay errores
    }
});
