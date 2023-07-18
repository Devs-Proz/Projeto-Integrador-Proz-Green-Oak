 // Função para carregar o navbar e o footer em todas as páginas
 function loadCommonElements() {
  fetch('./navbar.html')
  
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
    });

  fetch('./footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
    });
}