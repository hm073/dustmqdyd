document.addEventListener("DOMContentLoaded", ()=> {

    //아래에서 위로 자동 슬라이드

    const $slide = document.getElementById("slide"); //#slide 변수지정

    const totop = () => {
        //객체(객체를 가진 변수).속성.속성="값";
        $slide.style.top = "-300px"; //위로 올라갈거면 '-'
        $slide.style.transition = "top 1s";

        setTimeout(app, 1000);
        //콜백함수: 시간이 필요한 실행문이더라도 먼저 실행할 수 있음. 즉시 실행되는 실행문은 기다리도록 한다)
    }
    const app = () => {
        $slide.append($slide.firstElementChild);
        //슬라이드 영역의 1번째 자식이 영역 안쪽에서 맨 끝으로 이동>추가한다: append
        //시간을 쓸 때 자바스크립트의 경우 1000, css의 경우 1s라고 씀
        $slide.style.top = 0;
        $slide.style.transition = "none";
    };

    setInterval(totop, 2500);
    //콜백함수: 지체시간 후 함수 호출(함수:"할일",지체시간)
    //setInterval계속(함수에 적힌 일을, 지체시간 간격으로)홈페이지를 끌 때까지 지속.


    /************************/
    const notigallh2 = document.querySelectorAll("#notigall h2");
    const notice = document.querySelector("#notice ol");
    const gallery = document.querySelector("#gallery div");

    const sh = (i) => {
        const txt = i.innerText

        notigallh2[0].classList.remove("hit");
        notigallh2[1].classList.remove("hit");
        i.classList.add("hit");

        switch(txt) {
            case "공지사항" : 
                notice.style.display='block';//객체.속성.속성='값';
                gallery.style.display='none';
                break;
            case "갤러리"   : 
                notice.style.display='none';//객체.속성.속성='값';
                gallery.style.display='flex';
                break;

        }   
    }
    
    notigallh2.forEach( i => {
        i.children[0].addEventListener("click", () => {sh(i);});
    }) //인수로 보내서 매개변수로 받는 거.....?


    /************************/
    const black = document.getElementById("black");
    const btn = document.querySelector("#popup button");
    const noticeL = document.querySelectorAll("#notice ol li");
    
    const popup =  (i ) => {
        if(i === '열기') black.classList.add('show');
        else            black.classList.remove('show');          
    }

    noticeL.forEach(i => {
        i.children[0].addEventListener("click", ()=> { popup("열기"); }); 
    });

    /*닫기*/
    btn.addEventListener("click", ()=> { popup("닫기"); } )

});//end