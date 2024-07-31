document.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById("slide");
    
    const toDown = () => {
        slide.style.top = 0;//내려왔다
        slide.style.transition = "top 0.5s";

        setTimeout( zz , 500);
    }
    const zz = () => {
        slide.style.top = "-300px";//올라갔다
        slide.style.transition = "none";//시간개념없음. 즉시실행
        slide.prepend( slide.children[2]);
    }

    setInterval( toDown , 2500 );

    /***********************************/
    const notice_li = document.querySelectorAll("#notice li:not(:first-child)");
    const black    =  document.getElementById("black");
    const pop_btn  =  document.querySelector("#popup button");

    let x = true;

    const popup = () => {
            if (x) {
                black.style.display = "block";
                x = false;
            } else {
                black.style.display = "none";
                x = true;
            }
    };

    // ...연산자는 스프레드연산자로 배열을 열어서 하나씩 나열해주는 기능
    const pp = [...notice_li, pop_btn];
    pp.forEach(element => {
            element.addEventListener("click", () => popup()  );
    });

});//전체 끝부분....................................