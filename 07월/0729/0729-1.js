document.addEventListener("DOMContentLoaded", ()=>{

    const h2 = document.querySelectorAll("#layout h2");
    const nul = document.querySelector("#notice ul");
    const gdiv = document.querySelector("#gallery div");
    const black = document.getElementById("black");
    const close = document.querySelector("#popup button");
    
    const ng = (i) => { //클릭한 h2 1개
        
        h2.forEach( j => { //j = h2 2개(클릭하지 않은 h2도 들어있음)
            j.classList.remove("active"); //h2의 빨간바탕 없애기
            j.nextElementSibling.style.display = "none"; //ol과 div를 안 보이게 함
        });

        i.nextElementSibling.style.display = "block"; //클릭한 ol 또는 div를 보여라_둘 중 하나만 보여라
        i.classList.add("active"); //클릭한 h2에 클래스 active를 넣어라
    };

    const popup = i => {
        if(i != null) black.style.display = "block";//li의 a를 클릭하면 보여라
        else          black.style.display = "none";
        
        // //li의 a를 클릭하면 팝업이 보여라
        // black.style.display = "block";
    }
    
    //nodelist는 .addEventlistener을 돌릴 수 없음(2개 이상이기 때문)
    h2.forEach( i => {  //i = h2 2개(공지사항,갤러리)
        i.children[0].addEventListener("click", ()=>{ng(i);} ); //클릭한 h2 1개
    } );

    Array.from(nul.children).forEach( i => { //li가 4개
        i.children[0].addEventListener("click", () => {popup("오");} ); //a를 클릭하면 popup변수를 호출한다
    } );

    close.addEventListener("click", () => {popup();} ); //익명 함수를 쓰지 않고 바로 변수를 쓰면 인식을 못 하는 듯
});//end