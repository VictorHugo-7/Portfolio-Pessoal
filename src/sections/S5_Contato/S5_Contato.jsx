import Formulario from "./Formulario";
import Informacao from "./Informacao";

function S5_Contato() {
    return (
        <div className="px-6 lg:px-12">
            <h5 className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                     after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                     after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0">
                Contatos
            </h5>

            <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">

                <Formulario />
                <Informacao />
            </div>
        </div>
    );
}

export default S5_Contato;