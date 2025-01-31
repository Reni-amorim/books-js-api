document.querySelectorAll('.btn').forEach(btn => {
 btn.addEventListener('click', function() {
    const categoria = btn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    exibirLivros(livrosFiltrados)
 });
});
