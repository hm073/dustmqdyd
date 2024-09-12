document.addEventListener("DOMContentLoaded" , ()=>{
    const slide = document.getElementById("slide");

    const zz = () => {
        slide.style.top =0;
        slide.style.transition = "none";
        slide.append(slide.children[0]);
    }
    const toTop = () => {
        slide.style.top = "-350px";
        slide.style.transition = "top 1s";
        setTimeout( zz , 1001);
    }
    const slideInterval = setInterval(toTop , 2800);

    const num = document.querySelectorAll("#num button");
    num.addEventListener("click", () => {
        clearInterval( slideInterval );
        setTimeout
    });
    /* num.forEach((i, j) => {
        i.addEventListener("click", () => {
            
        });
    }); */
});//end........