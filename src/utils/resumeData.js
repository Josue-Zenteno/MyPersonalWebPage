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
  about:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
};

export default resumeData;
