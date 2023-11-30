import { FaStar } from "react-icons/fa";

const Description = ({ img }) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        corporis in quod debitis nulla, laudantium facere. Esse consectetur nemo
        fuga voluptatibus praesentium necessitatibus cum numquam aliquam!
        Repellat, voluptatibus officiis. Alias illum corporis cupiditate
        eligendi dolores, facere deserunt adipisci beatae debitis,
        exercitationem quisquam quibusdam illo laudantium a saepe eaque.
      </p>
      <div className="flex flex-col md:flex-row my-10 gap-5">
        <ul className="flex-1">
          <li className="flex items-center gap-2 mb-3">
            <FaStar fill="orange" size={25} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            illum.
          </li>
          <li className="flex items-center gap-2 mb-3">
            <FaStar fill="orange" size={25} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            illum.
          </li>
          <li className="flex items-center gap-2 mb-3">
            <FaStar fill="orange" size={25} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            illum.
          </li>
          <li className="flex items-center gap-2 mb-3">
            <FaStar fill="orange" size={25} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            illum.
          </li>
          <li className="flex items-center gap-2">
            <FaStar fill="orange" size={25} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            illum.
          </li>
        </ul>
        <div className="flex-1">
          <img src={img} alt="" className="w-full rounded-sm" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        corporis in quod debitis nulla, laudantium facere. Esse consectetur nemo
        fuga voluptatibus praesentium necessitatibus cum numquam aliquam!
        Repellat, voluptatibus officiis. Alias illum corporis cupiditate
        eligendi dolores, facere deserunt adipisci beatae debitis,
        exercitationem quisquam quibusdam illo laudantium a saepe eaque.
      </p>
    </div>
  );
};

export default Description;
