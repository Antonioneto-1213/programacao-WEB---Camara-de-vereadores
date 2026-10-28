
const campoFonte = document.getElementById("tamanho-fonte");
const campoEspacamento = document.getElementById("espacamento-cards");
const campoContraste = document.getElementById("alto-contraste");

const botaoRedefinir = document.getElementById("redefinir-preferencias");
const mensagemPreferencias = document.getElementById("mensagem-preferencias");


function aplicarPreferencias() {
  const fonte = localStorage.getItem("tamanhoFonte") || "normal";
  const espacamento = localStorage.getItem("espacamentoCards") || "normal";
  const contraste = localStorage.getItem("altoContraste") === "true";

  campoFonte.value = fonte;
  campoEspacamento.value = espacamento;
  campoContraste.checked = contraste;

  document.body.classList.toggle("fonte-grande", fonte === "grande");
  document.body.classList.toggle("cards-compactos", espacamento === "compacto");
  document.body.classList.toggle("alto-contraste", contraste);
}


function inicializarPreferencias() {
  if (localStorage.getItem("tamanhoFonte") === null) {
    localStorage.setItem("tamanhoFonte", "normal");
  }

  if (localStorage.getItem("espacamentoCards") === null) {
    localStorage.setItem("espacamentoCards", "normal");
  }

  if (localStorage.getItem("altoContraste") === null) {
    localStorage.setItem("altoContraste", "false");
  }

  aplicarPreferencias();
}


campoFonte.addEventListener("change", function() {
  localStorage.setItem("tamanhoFonte", campoFonte.value);
  aplicarPreferencias();
});


campoEspacamento.addEventListener("change", function() {
  localStorage.setItem("espacamentoCards", campoEspacamento.value);
  aplicarPreferencias();
});


campoContraste.addEventListener("change", function() {
  localStorage.setItem("altoContraste", String(campoContraste.checked));
  aplicarPreferencias();
});


botaoRedefinir.addEventListener("click", function() {
  localStorage.setItem("tamanhoFonte", "normal");
  localStorage.setItem("espacamentoCards", "normal");
  localStorage.setItem("altoContraste", "false");

  aplicarPreferencias();

  mensagemPreferencias.textContent =
    "Preferências visuais restauradas com sucesso.";
});

inicializarPreferencias();
