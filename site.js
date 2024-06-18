document.addEventListener("DOMContentLoaded", function() {
    var botaoadd = document.getElementById("botaoadd");
    var botaofinalizar = document.getElementById("botaofinalizar");

    if (botaoadd && botaofinalizar) {
        botaoadd.addEventListener("click", function() {
            botaofinalizar.style.display = "inline-block";
        });
    }
});
