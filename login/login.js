document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault()

    alert("Login efetuado com sucesso, redirecionando para a pagina inicial!")

    window.location.href = "/"
})


function setCustomValidationMessages(id, message) {
    const element = document.getElementById(id);
    element.oninvalid = function (event) {
        event.target.setCustomValidity(message);
    };
    element.oninput = function (event) {
        event.target.setCustomValidity('');
    };
}

setCustomValidationMessages('email', 'Por favor, insira um endereço de e-mail válido que contenha um @.');
setCustomValidationMessages('password', 'Por favor, preencha este campo.');