document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.querySelectorAll("#layout h2");
    const nul = document.querySelector("#notice ul");
    const gdiv = document.querySelector("#gallery div");
    
    const ng = () => {
        
    };

    //nodelist는 .addEventlistener을 돌릴 수 없음(2개 이상이기 때문)
    btn.forEach( i => {
        i.addEventListener("click", ng );
    } );

});//end