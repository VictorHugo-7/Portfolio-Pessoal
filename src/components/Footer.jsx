import { ArrowUp } from "lucide-react";

function Footer() {
    const navegarParaSobre = (e) => {
        e.preventDefault();
        const elemento = document.getElementById('sobre');
        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <div className="min-h-[80px] flex justify-center text-xs lg:text-[14px] bg-[var(--color-black)] text-[var(--color-gray)]">
            <div className="w-full max-w-[1400px] px-6 lg:px-12 py-3 sm:py-0 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center">
                <span>© 2026 Todos Direitos Reservados Victor Hugo Pinho</span>

                <button
                    onClick={navegarParaSobre}
                    aria-label="Voltar para o topo"
                    className="p-1.5 flex items-center justify-center rounded-md border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] hover:bg-[var(--color-highlight)] hover:text-[var(--color-black)] transition-all duration-300 ease-in-out cursor-pointer"
                >
                    <ArrowUp size={16} />
                </button>
            </div>
        </div>
    )
}

export default Footer;