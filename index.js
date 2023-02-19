const nombre = document.getElementById("nombre")
const email = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const repetircontrasena = document.getElementById("repetircontrasena")
const formulario = document.getElementById("formulario")
const listInputs = document.querySelectorAll(".form-subtitulos input")

formulario.addEventListener("submit", {
    if (nombre.value.length < 1 ) {
        mostrarMensajeError ("name", "Rellene este campo")
    }
    if (email.value.length < 1 ) {
        mostrarMensajeError ("email", "Rellene este campo")
    }
    if (contrasena.value.length < 1 ) {
        mostrarMensajeError ("contrasena", "Rellene este campo")
    }
    if (repetircontrasena.value.length < 1 ) {
        mostrarMensajeError ("repetircontrasena", "Rellene este campo")
    }
} )