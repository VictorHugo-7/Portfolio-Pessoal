import { useEffect, useState } from "react";
import dados from "../../db/S1_Sobre/db.json";

function S1_Sobre({ isDark }) {
    const [textoExibido, setTextoExibido] = useState("");
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [mostrarCursor, setMostrarCursor] = useState(false);

    const [mostrarSecaoTexto, setMostrarSecaoTexto] = useState(false);
    const [mostrarImagem, setMostrarImagem] = useState(false);
    const [iniciarDigitacao, setIniciarDigitacao] = useState(false);

    const { titulo1, titulo2, subtitulo, descricao1, descricao2, botoes, imagem } = dados;

    useEffect(() => {
        const timeoutTexto = setTimeout(() => setMostrarSecaoTexto(true), 300);
        const timeoutImagem = setTimeout(() => setMostrarImagem(true), 800);
        const timeoutDigitacao = setTimeout(() => {
            setIniciarDigitacao(true);
            setMostrarCursor(true);
        }, 1500);

        return () => {
            clearTimeout(timeoutTexto);
            clearTimeout(timeoutImagem);
            clearTimeout(timeoutDigitacao);
        };
    }, []);

    useEffect(() => {
        if (iniciarDigitacao && indiceAtual < subtitulo.length) {
            const timeout = setTimeout(() => {
                setTextoExibido(prev => prev + subtitulo[indiceAtual]);
                setIndiceAtual(prev => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        } else if (iniciarDigitacao && indiceAtual >= subtitulo.length) {
            const timeout = setTimeout(() => setMostrarCursor(false), 100);
            return () => clearTimeout(timeout);
        }
    }, [indiceAtual, subtitulo, iniciarDigitacao]);

    return (
        <div className="px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div
                className={`transform transition-all duration-1000 ease-out ${mostrarSecaoTexto ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
            >
                <h3 className="text-2xl lg:text-3xl text-[var(--color-primary)]">{titulo1}</h3>
                <h2 className="my-3 lg:my-2 text-3xl lg:text-4xl text-[var(--color-primary)] font-semibold">
                    {titulo2}
                </h2>
                <h3 className="text-2xl lg:text-3xl text-[var(--color-highlight)] font-semibold">
                    {textoExibido}
                    <span
                        className={`${mostrarCursor ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-100`}
                    >
                        |
                    </span>
                </h3>
                <p className="my-4 lg:my-3 text-[var(--color-gray)]">{descricao1}</p>
                <p className="mb-6 lg:mb-4 text-[var(--color-gray)]">{descricao2}</p>

                <div className="flex justify-between lg:justify-start lg:gap-10">
                    {botoes.map((botao, index) => (
                        <a
                            key={index}
                            href={botao.link}
                            target={botao.link.startsWith('http') ? '_blank' : '_self'}
                            rel={botao.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="p-2 flex items-center gap-2 bg-[var(--color-highlight)] text-[var(--color-secondary)] font-bold rounded-md hover:scale-103 duration-300"
                        >
                            <img
                                src={isDark ? botao.iconeDark : botao.iconeLight}
                                alt={botao.texto}
                                className="h-5"
                            />
                            {botao.texto}
                        </a>
                    ))}
                </div>
            </div>

            <img
                src={imagem}
                alt="Foto Victor"
                className={`h-[240px] lg:h-[380px] transform transition-all duration-1000 ease-out rounded-2xl shadow-[0_0_20px_0_rgba(59,130,246,0.5)] hover:scale-102 ${mostrarImagem ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                    }`}
            />
        </div>
    );
}

export default S1_Sobre;
