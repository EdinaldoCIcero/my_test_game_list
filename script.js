async function carregarProdutos() {
  try {
    const response = await fetch('produtos.json');
    const produtos = await response.json();
    const galeria = document.getElementById('galeriaProdutos');
    galeria.innerHTML = '';

    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="card-info">
          <h3>${produto.nome}</h3>
          <p>${produto.preco}</p>
        </div>
      `;
      card.onclick = () => abrirModal(produto);
      galeria.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

function abrirModal(produto) {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  document.getElementById('modalImg').src = produto.imagem;
  document.getElementById('modalNome').textContent = produto.nome;
  document.getElementById('modalPreco').textContent = produto.preco;
  document.getElementById('modalDescricao').textContent = produto.descricao;
}

document.getElementById('closeModal').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

window.onclick = event => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

carregarProdutos();
