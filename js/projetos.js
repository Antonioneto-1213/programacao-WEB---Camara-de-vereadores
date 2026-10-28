const projetos = [
  {
    id: "012/2026",
    titulo: "Projeto de Lei nº 012/2026",
    descricao: "Cria o programa de hortas comunitárias nos bairros.",
    data: "2026-09-10",
    situacao: "Aprovado"
  },
  {
    id: "013/2026",
    titulo: "Projeto de Lei nº 013/2026",
    descricao: "Amplia o horário de funcionamento das bibliotecas públicas.",
    data: "2026-09-05",
    situacao: "Em tramitação"
  },
  {
    id: "014/2026",
    titulo: "Projeto de Lei nº 014/2026",
    descricao: "Institui a semana municipal de conscientização sobre o trânsito.",
    data: "2026-08-29",
    situacao: "Aprovado"
  },
  {
    id: "015/2026",
    titulo: "Projeto de Lei nº 015/2026",
    descricao: "Estabelece medidas para ampliar a iluminação pública em ruas e praças.",
    data: "2026-09-15",
    situacao: "Em tramitação"
  },
  {
    id: "016/2026",
    titulo: "Projeto de Lei nº 016/2026",
    descricao: "Institui o programa municipal de coleta seletiva e reciclagem.",
    data: "2026-09-22",
    situacao: "Em tramitação"
  },
  {
    id: "017/2026",
    titulo: "Projeto de Lei nº 017/2026",
    descricao: "Dispõe sobre melhorias na segurança e manutenção do transporte escolar.",
    data: "2026-09-28",
    situacao: "Aprovado"
  },
  {
    id: "018/2026",
    titulo: "Projeto de Lei nº 018/2026",
    descricao: "Cria incentivos para a realização de eventos esportivos comunitários.",
    data: "2026-10-02",
    situacao: "Arquivado"
  },
  {
    id: "019/2026",
    titulo: "Projeto de Lei nº 019/2026",
    descricao: "Estabelece diretrizes para ampliar a acessibilidade nas calçadas e espaços públicos.",
    data: "2026-10-08",
    situacao: "Em tramitação"
  },
  {
    id: "020/2026",
    titulo: "Projeto de Lei nº 020/2026",
    descricao: "Institui campanhas periódicas de prevenção e promoção da saúde.",
    data: "2026-10-14",
    situacao: "Em tramitação"
  },
  {
    id: "021/2026",
    titulo: "Projeto de Lei nº 021/2026",
    descricao: "Cria ações municipais de conscientização sobre proteção e bem-estar animal.",
    data: "2026-10-20",
    situacao: "Aprovado"
  }
];

const listaProjetos = document.getElementById("lista-projetos");
const campoBuscaProjeto = document.getElementById("buscar-projeto");
const filtroSituacao = document.getElementById("filtrar-situacao");
const ordenarProjetos = document.getElementById("ordenar-projetos");
const resultadoProjetos = document.getElementById("resultado-projetos");
const mensagemProjetos = document.getElementById("mensagem-projetos");


function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}


function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


function criarCardProjeto(projeto) {
  const item = document.createElement("li");
  item.dataset.projeto = projeto.id;

  const titulo = document.createElement("h3");
  titulo.textContent = projeto.titulo;

  const descricao = document.createElement("p");
  descricao.textContent = projeto.descricao;

  const data = document.createElement("time");
  data.dateTime = projeto.data;
  data.textContent = formatarData(projeto.data);

  const situacao = document.createElement("span");
  situacao.className = "situacao-projeto";
  situacao.textContent = projeto.situacao;

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao-favorito";
  botao.textContent = "☆ Favoritar";
  botao.setAttribute("aria-pressed", "false");

  item.appendChild(titulo);
  item.appendChild(descricao);
  item.appendChild(data);
  item.appendChild(situacao);
  item.appendChild(botao);

  return item;
}


function atualizarProjetos() {
  const pesquisa = normalizarTexto(campoBuscaProjeto.value.trim());
  const situacao = filtroSituacao.value;
  const ordem = ordenarProjetos.value;

  let projetosFiltrados = projetos.filter(function(projeto) {
    const texto = normalizarTexto(
      `${projeto.id} ${projeto.titulo} ${projeto.descricao}`
    );

    const correspondePesquisa = texto.includes(pesquisa);
    const correspondeSituacao =
      situacao === "todos" || projeto.situacao === situacao;

    return correspondePesquisa && correspondeSituacao;
  });

  projetosFiltrados.sort(function(a, b) {
    if (ordem === "antigos") {
      return a.data.localeCompare(b.data);
    }

    return b.data.localeCompare(a.data);
  });

  listaProjetos.replaceChildren();

  projetosFiltrados.forEach(function(projeto) {
    listaProjetos.appendChild(criarCardProjeto(projeto));
  });

  resultadoProjetos.textContent =
    `${projetosFiltrados.length} projeto(s) encontrado(s).`;

  mensagemProjetos.hidden = projetosFiltrados.length !== 0;

  
  document.dispatchEvent(new Event("projetosAtualizados"));
}


campoBuscaProjeto.addEventListener("input", atualizarProjetos);
filtroSituacao.addEventListener("change", atualizarProjetos);
ordenarProjetos.addEventListener("change", atualizarProjetos);


atualizarProjetos();
