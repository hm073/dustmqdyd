document.addEventListener("DOMContentLoaded", () => {
    //메뉴 다운
    const ul = document.querySelectorAll("header ul");
    const div = document.getElementById("down");

    ul.forEach(item => {
        item.addEventListener('mouseenter', () => {
            div.classList.add('show'); // 호버 시 클래스 추가
        });
        item.addEventListener('mouseleave', () => {
            div.classList.remove('show'); // 호버 해제 시 클래스 제거
        });
    });



    //페이드 슬라이드:  2.8초마다 함수 호출
	const slideImg = document.querySelectorAll("#slide img");

    let e = 1;
    const fade = () => {
        slideImg.forEach(i => {
            i.style.opacity = 0;
            i.style.transition = "all 1.5s";
        });
        slideImg[e].style.opacity = 1;
        e++;
        if (e == 3) e = 0;
    }

    setInterval(fade , 2000);




    // 팝업
    const notice_a = document.querySelectorAll("#notice a");
    const pop = document.getElementById("black");
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