document.addEventListener("DOMContentLoaded", () => {

    const backbtn = [...document.querySelector("footer")[2]];

    const windowback = () => {
        window.history.back();
    }

    backbtn.addEventListener("click", () => {
        windowback();
    });//backbutton

});//end