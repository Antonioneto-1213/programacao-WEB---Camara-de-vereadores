
const pesquisaVereadorSessao = document.getElementById("buscar-vereador");
const pesquisaProjetoSessao = document.getElementById("buscar-projeto");
const situacaoProjetoSessao = document.getElementById("filtrar-situacao");
const ordemProjetoSessao = document.getElementById("ordenar-projetos");


function restaurarSessao() {
  pesquisaVereadorSessao.value =
    sessionStorage.getItem("pesquisaVereador") || "";

  pesquisaProjetoSessao.value =
    sessionStorage.getItem("pesquisaProjeto") || "";

  situacaoProjetoSessao.value =
    sessionStorage.getItem("filtroSituacao") || "todos";

  ordemProjetoSessao.value =
    sessionStorage.getItem("ordemProjetos") || "recentes";

  
  pesquisaVereadorSessao.dispatchEvent(new Event("input"));
  pesquisaProjetoSessao.dispatchEvent(new Event("input"));

  if (!sessionStorage.getItem("ultimaSecao")) {
    sessionStorage.setItem("ultimaSecao", "topo");
  }
}


pesquisaVereadorSessao.addEventListener("input", function() {
  sessionStorage.setItem(
    "pesquisaVereador",
    pesquisaVereadorSessao.value
  );
});

pesquisaProjetoSessao.addEventListener("input", function() {
  sessionStorage.setItem(
    "pesquisaProjeto",
    pesquisaProjetoSessao.value
  );
});


situacaoProjetoSessao.addEventListener("change", function() {
  sessionStorage.setItem(
    "filtroSituacao",
    situacaoProjetoSessao.value
  );
});

ordemProjetoSessao.addEventListener("change", function() {
  sessionStorage.setItem(
    "ordemProjetos",
    ordemProjetoSessao.value
  );
});


document.querySelectorAll('.menu a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function() {
    const secao = link.getAttribute("href").substring(1);

    sessionStorage.setItem("ultimaSecao", secao);
  });
});


restaurarSessao();
