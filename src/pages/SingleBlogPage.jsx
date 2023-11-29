import { useParams } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import { blogList } from "../utilis/data";
import Tags from "../components/shop/Tags";
import PopularPost from "../components/shop/PopularPost";
import SocialIcons from "../components/SocialIcons";

// icons
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const SingleBlogPage = () => {
  // get the blog
  let { id } = useParams();
  const result = blogList.filter((blog) => blog.id === Number(id));
  const { imgUrl, title, desc } = result[0];

  return (
    <div className="bg-pink-100">
      <div>
        <PageHeader title="Single Blog Page" curPage="Single Blog" />
      </div>

      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-3 gap-10">
          {/* left side */}

          <div className=" col-span-2 p-5 bg-white rounded-sm">
            <div>
              <img src={imgUrl} alt="" className="w-full" />
            </div>
            {/* description */}

            <div>
              <h3 className="text-3xl font-bold mt-8 mb-3 ">{title}</h3>
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
              <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                {desc}
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                maxime nesciunt laudantium pariatur perferendis repellat
                voluptas ducimus aliquam porro autem possimus eos, asperiores
                quisquam similique at est explicabo, consequuntur voluptate
                saepe? Illum consequuntur praesentium tenetur id cumque nesciunt
                perferendis quae earum deleniti vero sapiente explicabo quis
                laboriosam repudiandae quas dignissimos accusamus corporis,
                adipisci distinctio? Unde veniam tempora inventore ipsam quidem
                temporibus at mollitia! Quisquam reprehenderit earum corrupti
                enim sunt error repellendus nihil labore quam illum cumque
                incidunt id quos maxime, consequatur atque eveniet nam aliquid
                mollitia ab excepturi accusamus? Dignissimos non autem
                blanditiis ab a ipsum tempora voluptas provident eligendi.
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                maxime nesciunt laudantium pariatur perferendis repellat
                voluptas ducimus aliquam porro autem possimus eos, asperiores
                quisquam similique at est explicabo, consequuntur voluptate
                saepe? Illum consequuntur praesentium tenetur id cumque nesciunt
                perferendis quae earum deleniti vero sapiente explicabo quis
                laboriosam repudiandae quas dignissimos accusamus corporis,
                adipisci distinctio? Unde veniam tempora inventore ipsam quidem
                temporibus at mollitia! Quisquam reprehenderit earum corrupti
                enim sunt error repellendus nihil labore quam illum cumque
                incidunt id quos maxime, consequatur atque eveniet nam aliquid
                mollitia ab excepturi accusamus? Dignissimos non autem
                blanditiis ab a ipsum tempora voluptas provident eligendi.
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                maxime nesciunt laudantium pariatur perferendis repellat
                voluptas ducimus aliquam porro autem possimus eos, asperiores
                quisquam similique at est explicabo, consequuntur voluptate
              </p>
              <div className="text-white">
                <SocialIcons />
              </div>
            </div>
          </div>
          {/* right side */}

          <div>
            {/* tags section  */}

            <div className="mb-10">
              <Tags />
            </div>
            {/* popular section  */}

            <div>
              <PopularPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
