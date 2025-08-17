import { useEffect } from "react";
import Card from "./Card";
import dados from "../../db/S3_Projetos/db.js";
import AOS from "aos";
import "aos/dist/aos.css";

function S3_Projetos() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div className="px-6 lg:px-12">
            <h5
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                           after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                           after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0"
            >
                Projetos
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dados.projetos.map((projeto, index) => (
                    <Card key={index} projeto={projeto} delay={index * 100} />
                ))}
            </div>
        </div>
    );
}

export default S3_Projetos;