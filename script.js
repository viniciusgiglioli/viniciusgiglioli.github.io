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

    // Fecha o menu automaticamente após selecionar um tema
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function switchLanguage(lang) {
    const hiperfocoButton = document.getElementById('hiperfoco-button');
    const flashcards = document.querySelectorAll('.flashcard');
    if (lang === 'en') {
        if (videoPaused()) {
            hiperfocoButton.textContent = 'Hyperfocus';
            hiperfocoButton.innerHTML = '<i class="fas fa-headphones"></i> Hyperfocus';
        } else {
            hiperfocoButton.textContent = 'Pause';
            hiperfocoButton.innerHTML = '<i class="fas fa-headphones"></i> Pause';
        }
    } else {
        if (videoPaused()) {
            hiperfocoButton.textContent = 'Hiperfoco';
            hiperfocoButton.innerHTML = '<i class="fas fa-headphones"></i> Hiperfoco';
        } else {
            hiperfocoButton.textContent = 'Pausar';
            hiperfocoButton.innerHTML = '<i class="fas fa-headphones"></i> Pausar';
        }
    }
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

const hiperfocoButton = document.getElementById('hiperfoco-button');
const lofiVideo = document.getElementById('lofi-video');

function videoPaused() {
    return lofiVideo.src.includes('mute=1') || lofiVideo.src.includes('autoplay=0');
}

function toggleHiperfoco() {
    if (videoPaused()) {
        // Ativa o vídeo
        lofiVideo.src = lofiVideo.src.replace('mute=1', 'mute=0').replace('autoplay=0', 'autoplay=1');
        lofiVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        hiperfocoButton.classList.add('pressed');
        switchLanguage(document.documentElement.lang === 'en' ? 'en' : 'pt');
    } else {
        // Pausa o vídeo
        lofiVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        hiperfocoButton.classList.remove('pressed');
        switchLanguage(document.documentElement.lang === 'en' ? 'en' : 'pt');
    }
}

// Inicializa o site com o sidebar escondido
window.onload = function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hidden');
    document.getElementById('prompt-engineering').classList.add('active');
    document.querySelector('.tab-button').classList.add('active');
    document.getElementById('subtitle').textContent = document.querySelector('.tab-button').textContent;

    // Define o comportamento inicial
    hiperfocoButton.onclick = toggleHiperfoco;
};