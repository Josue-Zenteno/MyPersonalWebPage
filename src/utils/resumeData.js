import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

const resumeData = {
  name: "Josué Carlos Zenteno Yave",
  title: "Estudiante de Ingeniería Informática",
  birthday: "08/08/2000",
  email: "josuoptp@gmail.com",
  phone: "(+34) 609118725",
  about: `Soy Josué y en este momento estoy terminando el grado en Ingeniería Informática en la Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM).\n\nEstoy enamorado del Desarrollo Web por lo que estoy aprendiendo muchas cosas sobre este mundo donde, además, me gusta compartir todas las cosas nuevas que aprendo con mis compañeros.\n\nUna de mis metas principales es convertirme en un gran desarrollador, razón por la cual doy lo mejor de mi mismo en cada proyecto, aprendiendo todo lo posible y buscando siempre las mejores soluciones a base de aplicar buenas prácticas, lo que me permite mejorar mis habilidades.\n\nSe bienvenido a mi página web y no dudes en contactar conmigo si estas interesado en saber más de mí.`,
  socials: [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/josue-zenteno/",
      description: "Josue-Zenteno",
      icon: <LinkedInIcon />,
    },
    {
      name: "Github",
      link: "https://github.com/Josue-Zenteno",
      description: "Josue-Zenteno",
      icon: <GitHubIcon />,
    },
  ],
  experiencies: [
    {
      title: "Coordinador de Eventos",
      date: "Escuela Superior Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - Presente",
      description:
        "Coordinación de torneos de e-sports entre otros eventos relevantes con cientos de participantes de diferentes partes de España cada año.",
    },
    {
      title: "Profesor de Programación",
      date: "Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - 2019/2021",
      description: "Impartición de clases de fundamentos de programación para el programa de ayuda de estudiantes.",
    },
    {
      title: "Delegado de Curso",
      date: "Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - 2019/2021",
      description: "Delegado de curso por dos años.",
    },
    {
      title: "Miembro de la Delegación de Alumnos de Informática ( DAI )",
      date: "Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - Presente",
      description: "Miembro de la delegación de alumnos de informática por cuatro años, organizando eventos y ayudando a los estudiantes.",
    },
  ],
  educations: [
    {
      title: "Grado Bilingüe en Ingeniería Informática",
      date: "Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - 2018 – Presente",
      description:
        "Grado completamente bilingüe en la Escuela Superior de Informática con una especialización en Tecnologías de la Información.",
    },
    {
      title: "Desarrollo Web Full Stack con el Stack MERN 3.0",
      date: "Escuela Superior de Informática (ESI) - Universidad de Castilla-La Mancha (UCLM) - 2020",
      description: "",
    },
    {
      title: "Cambridge First Certificate in English ( B2 )",
      date: "Dolmen School of English - 2018",
      description: "",
    },
  ],
  services: [
    {
      title: "Proactivo",
      description: "Soy una persona muy curiosa y siempre trato de aprender algo nuevo",
      icon: <BoltIcon />,
    },
    {
      title: "Liderazgo",
      description: "He liderado la gran mayoría de equipos que he tenido y no tengo miedo a tomar decisiones",
      icon: <GroupsIcon />,
    },
    {
      title: "Aprendizaje rápido",
      description: "Respondo rápido si tengo que trabajar con una tecnología nueva",
      icon: <MenuBookIcon />,
    },
    {
      title: "Flexibilidad y Adaptabilidad",
      description: "Trabajo bien en cualquier situación, incluso bajo mucha presión",
      icon: <AutoAwesomeMosaicIcon />,
    },
  ],
  skills: [
    {
      title: "Lenguajes de programación",
      description: ["Javascript", "Python", "Java", "Markdown", "Shell"],
    },
    {
      title: "Frameworks",
      description: ["ReactJS", "Express", "SpringBoot", "NodeJS", "Maven"],
    },
    {
      title: "Bases de Datos",
      description: ["MySQL", "MongoDB", "Microsoft Access"],
    },
    {
      title: "Otros",
      description: ["Material UI", "Bootstrap", "Git"],
    },
  ],
};

export default resumeData;
