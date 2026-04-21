const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuButton.addEventListener('click', () => {
    const isActive = mobileMenu.classList.contains('active');

    if (!isActive) {
        mobileMenu.classList.add('active');
        menuIcon.innerText = 'close';
        // Pequeño efecto de rotación al icono
        menuIcon.style.transform = 'rotate(90deg)';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.innerText = 'menu';
        menuIcon.style.transform = 'rotate(0deg)';
    }
});

// Transición suave para el icono del botón
menuIcon.style.transition = 'all 0.3s ease';

// Cerrar al hacer clic en links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.innerText = 'menu';
        menuIcon.style.transform = 'rotate(0deg)';
    });
});

//whatsapp formulario
const waForm = document.getElementById('whatsapp-form');

if (waForm) { // Solo se ejecuta si el formulario existe en la página
    waForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;
        const phone = "34666998702";

        const text = `*Hola Edmilson!* 🚀%0A%0A` +
            `*Nombre:* ${name}%0A` +
            `*Email:* ${email}%0A%0A` +
            `*Mensaje:*%0A${message}`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
        window.open(whatsappUrl, '_blank');
    });
}

const privacyCheck = document.getElementById('privacy-check');
const whatsappBtn = document.getElementById('whatsapp-btn');

privacyCheck.addEventListener('change', () => {
    whatsappBtn.disabled = !privacyCheck.checked;
});

//whatsapp boton script
window.addEventListener('load', () => {
    const tooltip = document.getElementById('wa-tooltip');

    // Aparece el mensaje tras 3 segundos
    setTimeout(() => {
        tooltip.classList.remove('opacity-0', 'translate-y-2');
    }, 3000);

    // Desaparece al hacer scroll hacia abajo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            tooltip.classList.add('opacity-0', 'translate-y-2');
        }
    });
});

//script para cookies
const banner = document.getElementById('cookie-banner');
const settingsBtn = document.getElementById('cookie-settings-btn');
const acceptAllBtn = document.getElementById('accept-all-cookies');
const savePrefsBtn = document.getElementById('save-cookie-prefs');

// Checkboxes
const analyticsCheck = document.getElementById('cookie-analytics');
const marketingCheck = document.getElementById('cookie-marketing');

// Función para mostrar banner
function showBanner() {
    banner.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    settingsBtn.classList.add('hidden');
}

// Función para ocultar banner
function hideBanner() {
    banner.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    settingsBtn.classList.remove('hidden');
}

// Al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const savedPrefs = localStorage.getItem('cookie-preferences');
    if (!savedPrefs) {
        setTimeout(showBanner, 1500); // Aparece tras 1.5s
    } else {
        settingsBtn.classList.remove('hidden');
    }
});

// Aceptar Todas
acceptAllBtn.addEventListener('click', () => {
    const prefs = { analytics: true, marketing: true, timestamp: new Date().getTime() };
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    hideBanner();
    console.log("Cookies: Todas aceptadas");
});

// Guardar Selección
savePrefsBtn.addEventListener('click', () => {
    const prefs = {
        analytics: analyticsCheck.checked,
        marketing: marketingCheck.checked,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    hideBanner();
    console.log("Cookies: Preferencias guardadas", prefs);
});

// Botón flotante para reabrir
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        const saved = JSON.parse(localStorage.getItem('cookie-preferences') || '{}');
        if (analyticsCheck) analyticsCheck.checked = saved.analytics || false;
        if (marketingCheck) marketingCheck.checked = saved.marketing || false;
        showBanner();
    });
}

// Haz lo mismo con acceptAllBtn y savePrefsBtn si quieres ser ultra precavido
if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => { /* tu código */ });
}