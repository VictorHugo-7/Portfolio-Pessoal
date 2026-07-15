import { useEffect, useMemo, useState } from "react";
import Card from "./Card.jsx";
import dados from "../../db/S4_Projetos/db.js";
import AOS from "aos";
import "aos/dist/aos.css";

function S4_Projetos() {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const filtros = useMemo(() => {
        const unicos = [...new Set(dados.projetos.map((p) => p.filtro))];
        return ["Todos", ...unicos];
    }, []);

    const contagemPorFiltro = useMemo(() => {
        const contagem = { Todos: dados.projetos.length };
        dados.projetos.forEach((p) => {
            contagem[p.filtro] = (contagem[p.filtro] || 0) + 1;
        });
        return contagem;
    }, []);

    const projetosFiltrados = useMemo(() => {
        if (filtroAtivo === "Todos") return dados.projetos;
        return dados.projetos.filter((p) => p.filtro === filtroAtivo);
    }, [filtroAtivo]);

    return (
        <div className="px-6 lg:px-12">
            <h5
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                           after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                           after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0"
            >
                Projetos
            </h5>

            <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mb-4 flex flex-wrap gap-3"
            >
                {filtros.map((filtro) => (
                    <button
                        key={filtro}
                        onClick={() => setFiltroAtivo(filtro)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold rounded-md border-[1.5px] transition-colors cursor-pointer
                            ${
                                filtroAtivo === filtro
                                    ? "border-[var(--color-highlight)] text-[var(--color-primary)] border-[var(--color-highlight)]"
                                    : "bg-transparent text-[var(--color-primary)] border-[var(--color-secondary)] hover:border-[var(--color-highlight)]"
                            }`}
                    >
                        {filtro}
                        <span
                            className={`text-[9px] px-1.5 rounded-full
                                ${
                                    filtroAtivo === filtro
                                        ? "bg-[var(--color-highlight)] text-[var(--color-background)]"
                                        : "bg-[var(--color-secondary)] text-[var(--color-gray)]"
                                }`}
                        >
                            {contagemPorFiltro[filtro]}
                        </span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projetosFiltrados.map((projeto, index) => (
                    <Card key={projeto.titulo} projeto={projeto} delay={(index % 4) * 100} />
                ))}
            </div>
        </div>
    );
}

export default S4_Projetos;