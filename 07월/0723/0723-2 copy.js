document.addEventListener("DOMContentLoaded",()=>{

    const btn = document.getElementsByClassName("material-symbols-outlined")[0];
    const nav = document.getElementsByTagName("nav")[0];

    /*슬라이드 부분*/
    const slide = document.getElementById("slide"); //움직이는 부분
    let slideArea = document.getElementById("slideArea"); //슬라이드전체
    
    /*h2의 위치 설정*/
    let h2 = document.getElementsByTagName("h2")[0];
    let sw = slideArea.clientWidth; //슬라이드 전체의 (화면상)폭
    let sh = slideArea.clientHeight; //슬라이드 전체의 (화면상)높이
    let h2Width = h2.clientWidth;    //h2의 화면상 폭
    let h2Height = h2.clientHeight;  //h2의 화면상 높이

    //양방향 터치를 위해서 추가
    slide.style.width = sw * 3; //sw슬라이드 보이는 곳의 넓이*3 = 슬라이드 전체 넓이(이미지의 3배해서 양쪽으로 배치해야됨)

    let sww = (sw-h2Width) / 2; //슬라이드 전체 폭에서 h2의 폭을 뺀 나머지의 반
    h2.style.left = sww + "px"; //나머지의 반 폭을 h2의 레프트에 픽셀로 거리를 주는 것
    let shh = Math.trunc (sh-h2Height) / 2; //위와 같음(높이) 
    h2.style.top = shh + "px"; //위와 같음(높이)
    /*여기까지*/

    let menu = () => {                  //메뉴변수 = 함수형 변수
        if(nav.clientHeight == 0) nav.style.height = "205px";
        //실행문이 하나면 중괄호 없애도 됨
        else nav.style.height = 0;
    }
    // 만약 메뉴의 화면상 높이가 0이면(접어진 상태) 메뉴의 높이를 205px로
    // 그렇지 않으면 메뉴의 높이가 0으로(205로 펼쳐진 상태가 되기 때문에)


    const circleArea = document.getElementById("circle");//동그라미3개 부모영역(div)
    let i = 0;//동그라미 위치 표시(할 예정)
    /**************왼쪽 슬라이드*************/
    

    const toLeftMove = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '-200%';

        setTimeout(pos1,1000);

        ///////////////////////////
        circleArea.getElementsByClassName('red')[0].classList.remove('red'); //red라는 클래스를 가진 요소에서 클래스 이름을 삭제한다
        i = (i+1) % 3; //3은 동그라미 개수이고 1%3하면 1을 3으로 나눌 수가 없으므로 나머지는 그대로 1이 된다.
        //1 2 0
        circleArea.children[i].classList.add('red');
        //
    };
    const toRightMove = () => {
        slide.style.transition = 'left 1500ms';
        slide.style.left = '10%';

        //
        circleArea.getElementsByClassName('red')[0].classList.remove('red');
        i = (i+2) % 3; //math.abs 숫자의 절대값(양수)만 반환(원래 썼지만 오류나서 없앰)
        //2 1 0
        circleArea.children[i].classList.add('red');
        //

        setTimeout(pos2,1000);


    };
    const pos1 = () => {
        slide.append(slide.firstElementChild);
        slide.style.left = '-100%';
        slide.style.transition = 'none';
    };
    const pos2 = () => {
        slide.style.left = '-100%';
        slide.prepend(slide.lastElementChild);
        slide.style.transition = 'none';
    };
    //po1이라는 변수 = 함수
    //첫번째 슬라이드를 잘라서 뒤에 추가함. 이때 부드러운 장면 전환은 없음. 그리고 슬라이드의 화면은 (보이는 슬라이드 화면)만큼 -좌표. 즉 왼쪽 -(화면상 폭)px만큼

    /***********오른쪽 슬라이드************/
    //let pos2 = sw + 'px';
    //pos2라는 변수는 (화면상 폭px) 이다

    

    btn.addEventListener('click', menu); //btn에 클릭이라는 일이 생기면 menu라는 변수(함수로 쭉 써도 되긴 함)를 실행하겠다는 의미
    //window.addEventListener('resize', ss ); //화면의 크기가 바뀌면 ss라는 변수에 따라서 알아서 조정되라는 의미입니다만 잘 되지 않음.

    //setInterval(toLeftMove, 2500); //왼쪽 자동 슬라이드

    /*양쪽 터치 이벤트 만들기*/
    let x1 = 0; //터치 시작점
    let x2 = 0; //터치 끝점
    slideArea.addEventListener("touchstart", e=>{
        x1 = e.touches[0].clientX;
        //터치 시작점의 x좌표를 x1 변수에 저장함

        slideArea.addEventListener("touchend", zz = e=>{
            x2= e.changedTouches[0].clientX;
            //터치 마지막점의 x좌표를 x2 변수에 저장함

            slideArea.removeEventListener("touchend", zz); //한번만 실행되도록 하기 위함.

            if (x1>x2) toLeftMove(); //함수형 변수이기 때문에 뒤에()가 붙는 것
            //시작점이 끝점보다 크면 <- 왼쪽을 향해서 이동
            if (x1<x2) toRightMove();
            //시작점이 끝점보다 작으면 -> 오른쪽을 향해서 이동
            
        })
    });

});//end(뭔가 제대로 안되서.. 좀 더 알아볼 것)