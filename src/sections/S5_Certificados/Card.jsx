function Card({ certificado, isDark, delay }) {
    const iconeAtual = isDark ? certificado.iconeDark : certificado.iconeLight;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="flex flex-col justify-between bg-[var(--color-background)] text-[var(--color-primary)] border-[1.5px] border-[var(--color-secondary)] rounded-md"
        >
            <div className="p-4">

                <div className="flex justify-between items-center font-semibold">
                    <div className="flex items-center gap-2">
                        {iconeAtual && (
                            <img
                                src={iconeAtual}
                                alt={certificado.nomeEmpresa}
                                className="h-4 w-4 object-contain"
                            />
                        )}
                        <h5 className="text-[12px] font-semibold">{certificado.nomeEmpresa}</h5>
                    </div>
                    <span className="block text-[10px] text-[var(--color-gray)]">{certificado.anoEmitido}</span>
                </div>

                <p className="mt-3 text-[10px] text-[var(--color-gray)]">
                    {certificado.nomeCertificado}
                </p>
            </div>

            <div className="p-4 py-2 flex justify-end items-center border-t-[1.5px] border-[var(--color-secondary)]">

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