document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu");
    const nav = document.getElementsByTagName("nav")[0];

    let x = 0;
    const menuClick = () => {
        x++;
        if (x == 1) {
            nav.classList.add("show");
            menu.textContent = "close";
        }
        else {
            nav.classList.remove("show");
            menu.textContent = "menu";
            x = 0;
        }
    }
    
    menu.addEventListener("click", menuClick);
    
            // else {
            //     nav.classList.remove("show");
            //     nav.style.transition = "height 0.5s"
            //     menu.textContent = "menu";
    
            //     x = 0;
            // }

});