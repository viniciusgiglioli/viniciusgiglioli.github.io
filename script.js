function openTab(tabId) {
    // Esconde todos os conteúdos das abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabId).style.display = 'block';

    // Adiciona a classe 'active' ao botão clicado
    event.target.classList.add('active');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

// Abre a primeira aba por padrão
document.getElementById('prompt-engineering').style.display = 'block';
document.querySelector('.tab-button').classList.add('active');