document.addEventListener("DOMContentLoaded",()=>{

    //[봄, 여름, 가을, 겨울] ...연산자(스프레드 연산자)는 콜렉션을 배열로 변환한다(=Array.from)
    const seasons = [ ...document.querySelectorAll("main section")];

    //forEach는 배열을 떨궈서 각각으로 전환
    seasons.forEach( (i, j) => {

        //각각 휠이벤트가 발생하면
        i.addEventListener("wheel", e => {

            //기본동작을 무력화(한 장면씩 보기 위해서-스크롤을 더 크게 이동시켜야 됨)
            e.preventDefault();

            //휠의 y좌표 올리거나 낼렸을 때 휠Y좌표를 가져와야 함
            let d = e.deltaY || e.wheelDelta

            //스크롤바의 Y값
            let y = window.scrollY;
            console.log(y);

            //봄 여름 가을 겨울의 index(현재 보고 있는 화면)
            let c = seasons[j];

            //휠을 아래로 내릴 때,
            if( d > 0 ) {
                let n = c.nextElementSibling; //나를 기준으로 다음 형제요소
                if ( n ) y = n.getBoundingClientRect().top + y; //다음 형제 요소의 top의 높이(현재 높이에서 다음형제요소의 top까지를 더해야 함)
            }

            //휠을 위로 올릴 때,
            else {
                let p = c.previousElementSibling; //나를 기준으로 이전 형제요소
                if ( p ) y = p.getBoundingClientRect().top + y; //위에 이전 형제요소가 있다면, 자신의 값에서 clientRect top의 값을 더함
            }

            //부드럽게 위치이동
            window.scrollTo({
                top:y,
                behavior:"smooth"
            });
            //키가 들어가는 건 객체이기 때문에 {키1:값, 키2:값}으로 적어야 함 -> 이렇게 적는 걸 오브젝트라고 함

        });

    } );


});//end