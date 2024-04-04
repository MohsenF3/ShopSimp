import { postList } from "../../data/placeholder";
import Image from "../Image";

const PopularPost = () => {
  return (
    <div className="mb-8 ">
      <h3 className="text-xl font-bold mb-5">Most Popular Post</h3>
      <div>
        {postList.map(({ id, imgUrl, title, date }) => (
          <div key={id} className="flex gap-5 mb-5 border-b pb-5">
            <div className=" w-1/2">
              <Image
                src={imgUrl}
                alt="Blog Image"
                width={20}
                height={20}
                className="w-full rounded-3xl"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">{title}</h3>
              <p className="text-gray-500 mt-3">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
