document.addEventListener("DOMContentLoaded", ()=>{

    const mainM = Array.from(document.getElementsByClassName("mainMenu"));

    mainM.forEach(i=>{
        i.addEventListener("click", () => {
            i.nextElementSibling.classList.add("show");
        });
    })

    //페이드 슬라이드
    const slide = Array.from(document.getElementsByClassName("slide"));

    let i = 2; //.slide가 [0, 1, 2] 있기 때문
    const fade = () => {
        if(i == 0) {
            slide.forEach( j => j.style.opacity = 1);
            i = 2;
        }
        else {
            slide[i].style.opacity = 0;
            i--;
        }
    }

    setInterval(fade,2500);



});//end