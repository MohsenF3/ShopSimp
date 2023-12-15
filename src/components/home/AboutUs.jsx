import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import img from "../../../public/images/instructor/01.png";

import { countList } from "../../utilis/data";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  return (
    <div className="py-20 px-5 bg-gray-950 sm:bg-gradi my-10">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center"
      >
        {/* first part */}
        <div className="text-white ">
          {countList.map(({ id, iconName, count, text, backgroundColor }) => (
            <div key={id} className="mb-8 flex gap-5 about-us">
              <div
                className=" rounded-full p-6 text-4xl max-sm:p-4 max-sm:text-3xl "
                style={{ backgroundColor: backgroundColor }}
              >
                {iconName}
              </div>
              <div>
                <div className="text-4xl font-medium">
                  <CountUp
                    end={inView ? parseInt(count, 10) : 0}
                    duration={10}
                  />
                  <span>+</span>
                </div>
                {text}
              </div>
            </div>
          ))}
        </div>
        {/* middle part */}
        <div className="md:mr-5 max-md:col-span-2 max-md:mx-auto max-md:w-2/3">
          <img src={img} alt="" />
        </div>
        {/* last part */}
        <div className="sm:max-md:col-start-2 sm:max-md:col-end-3 sm:max-md:row-start-1 max-md:text-white">
          <h5 className=" font-medium tracking-widest">Why Choose Us</h5>
          <h3 className="text-3xl font-bold">Become a Marchant</h3>
          <p className="text-gray-900 max-md:text-white my-5">
            Take courses on your any device with our app & learn all about
            business what you want. Just download & install & start to learn
          </p>
          <button className="btn-border bg-white hover:bg-white hover:scale-90 text-gray-900 hover:text-gray-900">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
