import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ModalCertificado = ({ estaAberto, aoFechar, certificado }) => {
    const [visivel, setVisivel] = useState(estaAberto);

    useEffect(() => {
        if (estaAberto) {
            setVisivel(true);
        } else {
            const timeout = setTimeout(() => {
                setVisivel(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [estaAberto]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            aoFechar();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 p-4 bg-black/50 transition-opacity duration-300 ease-in-out
                ${visivel && estaAberto ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={handleBackdropClick}
        >
            <div
                className={`bg-[var(--color-background)] rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-[var(--color-secondary)]
                    transform transition-all duration-300 ease-in-out
                    ${visivel && estaAberto ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}
                    absolute top-4 left-1/2 -translate-x-1/2
                `}
            >
                {/* Cabeçalho */}
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-gray)]">
                    <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                        Certificado
                    </h2>
                    <button
                        onClick={aoFechar}
                        className="text-[var(--color-gray)] hover:text-[var(--color-primary)] text-xl transition-colors cursor-pointer"
                        aria-label="Fechar modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Corpo */}
                <div className="p-4 flex flex-col lg:flex-row gap-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                    {/* Imagem */}
                    <div className="flex-shrink-0">
                        <img
                            src={certificado?.fotoCertificado || "/api/placeholder/400/300"}
                            alt="Certificado"
                            className="w-full lg:h-[200px] lg:w-[300px] h-auto object-contain"
                        />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                        <h3 className="text-base font-medium text-[var(--color-primary)] mb-3">
                            Conteúdo
                        </h3>
                        <div
                            className="text-[var(--color-primary)] leading-relaxed text-sm"
                            dangerouslySetInnerHTML={{
                                __html: certificado?.conteudoCertificado || " "
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCertificado;