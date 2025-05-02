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
        const icons = card.querySelector('.icons');
        if (lang === 'en') {
            front.innerHTML = card.getAttribute('data-front-en') + '<div class="icons"><i class="' + card.getAttribute('data-icon1') + '" style="color: inherit;"></i><i class="' + card.getAttribute('data-icon2') + '" style="color: inherit;"></i></div>';
            back.textContent = card.getAttribute('data-back-en') || back.textContent;
        } else {
            front.innerHTML = front.getAttribute('data-original-front') + '<div class="icons"><i class="' + card.getAttribute('data-icon1') + '" style="color: inherit;"></i><i class="' + card.getAttribute('data-icon2') + '" style="color: inherit;"></i></div>';
            back.textContent = back.getAttribute('data-original-back') || back.textContent;
        }
    });
    // Armazena o conteúdo original no próximo clique, se ainda não armazenado
    flashcards.forEach(card => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        if (!front.getAttribute('data-original-front')) {
            front.setAttribute('data-original-front', front.textContent.replace(/<div[^>]*>.*?<\/div>/g, ''));
        }
        if (!back.getAttribute('data-original-back')) {
            back.setAttribute('data-original-back', back.textContent);
        }
    });
}

// Abre a primeira aba por padrão e define o subtítulo
document.getElementById('prompt-engineering').classList.add('active');
document.querySelector('.tab-button').classList.add('active');
document.getElementById('subtitle').textContent = document.querySelector('.tab-button').textContent;