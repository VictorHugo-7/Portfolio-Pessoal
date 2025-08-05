import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo_light from "../assets/NavBar/logo_light.svg";
import logo_dark from "../assets/NavBar/logo_dark.svg";

function NavBar({ isDark, setIsDark }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => { setIsDark(!isDark); };
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    return (
        <div className="z-50 px-6 md:px-24 py-2.5 fixed w-full flex justify-between items-center bg-[var(--color-background)] border-b border-[var(--color-secondary)] text-[var(--color-primary)]">

            {/* Logo */}
            <img src={!isDark ? logo_light : logo_dark} alt="Logo" />

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-10 items-center">
                <ul className="flex items-center gap-10">
                    <li><a href="#sobre" className="hover:text-[var(--color-highlight)]">Sobre</a></li>
                    <li><a href="#habilidades" className="hover:text-[var(--color-highlight)]">Habilidades</a></li>
                    <li><a href="#projetos" className="hover:text-[var(--color-highlight)]">Projetos</a></li>
                    <li><a href="#certificados" className="hover:text-[var(--color-highlight)]">Certificados</a></li>
                    <li><a href="#contato" className="hover:text-[var(--color-highlight)]">Contato</a></li>
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
            <div className="md:hidden flex items-center gap-6">
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
                    <a href="#sobre" onClick={toggleMenu} className="hover:text-[var(--color-highlight)]">Sobre</a>
                    <a href="#habilidades" onClick={toggleMenu} className="hover:text-[var(--color-highlight)]">Habilidades</a>
                    <a href="#projetos" onClick={toggleMenu} className="hover:text-[var(--color-highlight)]">Projetos</a>
                    <a href="#certificados" onClick={toggleMenu} className="hover:text-[var(--color-highlight)]">Certificados</a>
                    <a href="#contato" onClick={toggleMenu} className="hover:text-[var(--color-highlight)]">Contato</a>
                </div>
            )}
        </div>
    );
}

export default NavBar;
