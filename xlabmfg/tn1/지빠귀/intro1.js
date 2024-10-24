const sections = document.querySelectorAll('.section');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

sections.forEach((section) => section.addEventListener('click', toggleOpen));
sections.forEach((section) =>
  section.addEventListener('transitionend', toggleActive)
);
