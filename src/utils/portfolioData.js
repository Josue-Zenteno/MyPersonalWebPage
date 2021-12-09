import GitHubIcon from "@mui/icons-material/GitHub";

const portfolioData = {
  projects: [
    {
      tag: "React",
      image: "https://media.discordapp.net/attachments/571818726010257438/918125023829577788/PersonalWebPage.png?width=878&height=515",
      title: "Página Web Personal",
      caption: "Respositorio con el código de esta página web",
      description: "Respositorio con el código de esta página web, desarrollada con React, Material UI y Bootstrap",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/MyPersonalWebPage",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: "https://media.discordapp.net/attachments/571818726010257438/918125981053644860/KaraOKE.png?width=878&height=515",
      title: "KaraOKE",
      caption: "Karaoke online para aprender inglés",
      description:
        "Single Page Application (SPA) destinada a mejorar el dominio del inglés gracias a cantar canciones y mientras se rellenan las palabras que faltan en las letras de las canciones. Desarrollada con React, Typescript y Material UI",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/KaraOKE",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: "https://media.discordapp.net/attachments/571818726010257438/918134253252935690/DayByDay.png?width=878&height=515",
      title: "DayByDay",
      caption: "Sistema de gestión de tareas para equipos",
      description:
        "Single Page Aplication (SPA) destinada a hacer la organización de tareas de un equipo algo más sencillo, gracias a un sistema de notas con prioridad. Front End desarrollado con React y Bootsrap, peticiones a la API con Axios",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/DayByDayReact",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: "https://media.discordapp.net/attachments/571818726010257438/918135974280720404/TwitterClone.png?width=878&height=515",
      title: "TwitterClone",
      caption: "Clon de Twitter",
      description:
        "Single Page Aplication (SPA) destinada a ser un clon de Twitter. Aspecto desarrollado con React y Bootsrap, peticiones a la API con Axios",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/SpicyTwitterReact",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Express",
      image: "https://media.discordapp.net/attachments/571818726010257438/918134928166764544/DayByDay-API.png?width=877&height=515",
      title: "DayByDay BackEnd",
      caption: "API para DayByDay",
      description: "API de DayByDay desarrollada con Express lanzando peticiones a una base de datos documental MongoDB",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/DayByDayAPI",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Express",
      image: "https://media.discordapp.net/attachments/571818726010257438/918135982090498058/TwitterClone-API.png?width=877&height=515",
      title: "TwitterClone BackEnd",
      caption: "API para TwitterClone",
      description: "API de TwitterClone desarrollada con Express lanzando peticiones a una base de datos documental MongoDB",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/SpicyTwitterAPI",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image: "https://media.discordapp.net/attachments/571818726010257438/918136705440178237/ControlICE.png?width=878&height=515",
      title: "ControlICE",
      caption: "Sistema de monitorización de consumo eléctrico",
      description:
        "Sistema de monitorización del consumo eléctrico de cualquier edificio que cuente con un dispositivo Wibeee. Desarrollada utilizando herramientas como MQTT, Telegraf, InfluxDB y Grafana",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/ControlICE",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image: "https://media.discordapp.net/attachments/571818726010257438/918138598346358784/Mazer.png?width=878&height=515",
      title: "Mazer",
      caption: "Generador y Resolutor de laberintos",
      description:
        "Aplicación de escritorio que permite generar y resolver laberintos de cualquier tamaño dado mediante el uso de algoritmos de búsqueda",
      links: [
        {
          link: "https://github.com/Josue-Zenteno/Maze-Generator-Solver",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Java",
      image: "https://media.discordapp.net/attachments/571818726010257438/918140836116582501/JuegosTSW.png?width=877&height=515",
      title: "JuegosTSW",
      caption: "Aplicación web de mini juegos online",
      description:
        "Aplicación web que permite jugar a diferentes mini juegos como el tres en raya y las damas entre otros. Integra diferentes servicios como videollamada, chat de texto, registro con cuenta de google.",
      links: [
        {
          link: "https://github.com/jalvarezz13/juegosTSW",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default portfolioData;
