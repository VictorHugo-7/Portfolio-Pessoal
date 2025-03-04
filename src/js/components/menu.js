document.addEventListener("DOMContentLoaded", function () {

    /* Pegar os valores */
    const temaBotao = document.getElementById("my-menu-navegacaoTema");
    const body = document.body;

    // Verifica se o usuário já escolheu um tema antes
    if (localStorage.getItem("tema") === "dark") {
        body.classList.add("dark-mode");
        temaBotao.classList.replace("fa-sun", "fa-moon");
    }

    temaBotao.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Alternar ícone entre sol e lua
        if (body.classList.contains("dark-mode")) {
            temaBotao.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("tema", "dark");
        } else {
            temaBotao.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("tema", "light");
        }
    });
});