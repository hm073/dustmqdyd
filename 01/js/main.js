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
    const arrowSlide = Array.from(document.getElementsByClassName("pSlide"));

    const Left = () => {
        // arrowSlide.forEach( (i,j) =>{
            arrowSlide[0].style.transition = "transform 1s";
            arrowSlide[0].style.transform = "translateX(-100%)"
        // arrowSlide[0].style.transition = "left 1s";
        // arrowSlide[0].style.transform = "translateX(1000px)"    

    
            const first_E_right = () => {
                arrowSlide[0].style.Left = 0;
                arrowSlide[0].style.transition = 'none';
                arrowSlideArea.append(arrowSlideArea.firstElementChild);
                // j++;
                // if (j == 3) j = 0;
                // i.style.Left = 0;
                // i.style.transition = 'none';
                // i.append(i.firstElementChild);
            };
        setTimeout( first_E_right , 1001);
            
        // })

        // setTimeout( () => x() , 1000)
        // x = () => {
        //     arrowSlide.forEach( i => {
        //         i.style.Left = 0;
        //         i.style.transition = 'none';
        //         i.append(i.firstElementChild);
        //     })
        // }
    }

    btnLeft.addEventListener("click", Left);
    // btnRight.addEventListener("click", Right);

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