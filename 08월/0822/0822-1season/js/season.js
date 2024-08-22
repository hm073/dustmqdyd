document.addEventListener("DOMContentLoaded",()=>{

    //링크가 이동된 후에 해당 페이지로 ?p0 인수를 전달한다
    const para = new URLSearchParams(window.location.search); //?로 시작(쿼리 스트링 부분)
    // console.log(para.toString()); //?p0
    const i = para.get('p'); //쿼리 문자열에서 매개변수 p의 값을 반환함. 0 1 2 3


    //페이지가 로드된 후 실행
    const menu = document.getElementById("menu"); //iframe id=menu
    
    menu.addEventListener("load", ()=>{
        if( i !== null && i !== "") {

            //부모 페이지에서 자식 아이프레임의 콘텐츠에 접근 가능해야 함.
            const $a = menu.contentDocument.querySelectorAll("nav a"); //각 메뉴 봄,여름,가을,겨울

            $a[i].classList.add("act");
        }

    }); 
    

});//end