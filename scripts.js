window.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("mostrarMensaje");
    const mensajeDiv = document.querySelector(".mensaje");
    const foto = document.querySelector(".foto");
    const mensajeTexto = document.querySelector(".mensaje p");
    const musica = document.getElementById("musica");

    const texto = `Un día te escuché hablar de LoL y me pregunté si tendría que acercarme a hablarte. Hoy por hoy fue la mejor decisión de mi vida; gracias a eso estamos hoy aquí.

Feliz cumpleaños, papu. Esto es un pequeño fragmento del aprecio que te tengo y solo quería recordártelo de una manera no convencional, algo más propio de mí.

Este año he pasado tantas cosas en mi vida que, sin ti, no hubiera podido darles frente. De verdad que estoy muy agradecido con tu amistad y no podría pedir más.

Espero la pases bien en tu día especial, y eso… disfruta tus hamburguesas, carnal, que vendrán muchas más.

Te quiero caleta, hermano. Gracias por todo.

Con cariño,
Julius 👻.`;

    boton.addEventListener("click", () => {
        boton.style.display = "none";
        foto.style.display = "block";
        setTimeout(() => foto.classList.add("mostrar"), 50);
        mensajeDiv.style.display = "block";
        setTimeout(() => mensaje.style.display = "block", 1500);

        // reproducir música (solo tras interacción del usuario)
        musica.play().catch(() => {
            console.log("El navegador bloqueó la reproducción automática.");
        });

        // efecto de escritura
        let i = 0;
        function escribir() {
            if (i < texto.length) {
                mensajeTexto.textContent += texto.charAt(i);
                i++;
                setTimeout(escribir, 50);
            }
        }
        escribir();
    });
});
