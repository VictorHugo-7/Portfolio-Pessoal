import { useEffect } from "react";
import Formulario from "./Formulario";
import Informacao from "./Informacao";
import AOS from "aos";
import "aos/dist/aos.css";

function S5_Contato() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className="px-6 lg:px-12">
            <h5
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0"
            >
                Contatos
            </h5>

            <div className="flex flex-col lg:flex-row justify-between gap-7 lg:gap-10">
                <div className="w-full lg:w-[70%]">
                    <Formulario />
                </div>
                <div className="w-full lg:w-[30%]">
                    <Informacao />
                </div>
            </div>
        </div>
    );
}

export default S5_Contato;
