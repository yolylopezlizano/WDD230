document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.application-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Obtener los valores de los campos del formulario
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const title = document.getElementById('title').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const businessName = document.getElementById('businessName').value;
        const membershipLevel = document.getElementById('membershipLevel').value;
        const description = document.getElementById('description').value;
        const timestamp = document.getElementById('timestamp').value;

        // Aquí podrías enviar los datos del formulario a través de AJAX si necesitas realizar algún procesamiento adicional en el servidor

        // Redireccionar al usuario a la página de agradecimiento
        window.location.href = 'thankyou.html';
    });
});
