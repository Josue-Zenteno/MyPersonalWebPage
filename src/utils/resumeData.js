import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

const resumeData = {
  name: "Josue Zenteno Yave",
  title: "Software Ingenieering Student",
  birthday: "08/08/2000",
  email: "josuoptp@gmail.com",
  phone: "609118725",
  about:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  socials: [
    {
      name: "Twitter",
      link: "https://twitter.com/SpicyJoss",
      description: "My Twitter",
      icon: <TwitterIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/josue-zenteno/",
      description: "My Linkedin",
      icon: <LinkedInIcon />,
    },
    {
      name: "Github",
      link: "https://github.com/Josue-Zenteno",
      description: "My Github",
      icon: <GitHubIcon />,
    },
  ],
  experiencies: [
    {
      title: "Work 1",
      date: "2018 - 2019",
      description:
        "My first job Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Work 2",
      date: "2019 - 2020",
      description:
        "My first job Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Work 3",
      date: "2020 - 2021",
      description:
        "My first job Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Work 4",
      date: "2021 - Present",
      description:
        "My first job Lorem Ipsum is not simply random text. It has roots in a piece",
    },
  ],
  educations: [
    {
      title: "Education 1",
      date: "2018 - 2019",
      description:
        "My first education Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Education 2",
      date: "2019 - 2020",
      description:
        "My first education Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Education 3",
      date: "2020 - 2021",
      description:
        "My first education Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    {
      title: "Education 4",
      date: "2021 - Present",
      description:
        "My first education Lorem Ipsum is not simply random text. It has roots in a piece",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "I have been a badass web developer for 10 years",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Branding Identity",
      description: "I have been a badass brand developer for 10 years",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Illustrator",
      description: "I have been a badass illustration developer for 10 years",
      icon: <CreateOutlinedIcon />,
    },
    {
      title: "Fast delivery",
      description: "I have been a badass fast delivery developer for 10 years",
      icon: <DeliveryDiningOutlinedIcon />,
    },
  ],
  skills: [
    {
      title: "Front-end",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Back-end",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "Databases",
      description: ["Firebase", "My SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "Source Control",
      description: ["Git", "Github", "SCRUM", "Agile"],
    },
  ],
  projects: [
    {
      tag: "React",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "React Project 1",
      caption: "A short description",
      description: "This is my project 1 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "React Project 2",
      caption: "A short description",
      description: "This is my project 2 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Angular",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "Angular Project 3",
      caption: "A short description",
      description: "This is my project 3 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Vue",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "Vue Project 4",
      caption: "A short description",
      description: "This is my project 4 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Vue",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "Vue Project 5",
      caption: "A short description",
      description: "This is my project 5 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Angular",
      image:
        "https://www.maxpixel.net/static/photo/640/Forms-Background-Lines-Abstract-Background-1789175.png",
      title: "Angular Project 6",
      caption: "A short description",
      description: "This is my project 6 description please fill it in",
      links: [
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Josue-Zenteno",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
