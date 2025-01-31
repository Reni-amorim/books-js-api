function exibirLivros(listaLivros) {
    eInserirLivros.innerHTML = '';
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