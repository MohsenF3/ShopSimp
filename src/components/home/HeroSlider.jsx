import { Link } from "react-router-dom";
import Slider from "react-slick";
import { heroData } from "../../data/placeholder";
import Image from "../Image";

const HERO_SETTING = {
  lazyLoad: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 14000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

export default function HeroSlider() {
  return (
    <Slider {...HERO_SETTING}>
      {heroData.map(({ id, img, subtitle, title, title2, link }) => (
        <div key={id} className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <TextContent
              subtitle={subtitle}
              title={title}
              title2={title2}
              link={link}
            />
            <ProductImage img={img} isHeadphone={title2 === "Headphone"} />
          </div>
        </div>
      ))}
    </Slider>
  );
}

const TextContent = ({ subtitle, title, title2, link }) => (
  <div className="relative z-10 order-2 flex flex-col justify-center gap-4 pt-12 text-center md:order-1 md:pl-3 md:pt-0 md:text-left">
    <AnimatedHeading className="text-2xl font-bold md:text-6xl lg:text-2xl">
      {subtitle}
    </AnimatedHeading>
    <AnimatedHeading className="text-5xl font-bold md:text-6xl lg:text-7xl">
      {title}
    </AnimatedHeading>
    <AnimatedHeading className="text-5xl font-bold uppercase text-white/80 md:text-[100px] lg:text-[80px] xl:text-[150px]">
      {title2}
    </AnimatedHeading>

    <Link
      to={link}
      data-aos="zoom-out"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      <button className="mt-4 rounded-full bg-brandBlue px-6 py-2 font-medium text-white shadow-md transition-shadow hover:shadow-xl">
        Shop Now
      </button>
    </Link>
  </div>
);

const AnimatedHeading = ({ children, className }) => (
  <h1 data-aos="zoom-out" data-aos-duration="500" className={className}>
    {children}
  </h1>
);

const ProductImage = ({ img, isHeadphone }) => (
  <div className="order-1 md:order-2">
    <div data-aos="zoom-in" className="relative z-10">
      <Image
        src={img}
        alt="Product Image"
        className={`h-[200px] w-[300px] md:h-[450px] md:w-[450px] ${
          isHeadphone ? "lg:scale-120 md:scale-105" : "scale-125 lg:scale-150"
        } relative z-40 mx-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]`}
      />
    </div>
  </div>
);
