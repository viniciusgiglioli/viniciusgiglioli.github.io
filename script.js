function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
    const subtitle = document.getElementById('subtitle');
    subtitle.textContent = event.target.textContent;

    // Fecha o menu automaticamente no mobile após selecionar um tema
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function switchLanguage(lang) {
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        const icon1 = card.getAttribute('data-icon1');
        const icon2 = card.getAttribute('data-icon2');
        const color = front.querySelector('i')?.style.color || 'inherit';

        if (!card.hasAttribute('data-original-front')) {
            card.setAttribute('data-original-front', front.textContent.replace(/<div[^>]*>.*?<\/div>/g, ''));
            card.setAttribute('data-original-back', back.textContent);
        }

        if (lang === 'en') {
            front.innerHTML = (card.getAttribute('data-front-en') || front.textContent) + 
                `<div class="icons"><i class="${icon1}" style="color: ${color};"></i><i class="${icon2}" style="color: ${color};"></i></div>`;
            back.textContent = card.getAttribute('data-back-en') || back.textContent;
        } else {
            front.innerHTML = card.getAttribute('data-original-front') + 
                `<div class="icons"><i class="${icon1}" style="color: ${color};"></i><i class="${icon2}" style="color: ${color};"></i></div>`;
            back.textContent = card.getAttribute('data-original-back') || back.textContent;
        }
    });
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('hidden');
}

const audio = document.getElementById('lofi-audio');
const playPauseButton = document.getElementById('play-pause-button');

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function adjustVolume() {
    const volumeSlider = document.getElementById('volume-slider');
    audio.volume = volumeSlider.value;
}

// Inicializa o site com o sidebar escondido no mobile
window.onload = function() {
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('hidden');
    }
    document.getElementById('prompt-engineering').classList.add('active');
    document.querySelector('.tab-button').classList.add('active');
    document.getElementById('subtitle').textContent = document.querySelector('.tab-button').textContent;

    // Define o volume inicial
    audio.volume = 0.5;
};