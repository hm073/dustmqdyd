document.addEventListener("DOMContentLoaded", () => {

    /* 슬라이드 부분 */
    const slide = document.getElementsByClassName("slide")[0]; //슬라이드

    const toLeft = () => {
        slide.style.transition = "left 2s"
        slide.style.left = "-100%"

        setTimeout( () => x(), 3000 );
        x = () => {
            slide.style.left= 0;
            slide.style.transition = 'none';
            slide.append(slide.firstElementChild);
        }
    }

    setInterval (toLeft, 4500);


    /* 공동구매 화살표 */
    const btnLeft = document.getElementsByClassName("p1")[0];
    const btnRight = document.getElementsByClassName("p3")[0];

    const arrowSlideArea = document.getElementsByClassName("p2")[0];
    alert(arrowSlideArea)
    const arrowSlide = Array.from(document.getElementsByClassName("pSlide"));

    const left = () => {
        arrowSlideArea.style.left = "-100%"
        arrowSlideArea.style.transition = "left 0.1s"

        setTimeout(z, 1001);
        
    };
    const z = () => {
        arrowSlide.sytle.left = 0;
        arrowSlideArea.append(arrowSlideArea.firstElementChild);
    }

    btnLeft.addEventListener("click", left);

    /* 팝업 */
    const cN_popup = document.querySelector(".cN a");
    const popup = document.getElementById("popup");
    const btn = document.querySelector("#popup button");

    // let pop = true;
    // const open = () => {
    //     popup.style.display = "block";
    //     pop = false;
    // }

    // const close = () => {
    //     popup.style.display = "none";
    //     pop = true;
    // }

    // cN_popup.forEach( i => {
    //     i.addEventListener("click", () => {
    //         pop ? open() : close();
    //     });
    // });
    // btn.addEventListener("click", () => {
    //     btn ? close() : open();
    // })

    cN_popup.addEventListener("click", () => {
        popup.style.display = "block";
    });

    btn.addEventListener("click", () => {
        popup.style.display = "none"
    })
})//end