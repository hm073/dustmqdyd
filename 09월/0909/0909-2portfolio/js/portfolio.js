document.addEventListener("DOMContentLoaded", () => {

    const typing = document.getElementById("typing");
    // const text = "홍길동 홈페이지에\n 오신 것을 환영합니다.";
    const text = `홍길동 홈페이지에\n 오신 것을 환영합니다`;

    let i = 0;
    // alert(text.length) =22
    
    let t = " ";
    const typingg = () => {
        if(i < text.length) {
            // if(text[i] === " ") {typing.innerHTML += "&nbsp; ";}

            // typing.innerText += text[i]; //"홍" 부분
            // i++;

            // setTimeout(typingg, 100);

            t += text[i];
            typing.innerText = t;

            i++;
            setTimeout(typingg, 100);

        }
    }

    setTimeout(typingg, 300);

    
    
    //skill 요소의 progress 진행바
    const photo = document.querySelector("#photo progress");
    const html = document.querySelector("#html progress");
    const script = document.querySelector("#script progress");
    
    
    let p1 = 0;
    const aniPhoto = () => {
        if(p1 < 80) {
            p1++;
            photo.setAttribute("value", p1);
            setTimeout(aniPhoto, 10);
        }
    }
    // aniPhoto();
    
    let h1 = 0;
    const aniHtml = () => {
        if(h1 < 90) {
            h1++;
            html.setAttribute("value", h1);
            setTimeout(aniHtml, 15);
        }
    }
    // aniHtml();
    
    let s1 = 0;
    const aniScript = () => {
        if(s1 < 70) {
            s1++;
            script.setAttribute("value", s1);
            setTimeout(aniScript, 15);
        }
    }
    // aniScript();
    
    const click_a = document.querySelector("#click a");
    const menu_about = document.querySelector('#menu a[href="#about"]');
    const skill_a = [ click_a , menu_about ];
    
    const aniSkill = () => {
        aniPhoto();
        setTimeout(  aniHtml,    500 );
        setTimeout(  aniScript,  1000 ); 
    };
    
    // *****************************************************************
    /* 포트폴리오 영역 */
    
    const port1 = document.getElementById("port1");
    const skill = document.getElementById("skill");
    const port1_top = Math.trunc(skill.getBoundingClientRect().bottom);
    const port2 = document.getElementById("port2");
    const port2_top = Math.trunc(port1.getBoundingClientRect().bottom);
    const port3 = document.getElementById("port3");
    const port3_top = Math.trunc(port2.getBoundingClientRect().bottom);
    // alert(`${port1_top} ${port2_top} ${port3_top}`);

    const menu_port = document.querySelector('#menu a[href="#portfolio"]');

    window.addEventListener( "wheel" , e  => {
        e.preventDefault;     
        
        //휠을 아래로 내릴때
        if( window.scrollY >= 200  ) aniSkill(); //skill progressbar

        //포트폴리오 영역별 스크롤 top의 위치를 넘기면 act라는 클래스가 추가되는 구문
        if( window.scrollY >= port1_top ) port1.classList.add("act");
        if( window.scrollY >= port2_top ) port2.classList.add("act");
        if( window.scrollY >= port3_top ) port3.classList.add("act");
    }); 
    
    skill_a.forEach(i => i.addEventListener("click", aniSkill));
    menu_port.forEach(i => i.addEventListener("click", aniSkill));

    // *****************************************************************
    /* 이벤트 영역에서 썸네일을 클릭하면 팝업 보임 */
    const event_button = document.querySelectorAll("#event button");
    const popup = document.getElementById("popup");

    event_button.forEach( i => {
        i.addEventListener("click", () => {
            popup.style.display = "block";
            const src_1 = i.querySelector("img").getAttribute("src");
            const src_2 = src_1.replace(".jpg", "_big.jpg");
            popup.querySelector("img").setAttribute("src", src_2);
            popup.querySelector("h3").textContent = alt;
        });

        popup.querySelector("img").addEventListener("click", () => {
            popup.style.display = "none";
        });
    });

    
});//end