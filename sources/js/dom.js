const titre = document.querySelector("#titre");
titre.textContent = "Nouveau texte";

const lien = document.querySelector("a");
lien.href = "https://webdevoo.com";
lien.setAttribute("target", "_blank");

const div = document.createElement("div");
div.textContent = "Nouvel élément";
document.body.appendChild(div);

document.querySelector("button").addEventListener("click", () => {
  alert("Bouton cliqué !");
});

const input = document.querySelector("input");
input.addEventListener("focus", () => console.log("Focus sur le champ"));
input.addEventListener("blur", () => console.log("Champ quitté"));

function logClick() {
  console.log("Clic détecté !");
}

document.addEventListener("click", logClick);
document.removeEventListener("click", logClick);

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => console.log("Bouton cliqué"));
});

document.body.style.backgroundColor = "blue";

document.querySelector("#maDiv").classList.add("active");

document.querySelector("#toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("L'élément est visible !");
    }
  });
});

observer.observe(document.querySelector("#cible"));

const cible = document.querySelector("#maDiv");

const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log("Modification détectée :", mutation);
  });
});

mutationObserver.observe(cible, { childList: true, attributes: true });
