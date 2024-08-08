document.addEventListener("DOMContentLoaded", ()=>{

    const navBtn = document.querySelector("header button");
    const nav = document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");

    const navS = () => {
        iframe.classList.add("slide");
        navBtn.textContent = "close"
    }

    const navH = () => {
        iframe.classList.remove("slide");
        navBtn.textContent = "menu";
    }

    navBtn.addEventListener("click", navS);
    header.addEventListener("click", navH);
});//end