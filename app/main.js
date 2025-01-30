let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivros()
const eInserirLivros = document.getElementById('livros')
//const elementoParaInserirLivros = document.getElementById('livros')
async function getBuscaLivros () {
    const res = await fetch(endPointApi)
    livros = await res.json()
    let livrosDesc = aplicarDesconto(livros)
    exibirLivros(livrosDesc)
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