import { useEffect } from "react";
import dados from "../../db/S2_Competencias/db.js";
import Icon from "./Icon.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function S2_Competencias({ isDark }) {
    const grupoTamanho = 11;
    const CompetenciasEmGrupos = [];

    for (let i = 0; i < dados.competencias.length; i += grupoTamanho) 
    CompetenciasEmGrupos.push(dados.competencias.slice(i, i + grupoTamanho));

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
                Competências
            </h5>

            <div>
                {CompetenciasEmGrupos.map((grupo, indexGrupo) => (
                    <div
                        key={indexGrupo}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
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

export default S2_Competencias;