
const botaoTema = document.getElementById("alternar-tema");


const temaSalvo = localStorage.getItem("tema") || "claro";


function aplicarTema(tema) {
  document.documentElement.setAttribute("data-tema", tema);

  const temaEscuro = tema === "escuro";

  botaoTema.textContent = temaEscuro ? "Tema claro" : "Tema escuro";
  botaoTema.setAttribute(
    "aria-label",
    temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"
  );

  localStorage.setItem("tema", tema);
}

botaoTema.addEventListener("click", function() {
  const temaAtual = document.documentElement.getAttribute("data-tema");

  aplicarTema(temaAtual === "escuro" ? "claro" : "escuro");
});


aplicarTema(temaSalvo);
