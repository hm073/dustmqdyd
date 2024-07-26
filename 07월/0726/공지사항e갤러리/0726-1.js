document.addEventListener("DOMContentLoaded", ()=>{

    const h2 = document.querySelectorAll("#layout h2");
    //링크 걸리는 부분은 h2의 자식인 a
    //children에 접근해야 되는 걸 잊으면 안됨

    //노드리스트면 forEach가 되지만 콜렉션이 뜨면 array.from을 써서 떨어뜨려야되기 때문에 어려워짐(alert으로 확인했을 때) -> getElements 로 가져오는 요소들은 다 콜렉션으로 가져오는 것(주의)

    //a에 프로그램을 짜야 tab을 통해서 이동 가능, 웹접근성이 높아짐

    //i는 클릭한 h2, j의 경우 모든 h2
    const wy = ( i ) => {
        //const t = i.innerText;
        //switch를 위한 구문으로 삭제

        // h2[0].classList.remove("yellow");
        // h2[1].classList.remove("yellow");
        //h2.forEach( j => { j.classList.remove("yellow");} ); //위와 같은데 여러개를 한 번에 처리할 때 유리
        h2.forEach( j => {
            j.nextElementSibling.style.display="none";
            if( j.matches(".yellow") ) //()안과 매치되는 걸 찾아라>일치하면 true 그러면 아래 구문을 실행해라
            {j.classList.remove("yellow");}
            //else {j.nextElementSibling.style.display="none"};
        });
        i.classList.add("yellow");
        i.nextElementSibling.style.display="block";

        /*switch(t) {
            case "공지사항" :
                i.nextElementSibling.style.display="block";
                //클릭한 부분.클릭한 부분의 형제요소.스타일.화면=블록으로 만듦

                break;
            case "갤러리" :
                i.nextElementSibling.style.display="flex";
                break;
                
        //switch는 (변수)에서 case "일치하는 글"이 있다면 아래의 코드를 적용하라는 의미
        };*/
    };

    /*forEach 없이 하는 방법
    h2[0].children[0].addEventListener("click", ()=>{alert("공지사항");});
    //요소.속성.메소드( 인수1, 인수2 /인수 라고 부름 );
    h2[1].children[0].addEventListener("click", ()=>{alert("갤러리");});*/

    h2.forEach(  i => { 
        /*각 h2의 자식요소를 클릭하면 어떤 함수에 인수를 넣어서, 함수를 실행하면서 인수를 전달한다.*/ 
        //요소. 속성. 메소드()
        //h2.children[0].메소드()
        i.children[0].addEventListener("click"/*이벤트 이름*/, ()=>{wy(i);}/*함수에 인수를 넣어야 함-wy라는 임의의 함수에 forEach i 즉 h2의 2자식 요소를 인수로 넘김*/);
    } ); //함수형 인수가 하나 들어감
    //요소.메소드(인수1);
    //forEach( (매개변수1, 매개변수2, 매개변수3)=>{실행문});
    //forEach에는 h1공지사항, h2갤러리가 같이 들어있음, ()안에 x,y,z등으로 임의의 이름을 지정가능




    /*팝업*/
    //공지 링크를 클릭하면 팝업 뜨게 하기
    const notiLi = document.querySelectorAll("#notice li");
    const black = document.getElementById("black");
    const btn = document.querySelector("#popup button");


    //i = 공지의 li
    const popshow = (i) => {
        if(i == null) black.classList.add("show");
        else         black.classList.remove("show");
        //black의 클래스 show가 보여야 된다는 의미이기 때문에 css에 #black.show가 있어야 함
        //강사님은 opacity로 가렸기 때문에 opacity 100으로 쓰임
        //이 css에서는 display: none으로 가렸기 때문에 display: block으로 한 것(css)

        //위 구문에는 .show를 지우고 추가하고 구문이기 때문에 css .show에서 display: block이나 opacity: 100이 필요함
    }

    notiLi.forEach( i => {
        i.children[0].addEventListener("click", () => {popshow();} );

    });
    /*function popshow() {
        black.style.display = "block";
    }
    //화살표 함수의 옛날 방식

    notiLi.forEach(i => {
        i.children[0].addEventListener("click", popshow );
        //function함수를 쓰면 ()없이 변수명만..
    });*/

    //닫기버튼
    btn.addEventListener("click", () => {popshow(btn);} )
    //popshow로 어떤 것이든 반환한다면 show(팝업이 보이게 하는 거)가 실행되지 않도록 했기 때문에 버튼을 누르면 버튼이라는 값을 popshow에 반환하도록 해서 팝업이 안 보이게 함. 참고로 popshow( ) <괄호 안에 반환하는 값을 적는 것인데 아무거나 적어도 됨. 어쨌든 이 값을 반환한다는 것이기 때문_

    //esc로 닫기
    document.addEventListener("keydown" , (e) => {
        if( e.key == "Escape" ) {popshow(btn);}
    });
    //이벤트 값 'e'
    //keydown 이벤트를 익명함수 e에 넣어서 받음
    //만약 keydown으로 얻은 key의 값이 Escape 즉 esc라면 popshow로 btn값을 반환함. -> 그러면 popshow는 null이 아니게 됨으로 show를 지움 즉 팝업을 지움

});//end