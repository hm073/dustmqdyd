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


    // const aniSkill = [ aniPhoto() , aniHtml() , aniScript() ];

    window.addEventListener( "wheel" , e  => {
        e.preventDefault;     
       
        //휠을 아래로 내릴때
        if( window.scrollY >= 200  ) {            
            aniPhoto();
            setTimeout(  aniHtml,    500 );
            setTimeout(  aniScript,  1000 );           
        }
    }); 

});//end