// Produzindo o Modal :)
// Modal - Fórmula.Bet
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// Quando o usuário clicar em <span> (x), fechar o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fechar
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   

// Modal - Carrinhos
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[1]; // Observe que estamos pegando o segundo elemento com a classe "close"

// Quando o usuário clicar no botão, abrir o modal 
btn2.onclick = function() {
  modal2.style.display = "flex";
}

// Quando o usuário clicar em <span> (x), fechar o modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fechar
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}