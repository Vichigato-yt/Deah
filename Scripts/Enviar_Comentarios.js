
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const edad = parseInt(document.getElementById('edad').value);
    const errorMessage = document.getElementById('error-message');
    
    if (isNaN(edad) || edad <= 0 || edad > 120) {
        errorMessage.innerText = '❌ Por favor, ingresa una edad válida entre 1 y 120 años.';
        errorMessage.style.display = 'block';
        errorMessage.style.backgroundColor = '#ffcccc';
        errorMessage.style.padding = '10px';
        errorMessage.style.borderRadius = '8px';
        errorMessage.style.marginTop = '10px';
        errorMessage.style.color = '#b30000';
    } else {
        alert('¡Gracias por tus comentarios! Se han enviado correctamente.');
        this.reset();
        errorMessage.style.display = 'none';
    }
});