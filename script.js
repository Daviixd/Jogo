const personagem = document.querySelector('.personagem');
const vilao = document.querySelector('.vilao')


const jump = () => {
    personagem.classList.add('jump');
    setTimeout(function () {
        personagem.classList.remove('jump');

    }, 500)
}
const loop = setInterval(() => {

    const vilaoPosition = vilao.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    console.log(personagemPosition);
    if (vilaoPosition <= 160 && vilaoPosition > 0 && personagemPosition < 70) {

        vilao.style.animation = 'none';
        vilao.style.left = `${vilaoPosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;
        personagem.src = 'gameOver.png';
        personagem.style.width = '150px';
        personagem.style.left = '50px'
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump)