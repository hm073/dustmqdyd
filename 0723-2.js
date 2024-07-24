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

    let ss = () => {                    //ss변수 = 함수형 변수(자동화)
        if(window.innerWidth >= 1024) nav.style.height = "auto";
        //만약 윈도우의 내부 길이가 1024보다 크거나 같으면 메뉴의 높이가 자동
        else nav.style.height = 0;
        //아니면 메뉴의 높이가 0
        pos = sw * (-1) + "px";
        //새로고침 안 해도 화면 크기가 바뀌면 자동 맞춤
        //-(슬라이드 전체의 화면상 길이)px

        /*위쪽 변수랑 중복으로 적혀있는데 이건 자동화로 폭을 바꾸기 위한 것
        이것 때문에 위쪽 변수가 const가 아닌 let으로 지정됨*/
        /*slide범위 설정*/
        slideArea = document.getElementById("slideArea");

        /*h2의 위치 설정*/
        h2 = document.getElementsByTagName("h2")[0];
        sw = slideArea.clientWidth;
        sh = slideArea.clientHeight;
        h2Width = h2.clientWidth;
        h2Height = h2.clientHeight;

        sww = (sw-h2Width) / 2;
        h2.style.left = sww + "px";
        shh = Math.trunc (sh-h2Height) / 2;
        h2.style.top = shh + "px";
        /*여기까지*/
    }

    /**************왼쪽 슬라이드*************/
    let pos1 = sw * (-1) + "px";  //pos에서 pos1으로 이름 변경 후, (-1)에서 (-2) 로 변경
    //pos1이라는 변수는 슬라이드의 화면상 폭에 * -1 = -(화면상 폭px)
    
    const circleArea = document.getElementById("circle");//동그라미3개 부모영역(div)
    let i = 0;//동그라미 위치 표시(할 예정)

    const toLeftMove = () => {                  //왼쪽으로 터치할 때 왼쪽 슬라이드*********
        slide.style.transition = 'left 1.5s' //setInterval보다 빨리 가야됨
        //슬라이드의 부드러운 이동 모션
        slide.style.left = pos1; //pos -> pos1
        //슬라이드의 왼쪽 위치는 pos1(즉 : -화면상 폭) :: 처음 화면이 슬라이드2가 되는 게 맞나본데
        //슬라이드1을 하려면 어떻게 해야될지 모르겠음

        /*동그라미 색 제거*/
        circleArea.getElementsByClassName('red')[0].classList.remove('red'); //red라는 클래스를 가진 요소에서 클래스 이름을 삭제한다
        i = (i+1) % 3; //3은 동그라미 개수이고 1%3하면 1을 3으로 나눌 수가 없으므로 나머지는 그대로 1이 된다.
        //1 2 0
        circleArea.children[i].classList.add('red'); //index[i]에 red 클래스를 넣음 //1 2 0 순서로 바뀐다는 뜻
        
        /* (i+1)%3을 보면
        0+1= 1%3...1 이므로 i=1
        1+1= 2%3...2 이므로 i=2
        2+1= 3%3...0 이므로 i=0
        이 되기 때문 */

        setTimeout(po1, 1500);
        //1.5초 후에 한 번만 po1을 준다
        //po1은 슬라이드 뒤쪽에 슬라이드의 가장 첫번째 요소를 잘라서 이동시키라는 함수형 변수

    }

    const po1 = () => {                                //po -> po1으로 변경
        slide.append(slide.firstElementChild);
        // slide.style.left = 0;
        slide.style.left =  sw * (-1) + "px";          //슬라이드 영역 -100%
        slide.style.transition = 'none';
    }
    //po1이라는 변수 = 함수
    //첫번째 슬라이드를 잘라서 뒤에 추가함. 이때 부드러운 장면 전환은 없음. 그리고 슬라이드의 화면은 (보이는 슬라이드 화면)만큼 -좌표. 즉 왼쪽 -(화면상 폭)px만큼

    /***********오른쪽 슬라이드************/
    let pos2 = sw + 'px';
    //pos2라는 변수는 (화면상 폭px) 이다

    const toRightMove = () => {                  //오른쪽으로 터치할 때 오른쪽 슬라이드*********
        slide.style.transition = 'left 1.5s' //setInterval보다 빨리 가야됨
        //부드러운 화면 전환 효과
        slide.style.left = 0;
        //슬라이드의 왼쪽 위치는 pos2 즉 +(화면상 폭px)

        /*동그라미 색 제거*/
        circleArea.getElementsByClassName('red')[0].classList.remove('red');
        i = (i+2) % 3; //math.abs 숫자의 절대값(양수)만 반환(원래 썼지만 오류나서 없앰)
        //2 1 0
        circleArea.children[i].classList.add('red');
        //index[i]에 red 클래스를 넣음 //2 1 0 순서로 바뀐다는 뜻

        setTimeout(po2, 1500);
        //1.5초 후에 한번만 po2를 준다
        //po2는 슬라이드 화면의 앞쪽에 슬라이드의 마지막 요소를 잘라서 붙이라는 함수형 변수

    }

    const po2 = () => {                                //po2으로 변경(오른쪽이기 때문에)
        slide.prepend(slide.lastElementChild);         //append->prepend, fristE -> lastE로 변경
        slide.style.left =  sw * (-1) + "px";          //슬라이드 영역 -100%
        slide.style.transition = 'none';
    }

    btn.addEventListener('click', menu); //btn에 클릭이라는 일이 생기면 menu라는 변수(함수로 쭉 써도 되긴 함)를 실행하겠다는 의미
    window.addEventListener('resize', ss ); //화면의 크기가 바뀌면 ss라는 변수에 따라서 알아서 조정되라는 의미입니다만 잘 되지 않음.

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