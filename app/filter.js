document.querySelectorAll('.btn').forEach(btn => {
 btn.addEventListener('click', function() {
    const categoria = btn.value;
    const livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria === categoria);
    exibirLivros(livrosFiltrados)
    const valorTotal = calcValorLivros(livrosFiltrados)
    exibirValorTotal(valorTotal)
 })
})

function exibirValorTotal(valorTotal) {
   eValorTotal.innerHTML = `
       <div class="livros__disponiveis">
       <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
       </div>
   `
}