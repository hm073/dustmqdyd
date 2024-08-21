document.addEventListener("DOMContentLoaded", () => {

    //봄 여름 가을 겨울 텍스트가 들어있는 <a>
    const $a = [...document.getElementsByTagName('a')];

    //왼쪽 메뉴 클릭시 활성화 되도록 한다
    $a.forEach( i => {
        i.addEventListener("click", () => {

            //클릭한 <a>에서 부모의 부모<ul>를 찾아가서, 그 자식(li) 중 클릭한 <a>가 있는 <li>의 index 번호를 찾는 것
            const n = [...i.parentElement.parentElement.children].indexOf(i.parentElement)
            //i(클릭한 a)의 부모(li)의 부모(ul)의 아이(li)의 배열 에서 클릭된 a(i)의 부모(li)
            //0, 1, 2, 3
            
            //메뉴의 모든 클래스 삭제
            /* $a.forEach( j => [...j.classList].forEach( z => {j.classList.remove( z )})); */
            $a.forEach(j => j.removeAttribute("class"));

            //클릭한 a에 2개의 클래스를 추가
            i.classList.add("menuOver", `m${n+1}`); //m1,m2,m3,m4

        });
    });

    
    //휠(->문서document나 브라우저window) 동작에 따른 메뉴 <a> 활성화
    document.addEventListener("scroll", () => {

        //브라우저 높이(화면에 꽉 차는 디자인이기 때문)
        const h1 = window.innerHeight; //콘텐츠만 보이는 곳의 높이, 스크롤 할 때마다 리셋되서 처음부터 다시 시작되는 것이기 때문에 재할당이 필요없어 const사용

        //스크롤의 높이(내리거나 올린 후의 높이)
        const t1 = document.documentElement.scrollTop || document.body.scrollTop;

        //계산_ 스크롤 높이를 브라우저 높이로 나눈 정수값(소수점 무시)
        const h = Math.trunc( t1 / h1 ); //값이 0,1,2,3로 나옴
        
        //모든 클래스 삭제(위와 같음)
        $a.forEach( j => [...j.classList].forEach( z => {j.classList.remove( z )}));

        //해당 메뉴(휠 했을 때 보이는 화면)에 대한 클래스 추가
        const li = document.getElementsByTagName('li'); //콜렉션, 몇번째 li인지가 중요해서 배열로 만들 필요가 없음

        if( li[h] ){
            li[h].querySelector('a').classList.add("menuOver", `m${h+1}`); //id가 없을 때 요소 하나를 지칭할 수 있음
        }

    });


});//end