const themeButton = document.getElementById('cambiar-tema');
const contrastButton = document.getElementById('cambiar-contraste');

let isManualDarkMode = false;
let isManualHighContrast = false;

themeButton.addEventListener('click', () => {
    isManualDarkMode = !isManualDarkMode;
    document.body.classList.toggle('manual-dark', isManualDarkMode);
    themeButton.setAttribute('aria-pressed', isManualDarkMode.toString());
    updateLabels();
});

contrastButton.addEventListener('click', () => {
    isManualHighContrast = !isManualHighContrast;
    document.body.classList.toggle('manual-high-contrast', isManualHighContrast);
    contrastButton.setAttribute('aria-pressed', isManualHighContrast.toString());
    updateLabels();
});

function updateLabels() {
    themeButton.setAttribute(
        'aria-label',
        isManualDarkMode ? 'Desactivar modo nocturno' : 'Activar modo nocturno'
    );
    contrastButton.setAttribute(
        'aria-label',
        isManualHighContrast
            ? 'Desactivar alto contraste'
            : 'Activar alto contraste'
    );
}

// Inicializar etiquetas ARIA según estado inicial
updateLabels();
