document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const loadingOverlay = document.getElementById('my-contato-loadingOverlay');
        loadingOverlay.classList.add('active'); // Exibir overlay de carregamento

        const formData = new FormData(this);

        fetch('https://formsubmit.co/victorhotpinho7@gmail.com', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                loadingOverlay.classList.remove('active'); // Esconder overlay ao receber resposta

                if (response.ok) {
                    alert('Mensagem enviada com sucesso!');
                    document.getElementById('contactForm').reset(); // Resetar formulário
                } else {
                    return response.text().then(text => { throw new Error(text); });
                }
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                alert('Houve um problema ao enviar sua mensagem. Tente novamente mais tarde. Se o problema persistir, verifique se o AdBlock ou outro bloqueador está ativado e desative-o para esta página.');
            })
            .finally(() => {
                loadingOverlay.classList.remove('active'); // Garantir que o overlay seja removido
            });
    });
});