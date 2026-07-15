import { useEffect } from "react";
import dados from '../../db/S6_Contato/db.js';
import AOS from "aos";
import "aos/dist/aos.css";

function Informacao() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dados.contato.map((contato, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="p-3 flex bg-[var(--color-background)] border-[1.5px] border-[var(--color-secondary)] rounded-md gap-5"
                >
                    <img className="w-[30px]" src={contato.icone} />
                    <div className="space-y-1">
                        <p className="font-semibold text-[var(--color-primary)]">{contato.titulo}</p>
                        <p className="text-[14px] text-[var(--color-gray)]">{contato.subtitulo}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Informacao;