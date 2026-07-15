import imagemSid from '../../assets/sections/S4_Projetos/images/sid.png';
import imagemUsinaEcoCultural from '../../assets/sections/S4_Projetos/images/usinaEcoCultural.png';
import imagemMauaEsports from '../../assets/sections/S4_Projetos/images/mauaEsports.png';
import imagemPortfolio from '../../assets/sections/S4_Projetos/images/portfolio.png';
import imagemProfessores from '../../assets/sections/S4_Projetos/images/professores.png';
import imagemGenoWeb from '../../assets/sections/S4_Projetos/images/genoWeb.png';
import imagemFisioFit from '../../assets/sections/S4_Projetos/images/fisioFit.png';
import imagemQueryGenAI from '../../assets/sections/S4_Projetos/images/queryGenAI.png'

const dados = {
  projetos: [
    {
      imagem: imagemQueryGenAI,
      titulo: "Sistema | QueryGen AI",
      ano: "2026",
      descricao: "O sistema consiste em automatizar a criação de scripts para extração e visualização de dados do SAP, utilizando IA para interpretar as necessidades do usuário e gerar consultas prontas para análises.",
      tecnologias: ["Dart", "Flutter", "Node.js", "MySQL", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/antonioVitor04/S5-QueryGen-AI",
        figma: "https://www.figma.com/design/ioXDKEKEnj38tbVWfrdGZk/S5-QueryGen-AI?node-id=0-1&t=vDg1SB3WvALoOgAt-1"
      },
      status: "Concluído",
      filtro: "Faculdade"
    },
    {
      imagem: imagemFisioFit,
      titulo: "Sistema | FisioFit",
      ano: "2026",
      descricao: "O sistema consiste em um mecanismo de lembretes que incentiva a prática de exercícios físicos e o cuidado com a saúde mental, promovendo hábitos saudáveis por meio de notificações periódicas e personalizadas.",
      tecnologias: ["React", "Tailwind CSS", "Vite", "Node.js", "MongoDB", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/Hackathon-Sistema-FisioFit",
        figma: "https://www.figma.com/design/xuVpanGxgkrNNxsRLi7Iqj/Hackathon-Sistema-FisioFit?node-id=2-2&t=yAbqZzgEM8IxewNx-1"
      },
      status: "Concluído",
      filtro: "Hackathon"
    },
    {
      imagem: imagemGenoWeb,
      titulo: "Sistema | GenoWeb",
      ano: "2025",
      descricao: "O sistema consiste em um genograma digital voltado ao cruzamento de dados genéticos familiares, com foco em agilizar o diagnóstico de padrões hereditários e auxiliar na prevenção de doenças genéticas. 🏆 Projeto vencedor do 1º lugar no Hackathon.",
      tecnologias: ["React", "Tailwind CSS", "Vite", "MySQL", "Python", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/Hackathon-Sistema-GenoWeb",
        figma: "https://www.figma.com/design/dmEOyAwkEgluPLzzdCh2AT/Hackathon-Sistema-GenoWeb?node-id=2-2&t=LPylzjyRKCfCaVjC-1"
      },
      status: "Concluído",
      filtro: "Hackathon"
    },
    {
      imagem: imagemProfessores,
      titulo: "Sistema | Professores",
      ano: "2025",
      descricao: "O sistema consiste em centralizar e facilitar a gestão escolar, permitindo que professores gerenciem disciplinas, notas, calendário e notificações, enquanto os alunos acessam para consultar e realizar ações em suas atividades acadêmicas.",
      tecnologias: ["Dart", "Flutter", "Node.js", "MongoDB", "Azure", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/S4-Sistema-Professores",
        figma: "https://www.figma.com/design/A38hkySKBNvDWGq5ktC5ja/S4-Sistema-Professores?node-id=1780-4&t=HvTRYiFBOmca62RD-1"
      },
      status: "Concluído",
      filtro: "Faculdade"
    },
    {
      imagem: imagemPortfolio,
      titulo: "Portfólio | Pessoal",
      ano: "2025",
      descricao: "O portfólio apresenta informações sobre mim, minhas Tecnologias, projetos, certificados e formas de contato.",
      tecnologias: ["React", "Tailwind", "Vite", "Node.js", "JavaScript", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/Portfolio-Pessoal",
        figma: "https://www.figma.com/design/22DFHV6hD1hQMxYAlNjr0S/Portfolio-Pessoal?node-id=0-1&p=f"
      },
      status: "Concluído",
      filtro: "Pessoal"
    },
    {
      imagem: imagemMauaEsports,
      titulo: "Site | Mauá Esports",
      ano: "2025",
      descricao: "O site consiste em centralizar e facilitar a administração das atividades esportivas, incluindo a gestão dos horários de treino, das horas PAE dos alunos e das informações sobre os times e campeonatos.",
      tecnologias: ["React", "Tailwind", "Vite", "Node.js", "MongoDB", "MSAL", "Python", "Azure", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/S3-Site-MauaEsports",
        figma: "https://www.figma.com/design/LuwuqQ4VbyyILJQK0vf7Oo/S3-Site-MauaEsports?node-id=0-1&p=f"
      },
      status: "Concluído",
      filtro: "Faculdade"
    },
    {
      imagem: imagemUsinaEcoCultural,
      titulo: "Site | Usina Eco-Cultural",
      ano: "2024",
      descricao: "O site consiste em uma plataforma digital que amplia o alcance e a visibilidade das atividades culturais e ecológicas oferecidas pela instituição.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "MongoDB", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural",
        figma: "https://www.figma.com/design/gNywiVwI8QWsgY8PUh8d85/S2-Site-UsinaEcoCultural?node-id=1-3&t=a0s8FTaGoWjLnqtR-1"
      },
      status: "Concluído",
      filtro: "Faculdade"
    },
    {
      imagem: imagemSid,
      titulo: "Jogo | Sistema Digestório",
      ano: "2024",
      descricao: "O jogo consiste em um quiz com perguntas aleatórias onde os jogadores fazem pontos ao responder corretamente, competindo para subir no ranking e superar seus recordes.",
      tecnologias: ["Java", "MySQL", "Astah", "Figma"],
      links: {
        linkedin: "https://www.linkedin.com/in/victor-hugo-pinho/details/projects/",
        github: "https://github.com/VictorHugo-7/S1-Jogo-SID",
        figma: "https://www.figma.com/design/iZR65acOSPVaNqnFKLK19m/S1-Jogo-SID?node-id=1-3&t=tOdNcZx4087NB0I7-1"
      },
      status: "Concluído",
      filtro: "Faculdade"
    }
  ]
};

export default dados;