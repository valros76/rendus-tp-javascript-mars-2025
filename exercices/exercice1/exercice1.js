window.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("#mainContent");
  const apiPath = "https://jsonplaceholder.typicode.com";

  const limitDatas = (datas = [], max = 10) => {
    const MAX = max;
    let postsToDelete = datas.length - (datas.length - MAX);
    const limitedDatas = [...datas.splice(0, postsToDelete)];
    return limitedDatas;
  }

  const fetchPosts = async () => {
    try {
      let response = await fetch(`${apiPath}/posts`);
      let datas = await response.json();
      const limitedDatas = limitDatas(datas, 10);
      const list = document.createElement("ol");
      limitedDatas.forEach(data => {
        const li = document.createElement("li");
        li.textContent = data.title;
        list.appendChild(li);
      });
      mainContent.appendChild(list);
    } catch (err) {
      console.error(err);
    }
  }
  fetchPosts();

  const fetchPictures = async () => {
    try {
      let response = await fetch(`https://digi-api.com/api/v1/digimon`);
      let datas = await response.json();
      const limitedDatas = limitDatas(datas.content, 3);
      limitedDatas.forEach(data => {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.name;
        mainContent.appendChild(img);
      });
    } catch (err) {
      console.error(err);
    }
  }
  fetchPictures();

  const fetchUser = async () => {
    try {
      let response = await fetch(`${apiPath}/users/4`);
      let datas = await response.json();
      const user = {
        id: datas.id,
        name: datas.name,
        email: datas.email,
        avatar: undefined,
        website: datas.website,
      };

      let responseAvatar = await fetch(`https://digi-api.com/api/v1/digimon`);
      let newAvatar = await responseAvatar.json();
      let limitedDatas = limitDatas(newAvatar.content, 1);
      user.avatar = limitedDatas[0].image;

      const article = document.createElement("article");
      const title = document.createElement("h2");
      title.textContent = user.name;
      article.appendChild(title);
      if(user.avatar){
        const img = document.createElement("img");
        img.src = user.avatar;
        img.alt = user.name;
        article.appendChild(img);
      }
      const email = document.createElement("p");
      email.textContent = `Email : ${user.email}`;
      article.appendChild(email);
      const website = document.createElement("p");
      website.textContent = `Site : ${user.website}`;
      article.appendChild(website);
      mainContent.appendChild(article);
    } catch (err) {
      console.error(err);
    }
  }

  fetchUser();

});