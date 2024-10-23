document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.getElementById("container");
    const content = document.getElementById("content");
    const menu_btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const menu = document.getElementById("menu");
    
    function menuClose(){
        menu.style.left = '-100%';
        menu_btn.textContent = "menu";
        content.style.overflow = "auto";
    };


    menu_btn.addEventListener("click", () => {
        const t = menu_btn.textContent

        if (t == "menu") {
            menu.style.left = 0;
            menu_btn.textContent = "close";
            content.style.overflow = "hidden";
        }
        else {
            menuClose();
        }
    }); //btn click

    container.addEventListener("click",(e) => {
        if(!menu.contains(e.target) && e.target !== menu_btn) {
            menuClose();
        }
    }); //!menu click

    const li = [...document.querySelectorAll("#menu li")];

    li.forEach(liA => {
        liA.addEventListener("click", ()=> {
            menuClose();
        })
    });


}); //end