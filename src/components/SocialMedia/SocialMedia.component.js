import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/kriskuchinka"
        title="Visit my Kris Kuchinka's GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/kriskuchinka"
        title="Contact Kris Kuchinka on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="mailto://kriskuchinka@gmail.com"
        title="Send Kris Kuchinka an email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CgMail size="3rem" />
      </SocialIcons>
    </SocialContainer>
  );
}
