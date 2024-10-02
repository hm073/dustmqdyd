// $(document).ready(function(){
// 	$("#top>button").click(function(){
// 		console.log( $(this).text() );
// 		$("#layout>nav").slideToggle();
// 		if( $(this).text()=="close" ){
// 			$(this).text("dehaze");
// 		} else {
// 			$(this).text("close");
// 		}
// 	});
	
// 	$("a").click(function(){
// 		$("#layout>nav").slideUp();
// 	});
// });///////////////////////전체끝!

document.addEventListener("DOMContentLoaded", () => {

	const menubtn = document.getElementsByClassName("material-icons")[0];
	const nav = document.getElementsByTagName("nav")[0];

	menubtn.addEventListener("click", () => {
		const t = menubtn.textContent;

		nav.style.transition = "left 0.5s"
		if (t == "dehaze") {
			menubtn.textContent = "close";
			nav.style.left = 0;
		}
		else {
			menubtn.textContent = "dehaze";
			nav.style.left = "-110%";
		}
	});

	const nav_a = nav.querySelectorAll("li a");
	
	nav_a.forEach(i => {
		i.addEventListener("click", () => {
			menubtn.textContent = "dehaze";
			nav.style.left = "-110%";
		});
	});

	//문서의 다른 부분을 클릭했을 때 nav를 닫는 이벤트
	document.addEventListener("click", (event) => {
		if(!menubtn.contains(event.target) && !nav.contains(event.target)) {
			menubtn.textContent = "dehaze";
			nav.style.left = "-110%";
		}
		//클릭한 요소가 menubtn이나 nav안에 포함되어 있지 않으면(두 조건을 모두 충족할 경우) nav를 닫는다(-110%)
	});
	
})//end