const buscaAPI = 'https://fernando-silvaa.github.io/API-Gravar-Digital/API%20Gravar-Digital.json';

buscarCardsAPI();

async function buscarCardsAPI() {
    const resostaAPI = await fetch(buscaAPI);
    cards = await resostaAPI.json();
    exibirCards(cards);
}