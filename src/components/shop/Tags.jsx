import { tagsList } from "./index";

const Tags = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-5">Most Popular Tags</h3>
      <ul className="grid grid-cols-3">
        {tagsList.map(({ link, text }) => (
          <li
            key={text}
            className="border min-w-max p-2 m-2 hover:bg-yellow-400 hover:text-white transition"
          >
            <a href={link} className=" capitalize block ">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
