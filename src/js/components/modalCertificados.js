document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões que abrem o modal
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function () {
            // Obtém os atributos data-* do botão clicado
            let title = this.getAttribute("data-title");
            let imgSrc = this.getAttribute("data-img");
            let content = this.getAttribute("data-content");

            // Atualiza o modal com os novos dados
            document.getElementById("certificadoModalLabel").textContent = title;
            document.getElementById("certificadoImg").src = imgSrc;
            document.getElementById("certificadoConteudo").innerHTML = content;
        });
    });
});