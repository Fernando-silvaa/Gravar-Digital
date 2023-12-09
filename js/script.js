const cardsContainer = document.querySelector('.produtos__container');

let cards = [];

function exibirCards(listaCards) {
    listaCards.forEach(card => {
        if (card.categoria == "") {
            throw new Error("Card não tem categoria")
        }

        cardsContainer.innerHTML += `
        <ul class="produto__card">
            <li class="produto__imagem">
                <img class="imagem" src="${card.imagem}" alt="${card.alt}">
            </li>
            <li class="produto__nome">
                <span class="nome">${card.titulo}</span>
            </li>
            <li class="produto__descricao">
                <p class="descricao">${card.descricao}</p>
            </li>
            <li class="produto__preco">
                <span class="preco">${card.preco}</span>
            </li>
            <li class="produto__preco">
                <p class="categoria" hidden>${card.categoria}</span>
            </li>
            <li>
                <button class="produto__btn" type="submit">Comprar</button>
            </li>
        </ul>
        `
    })
}