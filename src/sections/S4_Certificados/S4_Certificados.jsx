import { useState } from 'react';
import Card from "./Card";
import ModalCertificado from "./ModalCertificado";
import dados from "../../db/S4_Certificados/db.json";

function S4_Certificados() {
    const [modalAberto, setModalAberto] = useState(false);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

    const abrirModal = (certificado) => {
        setCertificadoSelecionado(certificado);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setCertificadoSelecionado(null);
    };

    return (
        <div className="px-6 lg:px-12">
            <h5 className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                     after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                     after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0">
                Certificados
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dados.certificados.map((certificado, index) => (
                    <Card
                        key={index}
                        certificado={certificado}
                        aoClicarVerCertificado={abrirModal}
                    />
                ))}
            </div>

            <ModalCertificado
                estaAberto={modalAberto}
                aoFechar={fecharModal}
                certificado={certificadoSelecionado}
            />
        </div>
    );
}

export default S4_Certificados;