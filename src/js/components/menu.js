document.addEventListener("DOMContentLoaded", function () {
    const temaBotao = document.getElementById("my-menu-navegacaoTema");
    const body = document.body;

    // Verifica se o tema escuro está ativo
    const isDarkMode = localStorage.getItem("tema") === "dark";
    body.classList.toggle("dark-mode", isDarkMode);
    temaBotao.classList.toggle("fa-moon", isDarkMode);
    temaBotao.classList.toggle("fa-sun", !isDarkMode);

    temaBotao.addEventListener("click", function () {
        const isDarkMode = body.classList.toggle("dark-mode");
        temaBotao.classList.toggle("fa-moon", isDarkMode);
        temaBotao.classList.toggle("fa-sun", !isDarkMode);
        localStorage.setItem("tema", isDarkMode ? "dark" : "light");
    });
});