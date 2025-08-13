// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    // Função para atualizar o relógio
    function atualizarRelogio() {
        const agora = new Date();
        const hr = agora.getHours().toString().padStart(2, '0');
        const min = agora.getMinutes().toString().padStart(2, '0');
        const s = agora.getSeconds().toString().padStart(2, '0');

        // Atualiza os elementos do DOM
        if (horas) horas.textContent = hr;
        if (minutos) minutos.textContent = min;
        if (segundos) segundos.textContent = s;
    }

    // Atualiza imediatamente
    atualizarRelogio();
    
    // Atualiza a cada segundo
    setInterval(atualizarRelogio, 1000);
});