import { sponsorList } from "../../utilis/data";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const Sponsor = () => {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-5 my-10">
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            740: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {sponsorList.map(({ id, imgUrl }) => (
            <SwiperSlide key={id}>
              <div>
                <img src={imgUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsor;
