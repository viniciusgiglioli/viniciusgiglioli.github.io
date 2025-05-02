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
        if (lang === 'en') {
            front.textContent = card.getAttribute('data-front-en') || front.textContent;
            back.textContent = card.getAttribute('data-back-en') || back.textContent;
            // Adiciona ícones para o inglês
            const icon1 = card.getAttribute('data-icon1');
            const icon2 = card.getAttribute('data-icon2');
            front.innerHTML = `<i class="${icon1}" style="color: inherit;"></i><i class="${icon2}" style="color: inherit;"></i> ${front.textContent}`;
        } else {
            // Reverte para o conteúdo original (português)
            front.textContent = front.getAttribute('data-original-front') || front.textContent;
            back.textContent = back.getAttribute('data-original-back') || back.textContent;
            // Adiciona ícones para o português
            const icon1 = card.getAttribute('data-icon1');
            const icon2 = card.getAttribute('data-icon2');
            front.innerHTML = `<i class="${icon1}" style="color: inherit;"></i><i class="${icon2}" style="color: inherit;"></i> ${front.textContent}`;
        }
    });
    // Armazena o conteúdo original no próximo clique, se ainda não armazenado
    flashcards.forEach(card => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        if (!front.getAttribute('data-original-front')) {
            front.setAttribute('data-original-front', front.textContent.replace(/<i[^>]*>.*?<\/i>/g, ''));
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