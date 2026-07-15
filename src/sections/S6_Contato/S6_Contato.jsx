import { useEffect } from "react";
import Informacao from "./Informacao";
import AOS from "aos";
import "aos/dist/aos.css";

function S6_Contato() {
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
                Contato
            </h5>

            <Informacao />
        </div>
    );
}

export default S6_Contato;