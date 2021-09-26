let rellax = new Rellax(".rellax");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("home").addEventListener("click", topFunction);

