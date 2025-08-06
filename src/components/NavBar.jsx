import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo_light from "../assets/NavBar/logo_light.svg";
import logo_dark from "../assets/NavBar/logo_dark.svg";

function NavBar({ isDark, setIsDark }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => { setIsDark(!isDark); };
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    return (
        <div className="z-50 px-6 lg:px-12 py-2.5 fixed w-full flex justify-between items-center bg-[var(--color-background)] border-b border-[var(--color-secondary)] text-[var(--color-primary)]">

            {/* Logo */}
            <img src={!isDark ? logo_light : logo_dark} alt="Logo" className="h-[22px] lg:h-[30px]" />

            {/* Menu Desktop */}
            <div className="hidden lg:flex gap-10 items-center">
                <ul className="flex items-center gap-10">
                    <li><a href="#sobre" className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Sobre</a></li>
                    <li><a href="#habilidades" className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Habilidades</a></li>
                    <li><a href="#projetos" className="hover:text-[var(--color-highlight)]">Projetos</a></li>
                    <li><a href="#certificados" className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Certificados</a></li>
                    <li><a href="#contato" className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Contato</a></li>
                </ul>

                <button
                    onClick={toggleDarkMode}
                    className="p-1 flex items-center gap-2 border-2 border-[var(--color-secondary)] rounded-md cursor-pointer hover:bg-[var(--color-secondary)] transition-all">
                    {isDark
                        ? <Sun size={20} className="fill-[var(--color-primary)]" />
                        : <Moon size={20} className="fill-[var(--color-primary)]" />}
                    {isDark ? 'Claro' : 'Escuro'}
                </button>
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden flex items-center gap-6">
                <button onClick={toggleDarkMode}>
                    {isDark
                        ? <Sun size={22} className="fill-[var(--color-primary)]" />
                        : <Moon size={22} className="fill-[var(--color-primary)]" />}
                </button>
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Dropdown Mobile */}
            {isMenuOpen && (
                <div className="absolute top-12 left-0 w-full flex flex-col items-center gap-6 py-2 bg-[var(--color-background)] text-[var(--color-primary)] border-b border-[var(--color-secondary)] md:hidden z-40">
                    <a href="#sobre" onClick={toggleMenu} className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Sobre</a>
                    <a href="#habilidades" onClick={toggleMenu} className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Habilidades</a>
                    <a href="#projetos" onClick={toggleMenu} className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Projetos</a>
                    <a href="#certificados" onClick={toggleMenu} className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Certificados</a>
                    <a href="#contato" onClick={toggleMenu} className="hover:text-[var(--color-highlight)] transition-colors duration-400 ease-in-out">Contato</a>
                </div>
            )}
        </div>
    );
}

export default NavBar;
