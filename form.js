
            // Esperamos a que el DOM esté cargado
            document.addEventListener('DOMContentLoaded', () => {
            // 1. Referencias a los elementos del DOM
            const form = document.querySelector('#ia-form');
            const slider = document.querySelector('input[type="range"]');

            // 2. Función para manejar el envío del formulario
            const handleSubmit = (event) => {
            event.preventDefault(); // Evita que la página se recargue
                // Capturamos los datos usando FormData
            const formData = new FormData(event.target);
            
            const respuestas = {
                definicion: formData.get('definicion-ia'), // Pregunta 1
                herramienta: formData.get('herramienta-ia'), // Pregunta 2
                confianza: formData.get('confianza-nivel')   // Pregunta 3
            };

            // Mostramos el resultado en consola (o podrías enviarlo a una API)
            console.log("Datos recolectados:", respuestas);
            alert("¡Gracias! Tus respuestas han sido registradas.");
        };
        // 3. Escuchar el evento submit
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});
 
