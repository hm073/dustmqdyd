document.addEventListener("DOMContentLoaded", () => {
    // 슬라이드
    const slide = document.getElementById("slide");

            toleft = () => {
                slide.style.left = "-100%"
                slide.style.transition = "left 2s"

                setTimeout(z , 2001);
            }
            const z = () => {
                slide.style.transition = "none";
                slide.style.left = 0;
                slide.append(slide.firstElementChild);
            }
            setInterval (toleft, 2800);

    // 팝업
    const notice_a = document.querySelectorAll("#notice a");
    const pop = document.getElementById("popup");
    const btn = document.querySelector("#popup button");

    const open = () => { 
        pop.style.display = "block";
        popup = false;
    }
    const close = () => { 
        pop.style.display = "none";
        popup = true;
    }

    let popup = true;

    notice_a.forEach( i => {
        i.addEventListener("click" , ()=> {
            popup ? open() : close();
        });
    })

    btn.addEventListener("click",()=>{
        popup ? open() : close();
    })
});//end