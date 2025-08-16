import dados from '../../db/S5_Contato/db.json'

function Informacao() {
    return (
        <div className="h-full flex flex-col justify-between rounded-md space-y-4 lg:space-y-0">
            {dados.contato.map((contato, index) => (
                <div key={index} className="p-3 flex bg-[color:var(--color-secondary)]/30 rounded-md gap-5 transition-transform duration-300 hover:-translate-y-[3px] cursor-default">
                    <img className="w-[30px]" src={contato.icone}></img>
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