import { useMemo } from "react";
import Image from "../components/Image";
import { aboutList } from "../data/placeholder";
import img1 from "/images/about/01.webp";
import img2 from "/images/about/02.webp";

const About = () => {
  const aboutItems = useMemo(
    () =>
      aboutList.map((item, index) => ({
        ...item,
        delay: (index + 1) * 150,
      })),
    [],
  );

  return (
    <div className="container min-h-[80vh] overflow-hidden pt-3 max-lg:mb-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Left: Images */}
        <AboutImages />

        {/* Right: Content */}
        <div className="flex-1" data-aos="fade-left">
          <AboutHeader />
          <div>
            {aboutItems.map((item) => (
              <AboutItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const AboutHeader = () => (
  <div className="mb-10">
    <h3 className="text-xl font-medium tracking-widest text-primary">
      About Our Brand
    </h3>
    <h1 className="my-3 text-3xl font-bold">
      Good Qualification Services And Better Experiences
    </h1>
    <p className="text-gray-500">
      Distinctively provide access to multifunctional users, whereas transparent
      processes incentivize efficient functionalities rather than extensible
      architecture, communicating leveraged services and cross-platform
      benefits.
    </p>
  </div>
);

const AboutImages = () => (
  <div className="relative flex-grow-0">
    <div className="relative h-full w-full" data-aos="fade-right">
      <Image
        src={img1}
        width={300}
        height={300}
        alt="About Our Brand"
        className="w-3/4 rounded-3xl ring-2 ring-brandGreen ring-offset-4 max-lg:mx-auto lg:w-full"
      />
    </div>
    <img
      src={img2}
      alt="Our Team"
      className="absolute -bottom-16 -right-5 hidden w-52 rounded-3xl ring-2 ring-brandYellow ring-offset-4 md:block"
      data-aos="fade-up"
      data-aos-delay="350"
    />
  </div>
);

const AboutItem = ({ imgUrl, title, desc, delay }) => (
  <div
    className="mb-5 flex items-center gap-5"
    data-aos="fade-left"
    data-aos-delay={delay}
  >
    <img src={imgUrl} alt={title} className="rounded-full" />
    <div>
      <h4 className="text-md font-bold">{title}</h4>
      <p className="max-w-md text-gray-700">{desc}</p>
    </div>
  </div>
);
