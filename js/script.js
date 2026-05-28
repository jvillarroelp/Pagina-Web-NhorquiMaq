console.log("Página web cargada correctamente");

const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero, .hero-video");

window.addEventListener("scroll", function () {
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > hero.offsetHeight * 0.04) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Control para boton de pause
const video = document.getElementById("heroVideo");
const videoControl = document.getElementById("videoControl");

if (video && videoControl) {
  videoControl.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      videoControl.textContent = "❚❚";
    } else {
      video.pause();
      videoControl.textContent = "▶";
    }
  });
}