document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function () {
            let title = this.getAttribute("data-title");
            let imgSrc = this.getAttribute("data-img");
            let content = this.getAttribute("data-content");

            document.getElementById("projetoModalLabel").textContent = title;
            document.getElementById("projetoImg").src = imgSrc;
            document.getElementById("projetoDescricao").innerHTML = content;
        });
    });
});