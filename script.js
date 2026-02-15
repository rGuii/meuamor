// Mostra a carta e toca a música do index
function abrirCarta() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("carta").classList.remove("hidden");

  const musica = document.getElementById("musica");
  musica.play();
}

// Vai para a página das memórias (não toca música aqui)
function irMemorias() {
  window.location.href = "memorias.html";
}

let slideIndex = 0;

function proximoSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[slideIndex].classList.remove("active");

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].classList.add("active");
}
