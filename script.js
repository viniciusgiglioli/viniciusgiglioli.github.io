function openTab(tabId) {
    // Esconde todos os conteúdos das abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Adiciona a classe 'active' ao botão clicado
    event.target.classList.add('active');

    // Atualiza o subtítulo com o nome da aba
    const subtitle = document.getElementById('subtitle');
    subtitle.textContent = event.target.textContent;
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

// Abre a primeira aba por padrão e define o subtítulo
document.getElementById('prompt-engineering').classList.add('active');
document.querySelector('.tab-button').classList.add('active');
document.getElementById('subtitle').textContent = document.querySelector('.tab-button').textContent;