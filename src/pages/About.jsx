import { aboutList } from "../utilis/data";

import PageHeader from "../components/PageHeader";

// images
import img1 from "../assets/images/about/01.jpg";
import img2 from "../assets/images/about/02.jpg";

const About = () => {
  return (
    <div className="bg-pink-100">
      <div>
        <PageHeader title="About Page" curPage="About" />
      </div>

      <div className=" max-w-7xl mx-auto py-28 px-5">
        <div className="flex gap-10">
          {/* images */}
          <div className=" relative flex-1">
            <div className=" relative ">
              <div className=" bg-white shadow-md max-w-md p-2 rounded-sm ">
                <img src={img1} alt="" className="w-full" />
              </div>

              <div className="absolute w-1/5 flex flex-col items-center border-8 py-2 text-center border-white bottom-0 bg-orange-500 text-white z-10">
                <h4 className="font-bold text-3xl">30+</h4>
                <p className="text-sm font-medium text-gray-100">
                  Years Of Experiences
                </p>
              </div>
            </div>
            <div className=" absolute -right-5 -bottom-10">
              <div className=" bg-white shadow-md max-w-md p-2 rounded-sm ">
                <img src={img2} alt="" className="w-full" />
              </div>
            </div>
          </div>

          {/* contetn */}
          <div className="flex-1">
            {/* top */}
            <div className="mb-10">
              <h3 className="font-medium text-red-500 text-xl tracking-widest">
                About Our Brand
              </h3>
              <h1 className="text-3xl font-bold my-3">
                Good Qualification Services And Better Expriences
              </h1>
              <p className="text-gray-500 ">
                Distinctively provide acces mutfuncto users whereas transparent
                proceses somes ncentivize eficient functionalities rather than
                extensible archtectur communicate leveraged services and
                cross-platform.
              </p>
            </div>
            {/* bottom */}
            <div>
              {aboutList.map(({ id, imgUrl, title, desc }) => (
                <div key={id} className="flex items-center gap-5 mb-5">
                  <div>
                    <img src={imgUrl} alt="" className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md">{title}</h4>
                    <p className="text-gray-700 max-w-md">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
