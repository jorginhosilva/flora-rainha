document.addEventListener("DOMContentLoaded", function() {
    var botaoAcao = document.getElementById("botaoAcao");
    var botaoEscondido = document.getElementById("botaoEscondido");

    botaoAcao.addEventListener("click", function() {
        botaoEscondido.style.display = "inline-block"; // Mostra o botão escondido
    });
});
