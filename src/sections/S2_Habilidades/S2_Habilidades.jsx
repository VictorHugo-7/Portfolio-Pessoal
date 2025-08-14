import dados from "../../db/S2_Habilidades/db.json";
import Icon from "./Icon";

function S2_Habilidades({ isDark }) {
    const grupoTamanho = 8;
    const habilidadesEmGrupos = [];

    for (let i = 0; i < dados.tecnologias.length; i += grupoTamanho) {
        habilidadesEmGrupos.push(dados.tecnologias.slice(i, i + grupoTamanho));
    }

    return (
        <div className="px-6 lg:px-12">
            <h5 className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                     after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                     after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0">
                Habilidades
            </h5>
            <div className="flex flex-col gap-4">
                {habilidadesEmGrupos.map((grupo, indexGrupo) => (
                    <div key={indexGrupo} className="flex flex-wrap justify-between gap-2">
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
