import { useEffect, useState, useLayoutEffect } from "react";
import SpacingVertical from "./components/SpacingVertical";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import S1_Sobre from "./sections/S1_Sobre/S1_Sobre.jsx";
import S2_Habilidades from "./sections/S2_Habilidades/S2_Habilidades.jsx";
import S3_Experiencia from "./sections/S3_Experiencia/S3_Experiencia.jsx";
import S4_Projetos from "./sections/S4_Projetos/S4_Projetos.jsx";
import S5_Certificados from "./sections/S5_Certificados/S5_Certificados.jsx";
import S6_Contato from "./sections/S6_Contato/S6_Contato.jsx";

function App() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useLayoutEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (isDark)
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');
    }, [isDark]);

    return (
        <div>
            <NavBar isDark={isDark} setIsDark={setIsDark} />
            <div id="sobre">
                <SpacingVertical size={100.67} />
                <S1_Sobre isDark={isDark} />
            </div>

            <div id="habilidades">
                <SpacingVertical size={80} />
                <S2_Habilidades isDark={isDark} />
            </div>

            <div id="experiencias">
                <SpacingVertical size={80} />
                <S3_Experiencia isDark={isDark} />
            </div>

            <div id="projetos">
                <SpacingVertical size={80} />
                <S4_Projetos isDark={isDark} />
            </div>

            <div id="certificados">
                <SpacingVertical size={80} />
                <S5_Certificados isDark={isDark} />
            </div>

            <div id="contato">
                <SpacingVertical size={80} />
                <S6_Contato />
            </div>

            <SpacingVertical size={80} />
            <Footer />
        </div>
    );
}

export default App;