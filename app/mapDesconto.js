function aplicarDesconto(livros) {
    const desconto = 0.2
    livrosDesc = livros.map(livro =>  {
        return {...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosDesc
}