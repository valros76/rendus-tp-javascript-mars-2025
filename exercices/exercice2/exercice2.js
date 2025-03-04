window.addEventListener("DOMContentLoaded", () => {

  class UserInfos {
    constructor() {
      this.apiPath = `https://jsonplaceholder.typicode.com`;
      this.apiPicturePath = `https://digi-api.com/api/v1/digimon`;
    }

    limitDatas(datas = [], max = 10) {
      const MAX = max;
      let postsToDelete = datas.length - (datas.length - MAX);
      const limitedDatas = [...datas.splice(0, postsToDelete)];
      return limitedDatas;
    }

    async fetchUserInfos() {
      try {
        let response = await fetch(`${this.apiPath}/users/4`);
        let datas = await response.json();

        response = await fetch(`${this.apiPicturePath}`);
        let avatarDatas = await response.json();
        avatarDatas = this.limitDatas(avatarDatas.content, 1);
        avatarDatas = avatarDatas[0];
        datas = {
          ...datas,
          avatar: avatarDatas?.image ?? undefined
        };
        return datas;
      } catch (err) {
        console.error(err);
      }
    }
  }

  class User {
    constructor(
      {
        id,
        name,
        email,
        avatar,
        website
      }
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.avatar = avatar;
      this.website = website;
    }

    async showUser(rootID = "mainContent") {
      const rootElement = document.querySelector(`#${rootID}`);
      const article = document.createElement("article");
      const title = document.createElement("h2");
      title.textContent = `${this.id} - ${this.name}`;
      article.appendChild(title);
      if (this.avatar) {
        const img = document.createElement("img");
        img.src = this.avatar;
        img.alt = this.name;
        article.appendChild(img);
      }
      const email = document.createElement("p");
      email.textContent = `Email : ${this.email}`;
      article.appendChild(email);
      const website = document.createElement("p");
      website.textContent = `Site : ${this.website}`;
      article.appendChild(website);
      rootElement.appendChild(article);
    }

    showUserInfos() {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        avatar: this.avatar,
        website: this.id,
      };
    }

    proveUserInfosLoad(rootID = "mainContent"){
      const rootElement = document.querySelector(`#${rootID}`);
      const paragraph = document.createElement("p");
      paragraph.textContent = "Liste des informations de l'utilisateur";
      rootElement.appendChild(paragraph);
      const list = document.createElement("ul");
      const userInfos = this.showUserInfos();
      for(let info in userInfos){
        const li = document.createElement("li");
        li.textContent = `${info} : ${userInfos[info]}`;
        list.appendChild(li);
      }
      rootElement.appendChild(list);
    }
  }

  const initUser = async () => {
    const userInfos = new UserInfos();
    let userDatas = await userInfos.fetchUserInfos();
    const user = new User(userDatas);
    user.showUser();
    user.proveUserInfosLoad();
    console.table(user.showUserInfos());
  };
  initUser();

});