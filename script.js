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
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function switchLanguage(lang) {
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        if (lang === 'en') {
            front.textContent = card.getAttribute('data-front-en') || front.textContent;
            back.textContent = card.getAttribute('data-back-en') || back.textContent;
        } else {
            // Reverte para o conteúdo original (português), que está no HTML
            front.textContent = front.getAttribute('data-original-front') || front.textContent;
            back.textContent = back.getAttribute('data-original-back') || back.textContent;
        }
    });
    // Armazena o conteúdo original no próximo clique, se ainda não armazenado
    flashcards.forEach(card => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        if (!front.getAttribute('data-original-front')) {
            front.setAttribute('data-original-front', front.textContent);
        }
        if (!back.getAttribute('data-original-back')) {
            back.setAttribute('data-original-back', back.textContent);
        }
    });
}

// Abre a primeira aba por padrão
document.getElementById('prompt-engineering').classList.add('active');
document.querySelector('.tab-button').classList.add('active');