let btn = document.querySelector(".btn")
let h1 = document.querySelector(".banner h1")
let img = document.querySelector(".img")
btn.addEventListener("click", () => {
    let menu = document.querySelector(".header ul");
    let btn = document.querySelector(".header button");

    if (btn.innerText === "MENI") {
        menu.style.display = "block"
        btn.innerText = "ZATVORI";
    } else {
        menu.style.display = "none";
        btn.innerText = "MENI";
    };
    
});
