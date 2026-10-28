const listaFavoritos = document.getElementById("lista-favoritos");
const mensagemFavoritos = document.getElementById("mensagem-favoritos");
const listaProjetosPrincipal = document.getElementById("lista-projetos");


let favoritos = JSON.parse(
  localStorage.getItem("projetosFavoritos") || "[]"
);


if (!Array.isArray(favoritos)) {
  favoritos = [];
}


function salvarFavoritos() {
  localStorage.setItem(
    "projetosFavoritos",
    JSON.stringify(favoritos)
  );
}


function atualizarBotoes() {
  const botoes = document.querySelectorAll(".botao-favorito");

  botoes.forEach(function(botao) {
    const projeto = botao.closest("li").dataset.projeto;
    const favoritado = favoritos.includes(projeto);

    botao.textContent = favoritado ? "★ Favoritado" : "☆ Favoritar";
    botao.setAttribute("aria-pressed", String(favoritado));
    botao.classList.toggle("ativo", favoritado);
  });
}


function atualizarListaFavoritos() {
  listaFavoritos.replaceChildren();

  const projetosFavoritos = projetos.filter(function(projeto) {
    return favoritos.includes(projeto.id);
  });

  mensagemFavoritos.hidden = projetosFavoritos.length > 0;

  projetosFavoritos.forEach(function(projeto) {
    const item = document.createElement("li");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    const situacao = document.createElement("p");
    situacao.textContent = "Situação: " + projeto.situacao;

    const data = document.createElement("p");
    data.textContent = "Data: " + formatarData(projeto.data);
    data.className = "data-favorito";
    
    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.className = "botao-remover";
    botaoRemover.textContent = "Remover dos favoritos";

    botaoRemover.addEventListener("click", function() {
      alternarFavorito(projeto.id);
    });

    item.appendChild(titulo);
    item.appendChild(descricao);
    item.appendChild(situacao);
    item.appendChild(data);
    item.appendChild(botaoRemover);

    listaFavoritos.appendChild(item);
  });
}


function alternarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(function(favorito) {
      return favorito !== id;
    });
  } else {
    favoritos.push(id);
  }

  salvarFavoritos();
  atualizarBotoes();
  atualizarListaFavoritos();
}


listaProjetosPrincipal.addEventListener("click", function(evento) {
  const botao = evento.target.closest(".botao-favorito");

  if (!botao || !listaProjetosPrincipal.contains(botao)) {
    return;
  }

  const projeto = botao.closest("li").dataset.projeto;
  alternarFavorito(projeto);
});


document.addEventListener("projetosAtualizados", function() {
  atualizarBotoes();
});


atualizarBotoes();
atualizarListaFavoritos();
