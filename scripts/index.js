document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const header = document.querySelector('#header');
    if (header) {
        document.addEventListener('scroll', () => {
            window.scrollY > 30 ? header.classList.add('sticked') : header.classList.remove('sticked');
        });
    }
});

/*Adicionar Animação*/
// para adicionar animação qunado o evento vor scroll
window.addEventListener('scroll', function () {
    const boxes = document.querySelectorAll('.animado');

    // Verifica se o elemento está visível na tela
    boxes.forEach(function (box) {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;  // O fator 1.5 vai fazer o efeito acontecer antes de estar no centro total

        // Se o topo do elemento estiver dentro da janela de visualização
        if (boxPosition < screenPosition) {
            box.classList.add('visible');
        }
    });
});

//Para adicionar animação ao banner-text quando a pagina for carregada
window.addEventListener('DOMContentLoaded', function () {
    const bannertext = document.querySelector('#banner-content');
    if (bannertext) {
        bannertext.classList.add('visible');
    }
});