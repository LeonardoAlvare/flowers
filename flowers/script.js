// Array de razones
const razones = [
    "Por tu sonrisa que ilumina mi día",
    "Por tu forma de hacerme reír",
    "Por cómo me apoyas en todo momento",
    "Por tu inteligencia",
    "Por los momentos que compartimos juntos",
    "Por ser exactamente quien eres",
    "Por tu esfuerzo y dedicación diaria",
    "Por tu belleza que me deslumbra cada dia",
    "Por tu forma de amarme",
    "Por tu paciencia conmigo",
    "Por tu valentía",
    "Por tu bondad",
    "Por tu ternura",
    "Por tu fuerza",
    "Por tu comprensión",
    "Por ser tu",
    "Esto no es una razon, pero quieres serguir siendo mi novia?"
];

// Elemento donde mostrar las razones
const razonElement = document.getElementById('reason');
let currentIndex = 0;

// Función para cambiar la razón
function cambiarRazon() {
    // Animación de salida
    razonElement.style.opacity = 0;
    
    setTimeout(() => {
        // Cambiar el texto
        currentIndex = (currentIndex + 1) % razones.length;
        razonElement.textContent = razones[currentIndex];
        
        // Animación de entrada
        razonElement.style.opacity = 1;
    }, 500);
}

// Cambiar la razón cada 3 segundos
setInterval(() => {
    if (currentIndex === razones.length - 1) {
        // Si es el último índice, esperar 5 segundos
        setTimeout(cambiarRazon, 5000);
    } else {
        cambiarRazon();
    }
}, 3000);
