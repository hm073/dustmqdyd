document.addEventListener("DOMContentLoaded", () => {

    const slideImg = document.querySelector("#slide div");

    const toRight = () => {
        slideImg.style.right = "-100%"
        slideImg.style.transition = "right 1s"

        setTimeout(z, 1001);
    }

    const z = () => {
        slideImg.style.transition = "none";
        slideImg.style.right = 0;
        slideImg.prepend(slideImg.lastElementChild);
    }

    setInterval(toRight, 2700);
});
