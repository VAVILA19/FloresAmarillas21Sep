
function moveButton() {
    const button = document.querySelector('.botonMovi');
    
    // Obtiene el tamaño de la ventana
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    
    // Calcula posiciones aleatorias dentro de la ventana
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.top = randomY + 'px';
    button.style.left = randomX + 'px';
}


