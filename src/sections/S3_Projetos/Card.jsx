import { FaCheckCircle, FaSyncAlt } from "react-icons/fa";
import linkedin from '../../assets/sections/S3_Projetos/icons/linkedin.svg'
import github from '../../assets/sections/S3_Projetos/icons/github.svg'
import figma from '../../assets/sections/S3_Projetos/icons/figma.svg'


function Card({ projeto, delay }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="flex flex-col justify-between bg-[var(--color-background)] text-[var(--color-primary)] border-[1.5px] border-[var(--color-secondary)] rounded-md"
        >
            {/* Conteúdo */}
            <div className="p-4">
                <div className="flex justify-center items-center">
                    <img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        className="mb-5 text-[12px] h-[90px]"
                    />
                </div>

                <div className="flex justify-between items-center font-semibold">
                    <h5 className="text-[14px]">{projeto.titulo}</h5>
                    <span className="text-[12px] text-[var(--color-gray)]">{projeto.ano}</span>
                </div>

                <p className="my-3 text-[12px] text-[var(--color-gray)]">
                    {projeto.descricao}
                </p>

                <div className="mb-1 grid grid-cols-4 gap-x-[10px] gap-y-[10px]">
                    {projeto.tecnologias.map((tec, i) => (
                        <span
                            key={i}
                            className="w-full text-center py-[4px] bg-[var(--color-secondary)] text-[7px] text-[var(--color-primary)] rounded-md"
                        >
                            {tec}
                        </span>
                    ))}
                </div>
            </div>

            {/* Rodapé */}
            <div className="p-4 py-2 flex justify-between items-center border-t-[1.5px] border-[var(--color-secondary)]">
                <div className="flex items-center gap-4">
                    {/* LinkedIn */}
                    {projeto.links.linkedin && (
                        <a href={projeto.links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                            <img src={linkedin} alt="LinkedIn" className="w-[18px] hover:scale-110 transition-transform" />
                        </a>
                    )}
                    {/* GitHub */}
                    {projeto.links.github && (
                        <a href={projeto.links.github} target="_blank" rel="noreferrer" title="GitHub">
                            <img src={github} alt="GitHub" className="w-[18px] hover:scale-110 transition-transform" />
                        </a>
                    )}
                    {/* Figma */}
                    {projeto.links.figma && (
                        <a href={projeto.links.figma} target="_blank" rel="noreferrer" title="Figma">
                            <img src={figma} alt="Figma" className="w-[18px] hover:scale-110 transition-transform" />
                        </a>
                    )}
                </div>

                <div className="flex items-center gap-1 text-[10px] font-semibold">
                    {projeto.status === "Concluído" ? (
                        <FaCheckCircle className="mr-1" style={{ color: "#008000", fontSize: "12px" }} />
                    ) : (
                        <FaSyncAlt className="mr-1 animate-spin" style={{ color: "var(--color-highlight)", fontSize: "12px" }} />
                    )}
                    {projeto.status}
                </div>
            </div>
        </div>
    );
}

export default Card;

