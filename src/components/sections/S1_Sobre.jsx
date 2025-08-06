import { useEffect, useState } from "react";
import victor from '../../assets/sections/S1_Sobre/victor.svg'
import email_light from '../../assets/sections/S1_Sobre/email_light.svg'
import linkedin_light from '../../assets/sections/S1_Sobre/linkedin_light.svg'
import github_light from '../../assets/sections/S1_Sobre/github_light.svg'
import email_dark from '../../assets/sections/S1_Sobre/email_dark.svg'
import linkedin_dark from '../../assets/sections/S1_Sobre/linkedin_dark.svg'
import github_dark from '../../assets/sections/S1_Sobre/github_dark.svg'

function S1_Sobre({ isDark }) {
    const emailIcon = isDark ? email_dark : email_light;
    const linkedinIcon = isDark ? linkedin_dark : linkedin_light;
    const githubIcon = isDark ? github_dark : github_light;

    const text = "Desenvolvedor Full-Stack";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(false);

    const [showTextSection, setShowTextSection] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const textTimeout = setTimeout(() => {
            setShowTextSection(true);
        }, 300);

        const imageTimeout = setTimeout(() => {
            setShowImage(true);
        }, 800);

        const typingTimeout = setTimeout(() => {
            setStartTyping(true);
            setShowCursor(true);
        }, 1500);

        return () => {
            clearTimeout(textTimeout);
            clearTimeout(imageTimeout);
            clearTimeout(typingTimeout);
        };
    }, []);

    useEffect(() => {
        if (startTyping && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 200);

            return () => clearTimeout(timeout);
        } else if (startTyping && currentIndex >= text.length) {
            const timeout = setTimeout(() => {
                setShowCursor(false);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, startTyping]);

    return (
        <div className="px-6 md:px-12 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div
                className={`transform transition-all duration-1000 ease-out ${showTextSection
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                    }`}
            >
                <h3 className="text-2xl lg:text-3xl text-[var(--color-primary)]">Olá, sou o</h3>
                <h2 className="my-3 lg:my-2 text-3xl lg:text-4xl text-[var(--color-primary)] font-semibold">Victor Hugo Pinho</h2>
                <h3 className="text-2xl lg:text-3xl text-[var(--color-highlight)] font-semibold">
                    {displayedText}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                </h3>
                <p className="my-4 lg:my-3 text-[var(--color-gray)]">
                    Estudante do 4º semestre de Ciências da Computação no Instituto Mauá de Tecnologia, com perfil proativo, organizado e com foco em desenvolvimento e soluções inovadoras. Busco constantemente me atualizar e aplicar conhecimentos para resolver problemas reais de forma eficiente.
                </p>
                <p className="mb-6 lg:mb-4 text-[var(--color-gray)]">
                    Minha jornada acadêmica é marcada por determinação, esforço e organização nos meus estudos. Encontro-me sempre disposto a aprender assuntos novos e trabalhar em equipe.
                </p>
                <div className="flex justify-between lg:justify-start lg:gap-10">
                    <a href="mailto:victorhotpinho7@gmail.com" className="p-2 flex items-center gap-2 bg-[var(--color-highlight)] text-[var(--color-secondary)] font-bold rounded-md hover:scale-103 duration-300"><img src={emailIcon} alt="email" /> Email</a>
                    <a href="https://www.linkedin.com/in/victor-hugo-pinho/" className="p-2 flex items-start gap-2 bg-[var(--color-highlight)] text-[var(--color-secondary)] font-bold rounded-md hover:scale-103 duration-300"><img src={linkedinIcon} alt="linkedin" /> Linkedin</a>
                    <a href="https://github.com/VictorHugo-7" className="p-2 flex items-center gap-2 bg-[var(--color-highlight)] text-[var(--color-secondary)] font-bold rounded-md hover:scale-103 duration-300"><img src={githubIcon} alt="gitHub" /> GitHub</a>
                </div>
            </div>
            <img
                src={victor}
                alt="Foto Victor"
                className={`h-[240px] lg:h-[380px] transform transition-all duration-1000 ease-out rounded-2xl shadow-[0_0_20px_0_rgba(59,130,246,0.5)] hover:scale-102 ${showImage
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-10 opacity-0'
                    }`}
            />

        </div>
    );
}

export default S1_Sobre;