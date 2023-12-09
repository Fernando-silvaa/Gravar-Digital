const categoriaMenuHamburguer = document.querySelectorAll('.cabecalho__lista-item');
categoriaMenuHamburguer.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener('click', () => filtrarCategoria(nomeCategoria))
});

const botaoCategoria = document.querySelectorAll('.busca__lista-item')
botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener('click', () => filtrarCategoria(nomeCategoria))
});

function filtrarCategoria(filtro) {
    const produtos = document.querySelectorAll('.produto__card');
    for(let produto of produtos) {
        let categoria = produto.querySelector('.categoria').textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != "tudo") {
            produto.style.display = "none"
        } else {
            produto.style.display = "block";
        }
    }
}