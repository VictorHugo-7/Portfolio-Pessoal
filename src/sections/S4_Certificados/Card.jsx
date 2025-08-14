import linkedin from "../../assets/sections/S4_Certificados/icons/linkedin.svg";

function Card({ certificado, aoClicarVerCertificado }) {
    return (
        <div className="flex flex-col justify-between bg-[var(--color-background)] text-[var(--color-primary)] border-[1.5px] border-[var(--color-secondary)] rounded-md transition-transform duration-300 hover:-translate-y-[3px]">

            {/* Conteúdo */}
            <div className="p-4">

                {/* Imagem do certificado */}
                <div className="flex items-center justify-center">
                    <img
                        src={certificado.iconeEmpresa}
                        alt={certificado.nomeEmpresa}
                        className="mb-5 h-[50px] text-[12px] rounded-sm"
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
            <div className="p-4 py-2 flex justify-between items-center border-t-[1.5px] border-[var(--color-secondary)]">

                <div className="flex items-center gap-4">
                    {certificado.links?.linkedin && (
                        <a
                            href={certificado.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                        >
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="w-[18px] hover:scale-110 transition-transform"
                            />
                        </a>
                    )}
                </div>

                {/* Botão para visualizar o certificado */}
                <button
                    onClick={() => aoClicarVerCertificado(certificado)}
                    className="text-[10px] font-semibold text-[var(--color-highlight)] hover:underline cursor-pointer"
                >
                    Ver Certificado
                </button>
            </div>
        </div>
    );
}

export default Card;