const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

var currentPage = window.location.pathname;

// Se a URL corresponder à página de perfil, adiciona a classe "active" ao item da barra lateral correspondente
if (currentPage === "/pages/profile.html") {
  document.querySelector(".sidebar-item.profile").classList.add("active");
}

if (currentPage === "/pages/profile.html") {
  document.querySelector(".sidebar-item.profile").classList.add("active");
}


