$(document).ready(function(){
	
	//   상단메뉴에 마우스를 댈때 + 웹접근성 강화 (엔터친다)
	$("nav  ul").on("mouseenter  click " , function(){
		$("nav  nav").stop().slideDown();
	});   
		
	//상단메뉴에 마우스를 치울때 
	$("nav  ul").mouseleave( function(){
		$("nav  nav").stop().slideUp();
	}); 
	
	//상단메뉴에서 마지막 항목에  포커스를 잃을때:  웹접근성강화
	$(".last").blur( function(){
		$("nav  nav").stop().slideUp();
	}); 	
	
	
	/* 상단메뉴 호버
	$("nav  ul").hover(
			function(){ $("nav  nav").stop().slideDown();   } ,
			function(){  $("nav  nav").stop().slideUp();  }
	);  */	
	
	
	//페이드 슬라이드:  2.8초마다 함수 호출
	setInterval( fading ,  2800 );
	let i = 2;
	function fading(){
		if(    $("#slide a").eq(1).css("display")  ==  "none"    ){
			$("#slide a").fadeIn(800);
			i = 2;
		} else {
			$("#slide a").eq(i).fadeOut(1000);
			i--;
		}
		
	}// fading() 끝
	
	
});////////////////////////////////전체 끝