import { useState } from 'react';
import { FileText, Mail, MessageSquare, User } from "lucide-react";

function Formulario() {
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
        _subject: 'VHP - Portifólio Mensagem',
        _honey: '',
        _captcha: 'false'
    });

    const manipularMudancaInput = (evento) => {
        const { name: nome, value: valor } = evento.target;
        setDadosFormulario(anterior => ({
            ...anterior,
            [nome]: valor
        }));
    };

    const manipularEnvio = async (evento) => {
        evento.preventDefault(); // Impede o comportamento padrão do formulário

        // Verificações de validação
        if (!dadosFormulario.nome.trim()) {
            alert('Por favor, preencha o campo Nome.');
            return;
        }

        if (!dadosFormulario.email.trim()) {
            alert('Por favor, preencha o campo E-mail.');
            return;
        }

        // Verificação de email válido
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(dadosFormulario.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (!dadosFormulario.assunto.trim()) {
            alert('Por favor, preencha o campo Assunto.');
            return;
        }

        if (!dadosFormulario.mensagem.trim()) {
            alert('Por favor, preencha o campo Mensagem.');
            return;
        }

        setEstaCarregando(true);

        // Criar FormData para envio
        const dadosEnvio = new FormData();
        Object.keys(dadosFormulario).forEach(chave => {
            dadosEnvio.append(chave, dadosFormulario[chave]);
        });

        try {
            const resposta = await fetch('https://formsubmit.co/victorhotpinho7@gmail.com', {
                method: 'POST',
                body: dadosEnvio,
            });

            if (resposta.ok) {
                alert('Mensagem enviada com sucesso!');
                setDadosFormulario({
                    nome: '',
                    email: '',
                    assunto: '',
                    mensagem: '',
                    _subject: 'VHP - Portifólio Mensagem',
                    _honey: '',
                    _captcha: 'false'
                });
            } else {
                const texto = await resposta.text();
                throw new Error(texto);
            }
        } catch (erro) {
            console.error('Erro ao enviar o formulário:', erro);
            alert('Houve um problema ao enviar sua mensagem. Tente novamente mais tarde. Se o problema persistir, verifique se o AdBlock ou outro bloqueador está ativado e desative-o para esta página.');
        } finally {
            setEstaCarregando(false); // Garantir que o overlay seja removido
        }
    };

    return (
        <div>
            <div className="h-full border-[var(--color-secondary)] rounded-md space-y-4">

                {/* Nome */}
                <div className="rounded-md">
                    <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                        <User className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            value={dadosFormulario.nome}
                            onChange={manipularMudancaInput}
                            className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                            style={{
                                WebkitBoxShadow: "0 0 0 1000px transparent inset",
                                WebkitTextFillColor: "var(--color-gray)",
                                transition: "background-color 5000s ease-in-out 0s"
                            }}
                            autoComplete="name"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="rounded-md">
                    <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                        <Mail className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={dadosFormulario.email}
                            onChange={manipularMudancaInput}
                            className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                            style={{
                                WebkitBoxShadow: "0 0 0 1000px transparent inset",
                                WebkitTextFillColor: "var(--color-gray)",
                                transition: "background-color 5000s ease-in-out 0s"
                            }}
                            autoComplete="email"
                            required
                        />
                    </div>
                </div>

                {/* Assunto */}
                <div className="rounded-md">
                    <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                        <FileText className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            placeholder="Assunto"
                            value={dadosFormulario.assunto}
                            onChange={manipularMudancaInput}
                            className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                            style={{
                                WebkitBoxShadow: "0 0 0 1000px transparent inset",
                                WebkitTextFillColor: "var(--color-gray)",
                                transition: "background-color 5000s ease-in-out 0s"
                            }}
                            autoComplete="off"
                        />
                    </div>
                </div>

                {/* Mensagem */}
                <div className="rounded-md">
                    <div className="p-2 flex items-start border-[1.5px] border-[var(--color-secondary)] rounded-md">
                        <MessageSquare className="w-5 h-5 text-[var(--color-gray)] mr-2 mt-1" />
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            placeholder="Mensagem"
                            value={dadosFormulario.mensagem}
                            onChange={manipularMudancaInput}
                            className="w-full outline-none resize-none text-[var(--color-gray)] bg-transparent"
                            style={{
                                WebkitBoxShadow: "0 0 0 1000px transparent inset",
                                WebkitTextFillColor: "var(--color-gray)",
                                transition: "background-color 5000s ease-in-out 0s"
                            }}
                            autoComplete="off"
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Configurações escondidas */}
                <input
                    type="text"
                    name="_honey"
                    value={dadosFormulario._honey}
                    onChange={manipularMudancaInput}
                    style={{ display: 'none' }}
                />

                {/* Botão */}
                <button
                    type="button"
                    onClick={manipularEnvio}
                    className="py-2 px-4 w-full bg-[var(--color-highlight)] text-[var(--color-white)] font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
                >
                    Enviar
                </button>
            </div>

            {/* Overlay de carregamento */}
            {estaCarregando && (
                <div className="fixed top-0 left-0 w-full h-full bg-[var(--color-black)] bg-opacity-90 flex justify-center items-center z-[1000]">
                    <div className="w-15 h-15 border-8 border-[var(--color-gray)] border-t-[var(--color-highlight)] rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}

export default Formulario;