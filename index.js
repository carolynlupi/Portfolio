// Using JavaScript to add the "show" class when needed
const skillElements = document.querySelectorAll('.skills__skill');

window.addEventListener('scroll', () => {
  skillElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}
