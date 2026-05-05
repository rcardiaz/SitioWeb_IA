const contenedorTexto = document.getElementById('texto-ia');
const mensaje = "Explorando el futuro con Inteligencia Artificial...";
let indice = 0;

function escribirTexto() {
    if (indice < mensaje.length) {
        contenedorTexto.innerHTML += mensaje.charAt(indice);
        indice++;
        setTimeout(escribirTexto, 90); // Velocidad en milisegundos
    }
}

// Ejecutar la función cuando cargue la página
window.onload = escribirTexto;