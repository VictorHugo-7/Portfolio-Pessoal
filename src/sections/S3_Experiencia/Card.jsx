import { FaCalendarAlt } from "react-icons/fa";

function Card({ experiencia, delay }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="relative flex flex-col bg-[var(--color-background)] text-[var(--color-primary)] border-[1.5px] border-[var(--color-secondary)] rounded-md"
        >
            {/* Barra lateral de destaque */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-highlight)] rounded-l-md"></div>

            {/* Conteúdo */}
            <div className="p-6 flex-1">

                {/* Cabeçalho com empresa e ano */}
                <div className="flex justify-between items-start mb-3">

                    <div className="flex items-center gap-1 flex-1">

                        {/* Ícone da empresa */}
                        {experiencia.iconeEmpresa && (
                            <img 
                                src={experiencia.iconeEmpresa} 
                                alt={experiencia.nomeEmpresa} 
                                className="h-[30px]"
                            />
                        )}
                        <h5 className="text-[14px] font-bold text-[var(--color-primary)]">
                            {experiencia.nomeEmpresa}
                        </h5>
                    </div>

                    {/* Período */}
                    <div className="flex items-center gap-1.5 bg-[var(--color-secondary)] px-3 py-1.5 rounded-md">
                        <FaCalendarAlt className="text-[10px] text-[var(--color-primary)]" />
                        <span className="text-[8px] text-[var(--color-primary)]">
                            {experiencia.periodo}
                        </span>
                    </div>
                </div>

                {/* Cargo */}
                <h3 className="text-[12px] font-bold text-[var(--color-gray)] mb-3">
                    {experiencia.cargo}
                </h3>

                {/* Descrição */}
                <p className="text-[12px] text-[var(--color-gray)] leading-relaxed mb-3">
                    {experiencia.descricao}
                </p>

                {/* Tecnologias */}
                <div className="mb-1 grid grid-cols-4 gap-x-[10px] gap-y-[10px]">
                    {experiencia.tecnologias.map((tec, i) => (
                        <span
                            key={i}
                            className="w-full text-center py-[4px] bg-[var(--color-secondary)] text-[7px] text-[var(--color-primary)] rounded-md"
                        >
                            {tec}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;