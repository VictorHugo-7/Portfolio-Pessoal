import Card from "./Card";
import dados from "../../db/S3_Projetos/db.json";

function S3_Projetos() {
    return (
        <div className="px-6 lg:px-12">
            <h5 className="mb-6 relative inline-block text-lg text-[var(--color-primary)] font-semibold 
                     after:absolute after:block after:bg-[var(--color-highlight)] after:content-[''] 
                     after:rounded-full after:w-8 after:h-1 after:mt-1 after:left-0">
                Projetos
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dados.projetos.map((projeto, index) => (
                    <Card key={index} projeto={projeto} />
                ))}
            </div>
        </div>
    );
}

export default S3_Projetos;