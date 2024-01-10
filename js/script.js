// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Adiciona o evento de clique aos links da navegação
  var links = document.querySelectorAll('a.nav-link');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      if (this.hash !== "") {
        // Previne o comportamento padrão do clique do link
        event.preventDefault();

        // Selecione o elemento alvo
        var targetElement = document.querySelector(this.hash);

        // Role suavemente para o elemento alvo
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


  