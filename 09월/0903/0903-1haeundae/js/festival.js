document.addEventListener("DOMContentLoaded" , ()=> {

    const slide_a = document.querySelectorAll( '#slide a' );//nodeList

    let i = 2;
    const slide = () => {

       if(i > 0) {
            slide_a[i].style.opacity = 0; 
            slide_a[i].style.transition = "opacity 0.5s";
            i--;
        }
        else {
            i = 2;
            slide_a[1].style.opacity = 1;
            slide_a[1].style.transition = "opacity 0.5s";
            slide_a[2].style.opacity = 1;
            slide_a[2].style.transition = "opacity 0.5s";
        }
    }    
    
    setInterval(  slide , 2000); //2초간격으로 지속적으로 slide라는 함수형변수를 호출한다.
    /*****************************/

    const noti_gel_btn = document.querySelectorAll("#noti_gel h2 button"); //nodeList
    const notice_ul = document.querySelector("#notice ul");
    const gallery_div = document.querySelector("#gallery>div");
    const noti_gel = [notice_ul , gallery_div];

    const multi_event = ["click" , "focus"];
    noti_gel_btn.forEach( i => {
        
        multi_event.forEach( ev => {
            i.addEventListener( ev , ()=> {

                //0. #notice ul과 #gallery>div 를 보이지 않도록 한다.
                noti_gel.forEach( j => {
                    j.style.display = "none";               
                });

                const parent = i.parentElement;
                const remove = ()=> {
                    const h2 = document.querySelectorAll("#noti_gel h2");
                    h2.forEach( ii =>  ii.classList.remove('active') );                    
                    i.parentElement.classList.add("active");
                }
                parent ?  remove()    :  null;  //삼항연산자

                //3. 클릭한 곳의 컨텐츠가 보이게 한다.
                i.parentElement.nextElementSibling.nextElementSibling.style.display = "block";
            });
        });            
    });

    /*****************************/
    const mainMenu = [...document.getElementsByClassName('mainMenu') ];
    const subMenu =  [...document.getElementsByClassName('subMenu')];

    mainMenu.forEach( i => {
        i.addEventListener("focus" , () => {
            subMenu.forEach( j =>   j.style.height = 0  );
            i.nextElementSibling.style.height = '130px';               
        });
    });
    const subMenu_last = document.getElementById('last');
    subMenu_last.addEventListener("blur" , ()=> {
        subMenu.forEach( j =>   j.style.height = 0  );
    });

    
    /*****************************/
    const notice_li = document.querySelectorAll("#notice li a");
    const popup = document.getElementById("popup");
    const btn = document.querySelector("#popup button");

    let pop = true;
    const open = () => {
        popup.style.display = "block";
        pop = false;
    }

    const close = () => {
        popup.style.display = "none";
        pop = true;
    }

    notice_li.forEach( i => {
        i.addEventListener("click", () => {
            pop ? open() : close();
        });
    });
    btn.addEventListener("click", () => {
        btn ? close() : open();
    })

}); // end....................