const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    success ? resolve("Succès !") : reject("Erreur !");
  }, 2000);
});

maPromesse
  .then(result => console.log(result)) // "Succès !" après 2 sec
  .catch(error => console.error(error)) // Gère les erreurs
  .finally(() => console.log("Terminé")); // S'exécute dans tous les cas

async function fetchAsyncData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

fetchAsyncData();

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) throw new Error("Problème avec la requête");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Erreur :", error));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Mon Post", body: "Contenu", userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log("Réponse du serveur :", data))
  .catch(error => console.error("Erreur :", error));

const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
const p2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());

Promise.all([p1, p2])
  .then(results => console.log("Résultats :", results))
  .catch(error => console.error("Erreur :", error));

Promise.race([
  fetch("https://jsonplaceholder.typicode.com/posts/1"),
  fetch("https://jsonplaceholder.typicode.com/posts/2")
])
  .then(response => console.log("Première réponse :", response))
  .catch(error => console.error("Erreur :", error));


fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
.then(response => {
  if(!response.ok){
    throw new Error("Le statut n'est pas valide.");
  }
  response.json();
})
.then(datas => console.table(datas))
.catch(err => console.err(`Erreur : ${err}`))
.finally(done => console.log("Traitement terminé !"))