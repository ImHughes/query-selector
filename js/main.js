const blogName = document.querySelector(".article__header");
blogName.textContent = "Welcome to Hughes's blog"
const allStuff = document.querySelectorAll(".article__header");
for (let i=0 ;i<allStuff.length;i++){ 

    allStuff[i].classList = "important";
}
