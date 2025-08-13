import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo_light from "../assets/NavBar/logo_light.svg";
import logo_dark from "../assets/NavBar/logo_dark.svg";

function NavBar({ isDark, setIsDark }) {
    const [menuAberto, setMenuAberto] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState("");

    const alternarModoEscuro = () => { setIsDark(!isDark); };
    const alternarMenu = () => { setMenuAberto(!menuAberto); };

    const navegarParaSecao = (e, secaoId) => {
        e.preventDefault();
        const elemento = document.getElementById(secaoId);
        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
        if (menuAberto) {
            setMenuAberto(false);
        }
    };

    useEffect(() => {
        const detectarSecaoAtiva = () => {
            const secoes = ['sobre', 'habilidades', 'projetos', 'certificados', 'contato'];
            const scrollPos = window.scrollY + 150;

            for (const secao of secoes) {
                const elemento = document.getElementById(secao);
                if (elemento) {
                    const { offsetTop, offsetHeight } = elemento;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setSecaoAtiva(secao);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', detectarSecaoAtiva);
        detectarSecaoAtiva();

        return () => window.removeEventListener('scroll', detectarSecaoAtiva);
    }, []);

    const eSecaoAtiva = (nomeSecao) => secaoAtiva === nomeSecao;

    const obterClassesLink = (nomeSecao) => {
        const classesBase = "hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out";
        const classesAtivo = "text-[var(--color-highlight)] border-b-2 border-[var(--color-highlight)] pb-1";
        return eSecaoAtiva(nomeSecao) ? `${classesBase} ${classesAtivo}` : classesBase;
    };

    return (
        <div className="z-50 px-6 lg:px-12 py-2.5 fixed w-full flex justify-between items-center bg-[var(--color-background)] border-b-2 border-[var(--color-secondary)] text-[var(--color-primary)]">

            {/* Logo */}
            <img src={!isDark ? logo_light : logo_dark} alt="Logo" className="h-[22px] lg:h-[30px]" />

            {/* Menu Desktop */}
            <div className="hidden lg:flex gap-10 items-center">
                <ul className="flex items-center gap-10">
                    <li><a href="#sobre" onClick={(e) => navegarParaSecao(e, 'sobre')} className={obterClassesLink('sobre')}>Sobre</a></li>
                    <li><a href="#habilidades" onClick={(e) => navegarParaSecao(e, 'habilidades')} className={obterClassesLink('habilidades')}>Habilidades</a></li>
                    <li><a href="#projetos" onClick={(e) => navegarParaSecao(e, 'projetos')} className={obterClassesLink('projetos')}>Projetos</a></li>
                    <li><a href="#certificados" onClick={(e) => navegarParaSecao(e, 'certificados')} className={obterClassesLink('certificados')}>Certificados</a></li>
                    <li><a href="#contato" onClick={(e) => navegarParaSecao(e, 'contato')} className={obterClassesLink('contato')}>Contato</a></li>
                </ul>

                <button
                    onClick={alternarModoEscuro}
                    className="p-1 flex items-center gap-2 border-2 border-[var(--color-secondary)] rounded-md cursor-pointer hover:bg-[var(--color-secondary)] transition-all">
                    {isDark
                        ? <Sun size={20} className="fill-[var(--color-primary)]" />
                        : <Moon size={20} className="fill-[var(--color-primary)]" />}
                    {isDark ? 'Claro' : 'Escuro'}
                </button>
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden flex items-center gap-6">
                <button onClick={alternarModoEscuro}>
                    {isDark
                        ? <Sun size={22} className="fill-[var(--color-primary)]" />
                        : <Moon size={22} className="fill-[var(--color-primary)]" />}
                </button>
                <button onClick={alternarMenu}>
                    {menuAberto ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Dropdown Mobile */}
            {menuAberto && (
                <div className="absolute top-12 left-0 w-full flex flex-col items-center gap-6 py-2 bg-[var(--color-background)] text-[var(--color-primary)] border-b border-[var(--color-secondary)] md:hidden z-40">
                    <a href="#sobre" onClick={(e) => navegarParaSecao(e, 'sobre')} className={obterClassesLink('sobre')}>Sobre</a>
                    <a href="#habilidades" onClick={(e) => navegarParaSecao(e, 'habilidades')} className={obterClassesLink('habilidades')}>Habilidades</a>
                    <a href="#projetos" onClick={(e) => navegarParaSecao(e, 'projetos')} className={obterClassesLink('projetos')}>Projetos</a>
                    <a href="#certificados" onClick={(e) => navegarParaSecao(e, 'certificados')} className={obterClassesLink('certificados')}>Certificados</a>
                    <a href="#contato" onClick={(e) => navegarParaSecao(e, 'contato')} className={obterClassesLink('contato')}>Contato</a>
                </div>
            )}
        </div>
    );
}

export default NavBar;