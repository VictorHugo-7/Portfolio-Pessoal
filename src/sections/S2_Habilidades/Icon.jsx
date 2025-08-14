function Icon({ habilidade, isDark }) {
    const iconeAtual = isDark ? habilidade.iconeDark : habilidade.iconeLight;

    return (
        <div className="w-20 h-20 relative border-[1.5px] border-[var(--color-secondary)] rounded-md transform duration-400 ease-out hover:scale-103">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[var(--color-highlight)] rounded-r-md shadow-[0_0_20px_0_rgba(59,130,246,0.5)]"></div>

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