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
        arrowSlide.forEach( i =>{
            i.style.transition = "left 1s";
            i.style.transform.translateX = "-100%";

            setTimeout( () => x(), 1000)
            x = () => {
                i.style.Left = 0;
                i.style.transition = 'none';
                i.append(i.firstElementChild);
            }
        })

        // setTimeout( () => x() , 1000)
        // x = () => {
        //     arrowSlide.forEach( i => {
        //         alert(i)
        //         // i.style.Left = 0;
        //         // i.style.transition = 'none';
        //         // i.append(i.firstElementChild);
        //     })
        // }
    }

    btnLeft.addEventListener("click", Left);
    // btnRight.addEventListener("click", Right);

})//end