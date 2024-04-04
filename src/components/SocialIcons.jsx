import { social } from "../data/placeholder";

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
