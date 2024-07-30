document.addEventListener("DOMContentLoaded", ()=> {

    const slide = document.getElementById("slide");
    // alert (typeof slide) //object
    
    const toDown = () => {
        slide.style.top = 0; //내려왔다
        slide.style.transition = "top 0.5s";

        setTimeout(zz, 500); //다시 올라가야 함
    };
    const zz = () => { //다시 올라갈 때 넣을 함수형 변수
        slide.style.top = "-300px";
        slide.style.transition = "none"; //시간없앰. 즉시실행
        slide.prepend(slide.children[2]);
    };

    setInterval(toDown, 2500);

    
    //////팝업//////

    const noticeLi = document.querySelectorAll("#notice li:not(:first-child)");
    const black = document.getElementById("black");
    const pop_btn = document.querySelector("#popup button");

    const popup = (i) => {
        if(i == "닫기") black.style.display = "none";
        else black.style.display = "block";
    }

    noticeLi.forEach( i => {
        i.children[0].addEventListener("click", popup);
    });

    pop_btn.addEventListener("click", ()=>{ popup("닫기"); } );


});//end