import { useEffect } from "react";
// ALTERAÇÃO 1: Importando do novo arquivo .js
import dados from "../../db/S2_Habilidades/db.js";
import Icon from "./Icon";
import AOS from "aos";
import "aos/dist/aos.css";

function S2_Habilidades({ isDark }) {
    const grupoTamanho = 8;
    const habilidadesEmGrupos = [];

    // ALTERAÇÃO 2: Corrigido de 'dados.tecnologias' para 'dados.habilidades' para corresponder ao seu arquivo de dados.
    for (let i = 0; i < dados.habilidades.length; i += grupoTamanho) {
        habilidadesEmGrupos.push(dados.habilidades.slice(i, i + grupoTamanho));
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div className="px-6 lg:px-12">
            <h5
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                           after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                           after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0"
            >
                Habilidades
            </h5>

            <div className="flex flex-col gap-4">
                {habilidadesEmGrupos.map((grupo, indexGrupo) => (
                    <div
                        key={indexGrupo}
                        className="flex flex-wrap justify-between gap-2"
                        data-aos="fade-up"
                        data-aos-delay={100 * (indexGrupo + 1)}
                    >
                        {grupo.map((habilidade, index) => (
                            <Icon
                                key={index}
                                habilidade={habilidade}
                                isDark={isDark}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default S2_Habilidades;