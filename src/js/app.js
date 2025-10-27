fetch('src/data/estoque.json').then(res => res.json()).then(pecas => {
    const container = document.getElementById('vitrine');

    container.innerHTML = pecas.map(p => `
      <div class="item">
        <img src="${p.img_url}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <span>Tam: ${p.tamanho}</span><br>
        <strong>R$ ${p.preco}</strong>
        <p>Status: ${p.status}</p>
      </div>
    `).join('');
  });