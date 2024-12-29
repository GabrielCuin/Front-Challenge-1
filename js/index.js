const html = document.querySelector("html");
const btnOpenMenu = document.querySelector(".cabecalho__btn__menu");
const btnHamburguer = btnOpenMenu.querySelector("div");
const btnSearch = document.querySelector(".cabecalho__btn__search");
const menuMobile = document.querySelector(".mobile-menu");
const linksMenu = document.querySelectorAll(".menu__link");
const backGroundCard = document.querySelector(".container__card");
const areaCodigo = document.querySelector(".container__card__cod__wrapper");
const btnHighlight = document.querySelector(".container__button");

const linguagem = document.querySelector(".form__select");
const inputBGColor = document.querySelector(".form__color");
const btnSaveForm = document.querySelector(".form__button");

const footerInput = document.querySelector("footer");

function applyHighlight() {
  const codigo = areaCodigo.innerText;
  areaCodigo.innerHTML = `<code class="container__card__cod__wrapper__preview hljs ${linguagem.value}" contenteditable="true" rows="15" aria-label="editor de código"></code>`;
  areaCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaCodigo.querySelector("code"));
}

btnHighlight.addEventListener("click", () => {
  console.log("clicou");
  applyHighlight();
});

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

inputBGColor.value = randomHexColorCode();
backGroundCard.style.backgroundColor = inputBGColor.value;

inputBGColor.addEventListener("input", () => {
  backGroundCard.style.backgroundColor = inputBGColor.value;
});

function alteraBotãoMenu() {
  let contexto = html.getAttribute("data-contexto");
  if (contexto === "editor") {
    linksMenu[0].classList.add("active");
    linksMenu[2].classList.add("active");
  } else {
    linksMenu[1].classList.add("active");
    linksMenu[3].classList.add("active");
  }
}
alteraBotãoMenu();

btnOpenMenu.addEventListener("click", () => {
  if (btnHamburguer.style.backgroundImage == `url("../imgs/Icons/cross.svg")`) {
    btnHamburguer.style.backgroundImage = `url('../imgs/Icons/Menu.svg')`;
    menuMobile.classList.toggle("open");
  } else {
    btnHamburguer.style.backgroundImage = `url("../imgs/Icons/cross.svg")`;
    menuMobile.classList.toggle("open");
  }
});

btnSearch.addEventListener("click", () => {
  console.log("aiai")
  footerInput.classList.toggle("footer-open");
});
