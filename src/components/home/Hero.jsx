import Slider from "react-slick";
import { heroData } from "../../data/placeholder";
import Image from "../Image";

const Hero = () => {
  const settings = {
    lazyLoad: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl shadow-lg min-h-[570px] sm:min-h-[620px] px-5 hero-bg-color flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0 ">
          {/* Hero section */}
          <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id} className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold "
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-5xl uppercase text-white/80 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    ></div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in" className="relative z-10">
                      <Image
                        src={data.img}
                        alt="Product Image"
                        className={`w-[300px] sm:w-[450px] h-[200px] sm:h-[450px] ${
                          data.title2 === "Headphone"
                            ? "sm:scale-105 lg:scale-120"
                            : "scale-125 lg:scale-150"
                        }  object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
