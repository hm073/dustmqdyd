document.addEventListener("DOMContentLoaded",()=>{

    const menu = document.getElementById("menu"); //iframe id=menu
    const nav = menu.contentDocument.querySelectorAll("nav a"); //각 메뉴 봄,여름,가을,겨울

    //페이지가 로드된 후 실행
    menu.addEventListener("load", ()=>{
        //부모 페이지에서 자식 아이프레임의 콘텐츠에 접근 가능해야 함.
        nav.forEach( i => {
            i.classList.add("act");
        });
    });
    

});//end