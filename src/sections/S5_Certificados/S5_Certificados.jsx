import { useEffect, useMemo, useState } from "react";
import Card from "./Card.jsx";
import dados from "../../db/S5_Certificados/db.js";
import AOS from "aos";
import "aos/dist/aos.css";

function S5_Certificados({ isDark }) {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const filtros = useMemo(() => {
        const unicos = [...new Set(dados.certificados.map((c) => c.filtro))];
        return ["Todos", ...unicos];
    }, []);

    const contagemPorFiltro = useMemo(() => {
        const contagem = { Todos: dados.certificados.length };
        dados.certificados.forEach((c) => {
            contagem[c.filtro] = (contagem[c.filtro] || 0) + 1;
        });
        return contagem;
    }, []);

    const certificadosFiltrados = useMemo(() => {
        if (filtroAtivo === "Todos") return dados.certificados;
        return dados.certificados.filter((c) => c.filtro === filtroAtivo);
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
                Certificados
            </h5>

            <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mb-8 flex flex-wrap gap-3"
            >
                {filtros.map((filtro) => (
                    <button
                        key={filtro}
                        onClick={() => setFiltroAtivo(filtro)}
                        className={`flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-semibold rounded-md border-[1.5px] transition-colors cursor-pointer
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {certificadosFiltrados.map((certificado, index) => (
                    <Card
                        key={certificado.nomeCertificado}
                        certificado={certificado}
                        isDark={isDark}
                        delay={(index % 6) * 100}
                    />
                ))}
            </div>
        </div>
    );
}

export default S5_Certificados;