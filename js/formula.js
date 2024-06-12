/**
 * @param event {SubmitEvent}
 */
function handleFormAposta(event) {
    event.preventDefault()

    // Resetar os campos do form
    event.currentTarget.reset()

    alert("Sua aposta foi feita, fique ligado para ver seus resultados")
}

/**
 * @param event {SubmitEvent}
 */
function handleFormContato(event) {
    event.preventDefault()

    // Resetar os campos do form
    event.currentTarget.reset()

    alert("Sua mensagem foi enviada com sucesso! Entreremos em contato em breve.")
}

document.getElementById("form-equipe").addEventListener("submit", handleFormAposta)
document.getElementById("form-piloto").addEventListener("submit", handleFormAposta)

document.getElementById("form-contato").addEventListener("submit", handleFormContato)

function setCustomValidationMessages(id, message) {
    const element = document.getElementById(id);
    element.oninvalid = function (event) {
        event.target.setCustomValidity(message);
    };
    element.oninput = function (event) {
        event.target.setCustomValidity('');
    };
}

setCustomValidationMessages('nome', 'Por favor, preencha este campo.');
setCustomValidationMessages('email', 'Por favor, insira um endereço de e-mail válido que contenha um @.');
setCustomValidationMessages('mensagem', 'Por favor, preencha este campo.');
