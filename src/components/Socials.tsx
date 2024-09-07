import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/KamilErdogmus",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/kamil-erdo%C4%9Fmu%C5%9F-a60460281/",
  },
];
interface IProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: IProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
