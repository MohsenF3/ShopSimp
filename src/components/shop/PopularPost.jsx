import { Link } from "react-router-dom";
import { postList } from "../../utilis/data";

const PopularPost = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-5">Most Popular Post</h3>
      <div>
        {postList.map(({ id, imgUrl, title, date }) => (
          <Link
            to={`/blog/${id}`}
            key={id}
            className="flex gap-5 mb-5 border-b pb-5 group"
          >
            <div className=" w-1/2">
              <img src={imgUrl} alt="" className="w-full rounded-sm" />
            </div>
            <div className="flex flex-col">
              <h3 className=" group-hover:text-yellow-500 font-medium">
                {title}
              </h3>
              <p className="text-gray-500 mt-3">{date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
