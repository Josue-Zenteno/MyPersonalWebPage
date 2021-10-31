import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const resumeData = {
  name: "Josue Zenteno Yave",
  title: "Software Ingenieering Student",
  birthday: "08/08/2000",
  email: "josuoptp@gmail.com",
  phone: "609118725",
  socials: {
    Twitter: {
      link: "https://twitter.com/SpicyJoss",
      text: "My Twitter",
      icon: <TwitterIcon />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/josue-zenteno/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/Josue-Zenteno",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
  },
};

export default resumeData;
