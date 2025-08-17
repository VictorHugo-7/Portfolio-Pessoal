function Icon({ habilidade, isDark, delay = 0 }) {
    const iconeAtual = isDark ? habilidade.iconeDark : habilidade.iconeLight;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="w-20 h-20 flex flex-col items-center justify-center gap-2 relative border-[1.5px] border-[var(--color-secondary)] rounded-md"
        >
            <div className="w-[2px] h-6 absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-highlight)] rounded-r-md shadow-[0_0_20px_0_rgba(59,130,246,0.5)]"></div>

            <div className="h-full flex flex-col items-center justify-center gap-2">
                <img
                    src={iconeAtual}
                    alt={habilidade.nome}
                    className="h-[34px]"
                />
                <span className="text-[var(--color-primary)] text-[10px]">
                    {habilidade.nome}
                </span>
            </div>
        </div>
    );
}

export default Icon;
