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
		})
	})
	
})//end