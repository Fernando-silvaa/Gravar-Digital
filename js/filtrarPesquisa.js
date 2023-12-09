const inputPesquisa = document.querySelector('.cabecalho__pesquisar')

inputPesquisa.addEventListener('input', () => {
    const produtos = document.querySelectorAll('.produto__card');
    const valorFiltro = inputPesquisa.value.toLowerCase();

    produtos.forEach((produto) => {
        const tituloProduto = produto.querySelector('.nome').textContent.toLowerCase();
        produto.style.display = valorFiltro ? tituloProduto.includes(valorFiltro) ? "block" : "none" : "block"
    });
});