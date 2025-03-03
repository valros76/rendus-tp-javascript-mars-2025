window.addEventListener("DOMContentLoaded", () => {

  const searchForm = document.querySelector("#searchForm");
  const searchBar = document.querySelector("[name='search']");
  const mainSection = document.querySelector("#burgerSection");
  const mainSectionTitle = mainSection.querySelector("h1");

  const burgers = [
    {
      name: "Chicken Cheddar Lover",
      description: "Un pain au cheddar, une sauce au cheddar, deux tranches de cheddar fondu et des tranches de bacon fumé, le tout accompagné d'un poulet 100% filet enrobé d'une panure ultra croustillante, voici le CHICKEN CHEDDAR LOVER."
    },
    {
      name: "Long Chili Cheese",
      description: "Une recette généreuse et épicée : deux viandes de bœuf grillées à la flamme accompagnés d'une sauce chili cheese, des jalapenos et du fromage savoureux."
    },
    {
      name: "Cheddar Lover",
      description: "Un pain au cheddar, une sauce au cheddar, deux tranches de cheddar fondu et des tranches de bacon fumé, le tout accompagné d'une viande grillée à la flamme, voici le CHEDDAR LOVER."
    },
  ];

  const createBurgerArticle = (burgersList = []) => {
    burgersList = burgersList.length <= 0 ? [...burgers] : burgersList;
    burgersList.forEach(burger => {
      let article = document.createElement("article");
      let title = document.createElement("h2");
      let content = document.createElement("p");
      title.textContent = burger.name;
      content.textContent = burger.description;
      article.appendChild(title);
      article.appendChild(content);

      mainSection.appendChild(article);
    });
  }

  const initBurgersView = () => {
    createBurgerArticle();
  }

  const onSearch = (e) => {
    e.preventDefault();

    const search = e.target.value.replace(/\s+/g, "").toLowerCase();

    const newBurgersList = burgers.filter(burger => burger.name.replace(/\s+/g, "").toLowerCase().includes(search));

    if(search === "" || newBurgersList.length === burgers.length){
      mainSection.innerHTML = "";
      mainSection.appendChild(mainSectionTitle);
      createBurgerArticle();
    }

    if(newBurgersList.length > 0 && newBurgersList.length !== burgers.length){
      mainSection.innerHTML = "";
      mainSection.appendChild(mainSectionTitle);

      createBurgerArticle(newBurgersList);
    }


    e.stopPropagation();
  }

  /**
   * Cycle de vie du script
   */
  initBurgersView();

  searchBar.addEventListener("keyup", e => onSearch(e));

});