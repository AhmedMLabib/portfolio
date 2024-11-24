let links = document.querySelectorAll("nav ul.links li a");
let sections = document.querySelectorAll("body > div");

window.addEventListener("scroll", () => {
  sections.forEach((section, index) => {
    sectionTop = section.offsetTop;
    sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      links[index].classList.add("active");
    }
  });
});
