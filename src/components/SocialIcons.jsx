// icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const social = [
  {
    id: 0,
    iconName: <FaFacebook />,
    bg: "#1877F2",
  },
  {
    id: 1,
    iconName: <FaInstagram />,
    bg: "#E4405F",
  },
  {
    id: 2,
    iconName: <FaLinkedin />,
    bg: "#0A66C2",
  },
  {
    id: 3,
    iconName: <FaTwitter />,
    bg: "#1DA1F2",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2">
      {social.map(({ id, iconName, bg }) => (
        <a
          href="#"
          key={id}
          style={{ backgroundColor: bg }}
          className="p-2 rounded-md text-lg"
        >
          {iconName}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
