/*===== MENU SHOW =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link");

/* Toggle menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

/* Remove menu on link click */
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SKILLS ANIMATION =====*/
const skills = document.querySelectorAll(".skills__bar");

function skillAnimation() {
  skills.forEach((skill) => {
    const percentage = skill.nextElementSibling.textContent;
    skill.style.width = percentage;
  });
}
window.addEventListener("load", skillAnimation);

/*===== SCROLL REVEAL =====*/
ScrollReveal().reveal(".home__data, .home__social, .home__img", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".about__img, .about__subtitle, .about__text", {
  origin: "left",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".skills__container, .skills__img", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".work__container", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".contact__container", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
