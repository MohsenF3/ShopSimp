import Image from "../components/Image";
import { aboutList } from "../data/placeholder";

// images
import img1 from "/images/about/01.jpg";
import img2 from "/images/about/02.jpg";

const About = () => {
  let delayProduct = 0;

  return (
    <div className="container min-h-screen max-lg:mb-10 pt-3 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* images */}
        <div className=" flex-grow-0 relative">
          <div className="w-full h-full relative" data-aos="fade-right">
            <Image
              src={img1}
              width={300}
              height={300}
              alt="About Image"
              className="lg:w-full w-3/4 max-lg:mx-auto rounded-3xl ring-offset-4 ring-2 ring-brandGreen"
            />
          </div>

          <img
            src={img2}
            alt="About Image 2"
            className="absolute w-52 hidden md:block -bottom-16 -right-5 rounded-3xl ring-offset-4 ring-2 ring-brandYellow"
            data-aos="fade-up"
            data-aos-delay="350"
          />
        </div>

        {/* contetn */}
        <div className="flex-1" data-aos="fade-left">
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
            {aboutList.map(({ id, imgUrl, title, desc }) => {
              delayProduct += 150;
              return (
                <div
                  key={id}
                  className="flex items-center gap-5 mb-5"
                  data-aos-delay={delayProduct}
                  data-aos="fade-left"
                >
                  <div>
                    <img src={imgUrl} alt="" className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md">{title}</h4>
                    <p className="text-gray-700 max-w-md">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
