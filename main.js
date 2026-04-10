let maBaliseBurger = document.querySelector("#menuBurger");
let maCase = document.querySelector(".case");
let filtre = document.querySelector(".filtreBackground");
console.log(maBaliseBurger);

maBaliseBurger.addEventListener("click", handleAfficherCase);

function handleAfficherCase() {

  maCase.classList.add("active");
  filtre.classList.remove("hidden");
  filtre.classList.add("flex");
  filtre.addEventListener("click", handleDiplayCase);
}

function handleDiplayCase() {
  
  maCase.classList.remove("active");
  filtre.classList.remove("flex");
  filtre.classList.add("hidden");

  removeEventListener("click", handleDiplayCase);
}