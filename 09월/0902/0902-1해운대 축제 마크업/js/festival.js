document.addEventListener("DOMContentLoaded", () => {

    const slide_a = document.querySelectorAll("#slide a");

    let x = 2;
    const slide = () => {
        if(x > 0) {
            slide_a[x].style.opacity = 0;
            slide_a[x].style.transition = "opacity 0.5s";
            x--;
        }
        else {
            x = 2;
            slide_a.forEach(i => {
                i.style.opacity = 1;
                i.style.transition = "opacity 0.5s";
            });
        }
    }
    setInterval(slide , 2000); //2초 간격으로 지속적으로 slide라는 함수형변수를 호출한다


    /****/

    const notiGel_btn = document.querySelectorAll("#noti_gel h2 button");
    const multi_event = ["click", "focus"];
    
    notiGel_btn.forEach(i => {
        multi_event.forEach(event => {
            i.addEventListener( event, ()=>{
                
            })
        })
        i.addEventListener("click", () => {
            //0. notice ul과 gallery div를 보이지 않도록 한다.
            const notice_ul = document.querySelector("#notice ul");
            const gallery_div = document.querySelector("#gallery > div");
            const noti_gel = [notice_ul, gallery_div]; //배열처리


            noti_gel.forEach( j => {
                j.style.display = "none";
            });

            //1. h2를 찾아서 클래스를 제거한다.
            const h2 = document.querySelectorAll("#noti_gel h2");
            h2.forEach (ii => ii.classList.remove("active"));

            //2. 클릭한 버튼의 부모 <h2>를 찾는다.
            i.parentElement.classList.add("active");

            //3. 클릭한 곳의 컨텐츠가 보이게 한다.
            i.parentElement.nextElementSibling.nextElementSibling.style.display = "block";
        });
    });


    /****/

    const mainMenu = [...document.getElementsByClassName("mainMenu")];
    const subMenu = [...document.getElementsByClassName("subMenu")];
    
    mainMenu.forEach( i => {
        i.addEventListener("focus", () => {
            subMenu.forEach(j => j.style.height = 0);
            i.nextElementSibling.style.height = "130px";
        })
    });
    const subMenu_last = document.getElementById("last");
    subMenu_last.addEventListener("blur", ()=> {
        subMenu.forEach(i => i.style.display = "none");
    })


})//end...