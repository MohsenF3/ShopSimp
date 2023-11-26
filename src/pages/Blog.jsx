import blogList from "../utilis/blogdata";

import PageHeader from "../components/PageHeader";

// icons
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsFillSendFill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-pink-100">
      <div>
        <PageHeader title="Blog Page" curPage="Blog" />
      </div>

      <div className=" max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-3 gap-7">
          {blogList.map(({ id, imgUrl, title, desc, btnText }) => (
            <Link
              to={`/blog/${id}`}
              key={id}
              className=" group transition duration-300 shadow-lg p-5 bg-white rounded-sm hover:shadow-md hover:-translate-y-2"
            >
              <div>
                <img src={imgUrl} alt="" />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold group-hover:text-red-500">
                  {title}
                </h3>
                <div className="flex gap-5 mt-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span>
                      <FaUser className="text-red-500" />
                    </span>
                    <span>Author</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <SlCalender className="text-red-500" />
                    </span>
                    <span>Jun 05,2022</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="textgray-800 font-medium">Read More</span>
                    <span>
                      <BsFillSendFill className="text-red-500" />
                    </span>
                  </div>
                  <div>
                    <BsFillChatLeftTextFill />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
