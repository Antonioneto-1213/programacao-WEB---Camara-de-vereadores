const projetos = [
  {
    id: "012/2026",
    titulo: "Projeto de Lei nº 012/2026",
    descricao: "Cria o programa de hortas comunitárias nos bairros.",
    data: "10/09/2026"
  },
  {
    id: "013/2026",
    titulo: "Projeto de Lei nº 013/2026",
    descricao: "Amplia o horário de funcionamento das bibliotecas públicas.",
    data: "05/09/2026"
  },
  {
    id: "014/2026",
    titulo: "Projeto de Lei nº 014/2026",
    descricao: "Institui a semana municipal de conscientização sobre o trânsito.",
    data: "29/08/2026"
  }
];

const botoesFavoritos = document.querySelectorAll(".botao-favorito");
const listaFavoritos = document.getElementById("lista-favoritos");
const mensagemFavoritos = document.getElementById("mensagem-favoritos");

let favoritos = JSON.parse(
  localStorage.getItem("projetosFavoritos") || "[]"
);

function salvarFavoritos() {
  localStorage.setItem(
    "projetosFavoritos",
    JSON.stringify(favoritos)
  );
}



function atualizarBotoes() {
  botoesFavoritos.forEach(function(botao) {
    const projeto = botao.closest("li").dataset.projeto;
    const favoritado = favoritos.includes(projeto);

    botao.textContent = favoritado ? "★ Favoritado" : "☆ Favoritar";
    botao.setAttribute("aria-pressed", String(favoritado));
    botao.classList.toggle("ativo", favoritado);
  });
}


function atualizarListaFavoritos() {
  listaFavoritos.innerHTML = "";

  const projetosFavoritos = projetos.filter(function(projeto) {
    return favoritos.includes(projeto.id);
  });

  mensagemFavoritos.style.display =
    projetosFavoritos.length === 0 ? "block" : "none";

  
  projetosFavoritos.forEach(function(projeto) {
    const item = document.createElement("li");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    const data = document.createElement("p");
    data.textContent = "Data: " + projeto.data;

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.className = "botao-remover";
    botaoRemover.textContent = "Remover dos favoritos";

    botaoRemover.addEventListener("click", function() {
      alternarFavorito(projeto.id);
    });
    item.appendChild(titulo);
    item.appendChild(descricao);
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

botoesFavoritos.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const projeto = botao.closest("li").dataset.projeto;
    alternarFavorito(projeto);
  });
});
atualizarBotoes();
atualizarListaFavoritos();
