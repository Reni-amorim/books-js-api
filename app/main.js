let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivros()
const eInserirLivros = document.getElementById('livros')
//const elementoParaInserirLivros = document.getElementById('livros')
async function getBuscaLivros () {
    const res = await fetch(endPointApi)
    livros = await res.json()
    console.table(livros)
    exibirLivros(livros)
}

function exibirLivros(listaLivros) {
    listaLivros.forEach(livro => {
        const livroDiv = `<div class="livro">
            <img src="${livro.imagem}" alt="${livro.titulo}">
            <h2>${livro.titulo}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>Preço: R$${livro.preco}</p>
            <p>Categoria: ${livro.categoria}</p>
          </div>`;
          eInserirLivros.innerHTML += livroDiv;
      })
}
/* Basta colocar as classes para mudar o padrao de fonte.
listaLivros.forEach(livro => {
    eInserirLivros.innerHTML += `
        <div class="livro">
          <img class="livro__imagens" src="${livro.imagem}"
            alt="${livro.alt}" />
          <h2 class="livro__titulo">${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">R$${livro.preco}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>
        `

    
})
  */