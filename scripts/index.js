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


    const menuActivator = document.getElementById('menuActivator');
    const coloredHeader = document.querySelectorAll('.coloredIten');
    const menuActivatorPosition = menuActivator.getBoundingClientRect().top;
    const alturaDocument = document.getElementById('body').scrollHeight;
    const alturaSeccaoDiferencial = document.getElementById('section-diferencial').scrollHeight;

    const alturavalida = menuActivatorPosition + alturaSeccaoDiferencial;

    if (menuActivatorPosition < window.innerHeight / 1.5 ) {
        coloredHeader.forEach((iten) => {
            iten.classList.add('colored')
        });
    } else {

        coloredHeader.forEach((iten) => {
            iten.classList.remove('colored')
        });
    }

});

//Para adicionar animação ao banner-text quando a pagina for carregada
window.addEventListener('DOMContentLoaded', function () {
    const bannertext = document.querySelector('#banner-content-h3');
    const bannertext2 = document.querySelector('#banner-content-h5');
    const bannertext3 = document.querySelector('#banner-content-p');
    const bannerbtn3 = document.querySelector('#banner-content-btn');
    if (bannertext) {
        bannertext.classList.add('visible');
        bannertext2.classList.add('visible');
        bannertext3.classList.add('visible');
        bannerbtn3.classList.add('visible');
    }
});



//par abrir o menu abaixo
function abrirMenu() {
    document.getElementById('menu').classList.toggle('hidden-menu');
    document.getElementById('icon-close-menu-id').classList.toggle('hidden-menu');

    setTimeout(() => {
        document.getElementById('icon-close-menu-id').classList.toggle('visivel');
        document.getElementById('nav-item-set-id').classList.toggle('visivel');
    }, 1);

}
function abrirModal() {
    document.getElementById('modal-set').classList.toggle('hidden-modal');

    setTimeout(() => {
        document.getElementById('video').classList.toggle('visivel');
    }, 1);

}