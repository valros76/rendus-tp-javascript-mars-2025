const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log("L'élément est visible : ", entry);
      entry.target.style.backgroundColor="red";
    }else{
      entry.target.style.backgroundColor="blue";
    }
  });
});

observer.observe(document.querySelector("#articleTwo"));