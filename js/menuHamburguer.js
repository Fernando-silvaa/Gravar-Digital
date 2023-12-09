const menu = document.querySelector('.cabecalho__menu');  //menuHamburguer
const menuLista = document.querySelector('.cabecalho__lista');
const menuFechar = document.querySelector('.cabecalho__lista-X');
const menuAtivo = document.querySelector('.ativo');

menu.addEventListener('click', () => {
    menuLista.classList.toggle('ativo')
});

menuFechar.addEventListener('click', () => {
    menuLista.classList.toggle('ativo')
})