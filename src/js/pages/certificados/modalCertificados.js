document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões que abrem o modal
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function () {
            // Obtém os atributos data-* do botão clicado
            let title = this.getAttribute("data-title");
            let imgSrc = this.getAttribute("data-img");
            let content = this.getAttribute("data-content");
            let imgWidth = this.getAttribute("data-width") || "500"; 
            let imgHeight = this.getAttribute("data-height") || "500"; 
            let modalSize = this.getAttribute("data-modal-size") || "lg";

            // Atualiza o tamanho do modal
            const modalDialog = document.querySelector("#certificadoModal .modal-dialog");
            modalDialog.className = "modal-dialog"; // Redefine as classes
            modalDialog.classList.add(`modal-${modalSize}`);

            // Atualiza o modal com os novos dados
            document.getElementById("certificadoModalLabel").textContent = title;
            const imgElement = document.getElementById("certificadoImg");
            imgElement.src = imgSrc;
            imgElement.style.width = `${imgWidth}px`;
            imgElement.style.height = `${imgHeight}px`;
            document.getElementById("certificadoConteudo").innerHTML = content;
        });
    });
});