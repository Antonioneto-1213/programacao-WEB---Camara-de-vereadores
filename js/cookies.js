const avisoCookies = document.getElementById("aviso-cookies");
const aceitarCookies = document.getElementById("aceitar-cookies");
const rejeitarCookies = document.getElementById("rejeitar-cookies");
const salvarCookies = document.getElementById("salvar-preferencias-cookies");

const campoCookieBanner = document.getElementById("cookie-banner");
const campoCookieDatas = document.getElementById("cookie-datas");
const campoCookieContador = document.getElementById("cookie-contador");
const campoCookieDicas = document.getElementById("cookie-dicas");


function definirCookie(nome, valor, dias = 30) {
  const data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);

  document.cookie =
    `${nome}=${encodeURIComponent(valor)}; expires=${data.toUTCString()}; path=/; SameSite=Lax`;
}


function obterCookie(nome) {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const separador = cookie.indexOf("=");

    if (separador === -1) {
      continue;
    }

    const chave = cookie.substring(0, separador);
    const valor = cookie.substring(separador + 1);

    if (chave === nome) {
      return decodeURIComponent(valor);
    }
  }

  return null;
}


function excluirCookie(nome) {
  document.cookie =
    `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}


function aplicarCookies() {
  const autorizado = obterCookie("consentimentoCookies") === "aceito";

  const exibirBanner =
    !autorizado || obterCookie("exibirBanner") !== "false";

  const exibirDatas =
    !autorizado || obterCookie("exibirDatas") !== "false";

  const exibirContador =
    !autorizado || obterCookie("exibirContador") !== "false";

  const exibirDicas =
    !autorizado || obterCookie("exibirDicas") !== "false";

  campoCookieBanner.checked = exibirBanner;
  campoCookieDatas.checked = exibirDatas;
  campoCookieContador.checked = exibirContador;
  campoCookieDicas.checked = exibirDicas;

  document.querySelector(".banner").hidden = !exibirBanner;

  document.body.classList.toggle(
    "ocultar-datas",
    !exibirDatas
  );

  document.getElementById("resultado-projetos").hidden =
    !exibirContador;

  document.getElementById("dica-navegacao").hidden =
    !exibirDicas;
}


function gravarPreferenciasCookies() {
  definirCookie("exibirBanner", String(campoCookieBanner.checked));
  definirCookie("exibirDatas", String(campoCookieDatas.checked));
  definirCookie("exibirContador", String(campoCookieContador.checked));
  definirCookie("exibirDicas", String(campoCookieDicas.checked));
}


function consentirCookies() {
  definirCookie("consentimentoCookies", "aceito");
  gravarPreferenciasCookies();

  avisoCookies.hidden = true;
  aplicarCookies();

  mensagemPreferencias.textContent =
    "Preferências de cookies salvas com sucesso.";
}

function recusarCookies() {
  definirCookie("consentimentoCookies", "rejeitado");

  [
    "exibirBanner",
    "exibirDatas",
    "exibirContador",
    "exibirDicas"
  ].forEach(excluirCookie);

  avisoCookies.hidden = true;
  aplicarCookies();

  mensagemPreferencias.textContent =
    "Cookies opcionais rejeitados.";
}


aceitarCookies.addEventListener("click", consentirCookies);
rejeitarCookies.addEventListener("click", recusarCookies);
salvarCookies.addEventListener("click", consentirCookies);


function inicializarCookies() {
  const consentimento = obterCookie("consentimentoCookies");

  avisoCookies.hidden = consentimento !== null;
  aplicarCookies();
}

inicializarCookies();
document.addEventListener("projetosAtualizados", aplicarCookies);