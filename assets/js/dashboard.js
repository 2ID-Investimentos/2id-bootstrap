const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

var currentPage = window.location.pathname;

// Se a URL corresponder à página de perfil, adiciona a classe "active" ao item da barra lateral correspondente
if (currentPage === "/pages/dashboard/perfil.html") {
  document.querySelector(".sidebar-item.perfil").classList.add("active");
}

if (currentPage === "/pages/dashboard/ajuda.html") {
  document.querySelector(".sidebar-item.ajuda").classList.add("active");
}

//Carteira
if (currentPage === "/pages/dashboard/carteira/analises.html") {
  document.querySelector(".sidebar-item.carteira").classList.add("active");
  document.querySelector(".sidebar-item.analises").classList.add("active");
}
if (currentPage === "/pages/dashboard/carteira/ativos.html") {
  document.querySelector(".sidebar-item.carteira").classList.add("active");
  document.querySelector(".sidebar-item.ativos").classList.add("active");
}
if (currentPage === "/pages/dashboard/carteira/extratos.html") {
  document.querySelector(".sidebar-item.carteira").classList.add("active");
  document.querySelector(".sidebar-item.extratos").classList.add("active");
}
if (currentPage === "/pages/dashboard/carteira/resumo.html") {
  document.querySelector(".sidebar-item.carteira").classList.add("active");
  document.querySelector(".sidebar-item.resumo").classList.add("active");
}

//Trade
if (currentPage === "/pages/dashboard/trade/favoritos.html") {
  document.querySelector(".sidebar-item.trade").classList.add("active");
  document.querySelector(".sidebar-item.favoritos").classList.add("active");
}
if (currentPage === "/pages/dashboard/trade/mercado.html") {
  document.querySelector(".sidebar-item.trade").classList.add("active");
  document.querySelector(".sidebar-item.mercado").classList.add("active");
}
if (currentPage === "/pages/dashboard/trade/patrimonio.html") {
  document.querySelector(".sidebar-item.trade").classList.add("active");
  document.querySelector(".sidebar-item.patrimonio").classList.add("active");
}
