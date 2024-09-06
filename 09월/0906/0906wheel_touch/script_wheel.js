document.addEventListener("DOMContentLoaded", ()=>{

    const layout = document.getElementById("layout");
    const section = [...layout.children];

    let page = 0;
    const lastpage = section.length - 1; //3 인덱스번호여야하기때문

    window.addEventListener("wheel", e => {
        e.preventDefault; //아무것도 하지 말라
        if(e.deltaY > 0) page++;
        else if(e.deltaY < 0) page--;

        if(page < 0) page = 0;
        else if(page > lastpage) page = lastpage;

        layout.style.top = page * (-100) + "vh";

    }, {passive:false /* 부과기능부분 - 기본기능을 끄는 거(passive:false)*/})

});