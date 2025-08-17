function Card({ certificado, delay }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="flex flex-col justify-between bg-[var(--color-background)] text-[var(--color-primary)] border-[1.5px] border-[var(--color-secondary)] rounded-md transition-transform duration-300 hover:-translate-y-[3px] cursor-default"
        >
            {/* Conteúdo */}
            <div className="p-4">
                {/* Empresa */}
                <div className="flex items-center justify-center">
                    <img
                        src={certificado.iconeEmpresa}
                        alt={certificado.nomeEmpresa}
                        className="mb-5 h-[50px] text-[12px] rounded-md"
                    />
                </div>

                {/* Título */}
                <h5 className="text-[14px] font-semibold">{certificado.nomeCertificado}</h5>

                {/* Empresa */}
                <span className="text-[12px] text-[var(--color-gray)] font-semibold">
                    {certificado.nomeEmpresa}
                </span>

                {/* Ano */}
                <span className="block text-[12px] text-[var(--color-gray)]">
                    {certificado.anoEmitido}
                </span>
            </div>

            {/* Rodapé */}
            <div className="p-4 py-2 flex justify-end items-center border-t-[1.5px] border-[var(--color-secondary)]">
                {/* Botão para abrir o LinkedIn */}
                {certificado.links?.linkedin && (
                    <a
                        href={certificado.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-semibold text-[var(--color-highlight)] hover:underline cursor-pointer"
                    >
                        Ver Certificado
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;
