const btnNo = document.getElementById('btn-no');
const pantalla = document.getElementById('pantalla-billar');

function moverBoton() {
    if (btnNo.style.position !== 'absolute') {
        btnNo.style.position = 'absolute';
    }

    const limitesTarjeta = pantalla.getBoundingClientRect();
    const paddingTarjeta = 40;

    const anchoMaximo = limitesTarjeta.width - btnNo.offsetWidth - (paddingTarjeta * 2);
    const altoMaximo = limitesTarjeta.height - btnNo.offsetHeight - (paddingTarjeta * 2);

    const x = Math.random() * anchoMaximo - (anchoMaximo / 2);
    const y = Math.random() * altoMaximo - (altoMaximo / 2) + 50;

    btnNo.style.left = '50%';
    btnNo.style.top = '50%';
    btnNo.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
}

btnNo.addEventListener('mouseenter', moverBoton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moverBoton();
});

function aceptarPropuesta() {
    pantalla.classList.add('oculto');
    crearLluviaCorazones();

    // 2. Cambiar el diseño visual primero (La sorpresa romántica)
    setTimeout(() => {
        document.body.style.backgroundColor = '#7a0832';

        pantalla.innerHTML = `
            <h2>¡Siii! ❤️ Me haces feliz</h2>
            <p>Ya es un hecho Arlette, nos vemos este domingo en nuestra cita en el billar. 🎱✨</p>
        `;

        pantalla.classList.remove('oculto');
    }, 600);

    setTimeout(() => {
        const tuTelefono = "526311908032";
        const mensaje = encodeURIComponent("¡Siii! ¡Acepto ir al billar contigo! 🎱❤️");

        window.open(`https://api.whatsapp.com/send?phone=${tuTelefono}&text=${mensaje}`, '_blank');
    }, 5000); 
}

// --- 3. SISTEMA DE LLUVIA DE CORAZONES ---
function crearLluviaCorazones() {
    const intervalo = setInterval(() => {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-flotante');

        corazon.style.left = Math.random() * 100 + 'vw';

        const tamaño = Math.random() * 30 + 20;
        corazon.style.width = tamaño + 'px';
        corazon.style.height = tamaño + 'px';

        corazon.style.animationDuration = Math.random() * 2 + 3 + 's';

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);

    }, 150);

    setTimeout(() => {
        clearInterval(intervalo);
    }, 20000);
}