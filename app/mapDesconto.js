function aplicarDesconto(livros) {
    const desconto = 0.2
    livrosDesc = livros.map(livro =>  {
        return {...livro, preco: parseFloat((livro.preco - (livro.preco * desconto)).toFixed(2))}
    })
    return livrosDesc
}