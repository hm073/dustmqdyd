document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("header button");
    const nav = document.getElementsByTagName("nav")[0];

    const navClose = () => {
        nav.style.left = '-110%';
        btn.textContent = 'menu';
    }
    
    btn.addEventListener("click", () => {
        const t = btn.textContent;
        nav.style.transition = 'left 0.3s';
        
        if(t == 'menu') {
            nav.style.left = 0;
            btn.textContent = 'close';
        }
        else {
            navClose();
        }
    });

    const navA = [...nav.children];
    navA.forEach (i => {
        i.addEventListener("click", () => navClose());
    });

    const up = document.getElementById("up");

    up.addEventListener("click", () => {
        navClose();
    });

});//end