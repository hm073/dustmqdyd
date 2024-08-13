document.addEventListener("DOMContentLoaded",()=>{

    //이미지 3개 선택
    const images = document.querySelectorAll("#index main img");

    let z = images.length -1; //이미지 3개 [0,1,2] 중 2를 보고 있음

    const fade = () => {
        images.forEach( ( i , j ) => {
                i.style.transition = "opacity 1s";
                if( j != 0 ) i.style.opacity = 0;
            });
            if( z > 0 ) {
                images[z].style.opacity = 1;
                z--;
            } else {
                images.forEach( i => {
                    i.style.opacity = 0;
                    images[0].style.opacity = 1;
                    z = 2;
                });
            }
        // forEack의 매개변수는 1개인데, 익명함수(function(){})임, function 안에 들어가는 매개변수가 3개인데 화살표 함수를 쓰면 (익명함수의 매개변수3개 자리)=>{}가 됨
    }

    setInterval( fade, 2000 ) //영원히 자동실행, 2초 후에 fade라는 함수형 변수를 실행

});//end