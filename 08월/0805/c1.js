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

/*************************************/
    const btn = document.querySelectorAll("#notigall h2");
    const ol = document.querySelector("#notice ol");
    const gall = document.querySelector("#gallery > div");

    const ng = ( i ) => {

        //모든 h2의 활성화를 없앤다 + 콘텐츠를 안 보이게 한다
        btn.forEach( j => {
            j.classList.remove("active");
            j.nextElementSibling.style.display = "none";
        } )
        //클릭한 h2의 button에 active 클래스를 추가
        i.classList.add("active");

        //클릭한 h2의 다음형제요소(콘텐츠)를 보이게 한다
        i.nextElementSibling.style.display = "block";
    }

    btn.forEach( i => {
        i.children[0].addEventListener("click", () => ng(i) );
    });

/*************************************/
    const black = document.getElementById("black");
    const li = document.querySelectorAll("#notice li");
    const popBtn = document.querySelector("#black button");

    let j = 0;
    const popup = () => {
        if (j == 0) {
            black.style.display = "block";
            j++
        } else {
            black.style.display = "none";
            j = 0
        }
    }

    li.forEach( i => {
        i.children[0].addEventListener("click", popup);
    });

    popBtn.addEventListener("click", popup);

});//end