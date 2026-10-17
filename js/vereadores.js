const campoPesquisa = document.getElementById("buscar-vereador");
const vereadores = document.querySelectorAll("#vereadores .card");

function pesquisarVereadores() {
  const pesquisa = campoPesquisa.value.toLowerCase().trim();

  vereadores.forEach(function(vereador) {
    const nome = vereador.querySelector("h3").textContent.toLowerCase();

    vereador.style.display = nome.includes(pesquisa) ? "" : "none";
  });
}

campoPesquisa.addEventListener("input", pesquisarVereadores);
