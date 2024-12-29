const html = document.querySelector("html");
const btnOpenMenu = document.querySelector(".cabecalho__btn__menu");
const btnHamburguer = btnOpenMenu.querySelector("div");
const btnSearch = document.querySelector(".cabecalho__btn__search");
const menuMobile = document.querySelector(".mobile-menu");
const linksMenu = document.querySelectorAll(".menu__link");
const btnsComment = document.querySelectorAll(
  ".container__card__activity__btns-comment"
);

const btnsLike = document.querySelectorAll(
  ".container__card__activity__btns-like"
);

const footerInput = document.querySelector("footer");

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

btnsLike.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const botaoClicado = event.target;
    const icone = botaoClicado.querySelector("div");

    if (
      icone.style.backgroundImage == `url("../imgs/Icons/like_icon-active.svg")`
    ) {
      icone.style.backgroundImage = `url('../imgs/Icons/like_icon.svg')`;
    } else {
      icone.style.backgroundImage = `url('../imgs/Icons/like_icon-active.svg')`;
    }
  });
});

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


alteraBotãoMenu();
