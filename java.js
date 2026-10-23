document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionar elementos del DOM
    const banner = document.getElementById('cookie-banner');
    const btnAceptar = document.getElementById('aceptar-btn');
    const btnCerrar = document.getElementById('cerrar-btn');

    // 2. Verificar si el usuario ya aceptó las cookies anteriormente
    const consentimientoGuardado = localStorage.getItem('cookiesAceptadas');

    // 3. Lógica de visualización
    if (consentimientoGuardado === 'true') {
        // Si ya aceptó, el banner se queda con la clase 'oculto'
        banner.classList.add('oculto');
    } else {
        // Si no ha aceptado, le quitamos la clase 'oculto' para que aparezca
        banner.classList.remove('oculto');
    }

    // 4. Manejo del evento de clic en "Aceptar"
    btnAceptar.addEventListener('click', () => {
        // Guardamos el consentimiento en localStorage
        localStorage.setItem('cookiesAceptadas', 'true');
        
        // Ocultamos el banner
        banner.classList.add('oculto');
    });

    // 5. Manejo del evento de clic en la 'X' (Opcional)
    // En este caso solo lo oculta, pero no guarda en localStorage
    // por lo que volverá a salir si recarga la página.
    btnCerrar.addEventListener('click', () => {
        banner.classList.add('oculto');
    });

});