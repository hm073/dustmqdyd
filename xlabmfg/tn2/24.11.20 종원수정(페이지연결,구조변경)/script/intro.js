const sections = document.querySelectorAll('.section');

/* sections.forEach((section) =>
  section.addEventListener('click', () => {
    sections.forEach((section) => {
      section.classList.remove('open');
    });
    sections.forEach((section) => {
      section.hasAttribute('open') ? section.classList.remove('open') : null;
    });
    section.classList.add('open');
  })
);
 */

sections.forEach((section) =>
  section.addEventListener('click', () => {
    if (section.classList.contains('open')) {
      // 이미 열려있는 섹션을 클릭한 경우, 해당 섹션만 닫습니다.
      section.classList.remove('open');
    } else {
      // 다른 섹션을 클릭한 경우, 모든 섹션을 닫고 클릭한 섹션만 엽니다.
      sections.forEach((s) => s.classList.remove('open'));
      section.classList.add('open');
    }
  })
);
