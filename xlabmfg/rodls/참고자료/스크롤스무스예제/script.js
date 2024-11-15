// script.js

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // 페이지가 100px 이상 스크롤되었으면 버튼을 보이게 함
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  // "Top" 버튼 클릭 시 스크롤을 부드럽게 페이지 맨 위로 이동
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0, // 페이지의 맨 위로
      behavior: 'smooth' // 부드러운 스크롤
    });
  });
  