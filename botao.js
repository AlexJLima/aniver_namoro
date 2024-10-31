const video = document.getElementById('myVideo');
const toggleButton = document.getElementById('toggleTimeline');
const timelineContainer = document.getElementById('timelineContainer');

// Evento para verificar o tempo do vídeo
video.addEventListener('timeupdate', function() {
    const timeLeft = video.duration - video.currentTime;
    // Exibir o botão quando faltarem 10 segundos
    if (timeLeft <= 10) {
        toggleButton.style.display = 'block';
    } else {
        toggleButton.style.display = 'none';
    }
});

toggleButton.addEventListener('click', function() {
    if (timelineContainer.style.display === 'none') {
        timelineContainer.style.display = 'block';
        this.textContent = 'Ocultar Linha do Tempo';
    } else {
        timelineContainer.style.display = 'none';
        this.textContent = 'Mostrar Linha do Tempo';
    }
});

  