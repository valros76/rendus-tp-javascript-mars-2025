const myPromise = new Promise((resolve, reject) => {
  const promiseTimeout = setTimeout(() => {
    let success = true;
    success ? resolve("Succès !") : reject("Erreur");
    clearTimeout(promiseTimeout);
  }, 2000);
});

myPromise
.then(result => console.log(result))
.catch(err => console.error(err))
.finally(() => console.log("Terminé !"));

async function fetchAsyncData(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.table(data);
  }catch(err){
    console.error(`Erreur : ${err}`);
  }
}

fetchAsyncData();