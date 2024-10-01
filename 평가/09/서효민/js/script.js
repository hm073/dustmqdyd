document.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById("slidearea");

    toleft = () => {
        slide.style.left = "-100%"
        slide.style.transition = "left 1.5s"

        setTimeout(z , 1501);
    }
    const z = () => {
        slide.style.transition = "none";
        slide.style.left = 0;
        slide.append(slide.firstElementChild);
    }
    setInterval (toleft, 2500);
}); //end