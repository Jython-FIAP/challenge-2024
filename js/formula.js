/**
 * @param event {SubmitEvent}
 */
function handleFormAposta(event) {
    event.preventDefault()

    // Resetar os campos do form
    event.currentTarget.reset()

    alert("Sua aposta foi feita, fique ligado para ver seus resultados")
}

document.getElementById("form-equipe").addEventListener("submit", handleFormAposta)
document.getElementById("form-piloto").addEventListener("submit", handleFormAposta)
