import { FileText, Mail, MessageSquare, User } from "lucide-react";

function Formulario() {
    return (
        <div className="lg:w-[75%] h-full border-[var(--color-secondary)] rounded-md space-y-4">

            {/* Nome */}
            <div className="rounded-md">
                <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                    <User className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0 1000px transparent inset",
                            WebkitTextFillColor: "var(--color-gray)",
                            transition: "background-color 5000s ease-in-out 0s"
                        }}
                        autoComplete="name"
                        required
                    />
                </div>
            </div>

            {/* Email */}
            <div className="rounded-md">
                <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                    <Mail className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0 1000px transparent inset",
                            WebkitTextFillColor: "var(--color-gray)",
                            transition: "background-color 5000s ease-in-out 0s"
                        }}
                        autoComplete="email"
                        required
                    />
                </div>
            </div>

            {/* Assunto */}
            <div className="rounded-md">
                <div className="p-2 flex items-center border-[1.5px] border-[var(--color-secondary)] rounded-md">
                    <FileText className="w-5 h-5 text-[var(--color-gray)] mr-2" />
                    <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        className="w-full outline-none text-[var(--color-gray)] bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0 1000px transparent inset",
                            WebkitTextFillColor: "var(--color-gray)",
                            transition: "background-color 5000s ease-in-out 0s"
                        }}
                        autoComplete="off"
                    />
                </div>
            </div>

            {/* Mensagem */}
            <div className="rounded-md">
                <div className="p-2 flex items-start border-[1.5px] border-[var(--color-secondary)] rounded-md">
                    <MessageSquare className="w-5 h-5 text-[var(--color-gray)] mr-2 mt-1" />
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="4"
                        placeholder="Mensagem"
                        className="w-full outline-none resize-none text-[var(--color-gray)] bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0 1000px transparent inset",
                            WebkitTextFillColor: "var(--color-gray)",
                            transition: "background-color 5000s ease-in-out 0s"
                        }}
                        autoComplete="off"
                        required
                    ></textarea>
                </div>
            </div>

            {/* Botão */}
            <button
                type="submit"
                className="py-2 px-4 w-full bg-[var(--color-highlight)] text-[var(--color-white)] font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
            >
                Enviar
            </button>
        </div>
    );
}

export default Formulario;