import Slider from "react-slick";
import ShopCards from "../shop/ShopCards";
import { filterByCategory } from "../../lib/utils";

export default function SuggestedProducts({ category, id }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    speed: 2500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = filterByCategory(category).filter((pro) => pro.id !== id);

  return (
    <div>
      <Slider {...settings}>
        {data.map((pro) => (
          <div className=" px-3 h-full" key={pro.id}>
            <ShopCards key={pro.id} {...pro} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
