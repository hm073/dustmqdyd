document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("popup");
    const notice = document.querySelectorAll("#notice ul li");
    
    notice.forEach(i => {
        i.children[0].addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    const btn = popup.querySelector("button");
    btn.addEventListener("click", () => {
        popup.style.display = "none";
    })

    document.addEventListener("keydown", e => {
        if(e.key == "Escape") {
            popup.style.display = "none";
        }
    })

}); //end