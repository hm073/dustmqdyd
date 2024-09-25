document.addEventListener("DOMContentLoaded", () => {

    const img_b = document.querySelector("#pro_tlt div button");
    const img_s = [...document.getElementById("small").children];
    
    img_s.forEach( i => {
        i.addEventListener("click", () => {
            const img = img_b.children[0];
            
            const src_2 = i.children[0].getAttribute("src");

            img.setAttribute("src", src_2);
            

        });
    });
});