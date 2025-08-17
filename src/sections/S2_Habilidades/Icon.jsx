function Icon({ habilidade, isDark, animationDelay }) {
    const iconeAtual = isDark ? habilidade.iconeDark : habilidade.iconeLight;

    return (
        <div
            className="w-20 h-20 relative border-[1.5px] border-[var(--color-secondary)] rounded-md transition-all duration-300 hover:-translate-y-[3px] cursor-default opacity-0 animate-fadeIn"
            style={{ animationDelay: `${animationDelay}s` }}
        >
            <div className="w-[2px] h-6 absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-highlight)] rounded-r-md shadow-[0_0_20px_0_rgba(59,130,246,0.5)]"></div>

            <div className="h-full flex flex-col items-center justify-center gap-2">
                <img
                    src={iconeAtual}
                    alt={habilidade.nome}
                    className='h-[34px]'
                />
                <span className='text-[var(--color-primary)] text-[10px]'>
                    {habilidade.nome}
                </span>
            </div>
        </div>
    );
}

export default Icon;