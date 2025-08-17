import emailDark from '../../assets/sections/S1_Sobre/dark/email.svg';
import emailLight from '../../assets/sections/S1_Sobre/light/email.svg';
import linkedinDark from '../../assets/sections/S1_Sobre/dark/linkedin.svg';
import linkedinLight from '../../assets/sections/S1_Sobre/light/linkedin.svg';
import githubDark from '../../assets/sections/S1_Sobre/dark/github.svg';
import githubLight from '../../assets/sections/S1_Sobre/light/github.svg';
import imagemVictor from '../../assets/sections/S1_Sobre/victor.svg';

const dados = {
  titulo1: "Olá, sou o",
  titulo2: "Victor Hugo Pinho",
  subtitulo: "Desenvolvedor Full-Stack",
  descricao1: "Estudante do 4º semestre de Ciências da Computação no Instituto Mauá de Tecnologia, com perfil proativo, organizado e com foco em desenvolvimento e soluções inovadoras. Busco constantemente me atualizar e aplicar conhecimentos para resolver problemas reais de forma eficiente.",
  descricao2: "Minha jornada acadêmica é marcada por determinação, esforço e organização nos meus estudos. Encontro-me sempre disposto a aprender assuntos novos e trabalhar em equipe.",
  botoes: [
    {
      icone: "fa-solid fa-leaf",
      texto: "Email",
      link: "mailto:victorhotpinho7@gmail.com",
      iconeDark: emailDark,
      iconeLight: emailLight
    },
    {
      icone: "fa-solid fa-hand-holding-heart",
      texto: "Linkedin",
      link: "https://www.linkedin.com/in/victor-hugo-pinho",
      iconeDark: linkedinDark,
      iconeLight: linkedinLight
    },
    {
      icone: "fa-solid fa-pen-to-square",
      texto: "GitHub",
      link: "https://github.com/VictorHugo-7",
      iconeDark: githubDark,
      iconeLight: githubLight
    }
  ],
  imagem: imagemVictor
};

export default dados;