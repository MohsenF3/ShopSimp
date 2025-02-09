import Slider from "react-slick";
import { filterByCategory } from "../../lib/utils";
import ShopCards from "../shop/ShopCards";

const SLIDER_SETTING = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  speed: 2500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
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

export default function SuggestedProducts({ category, id }) {
  const data = filterByCategory(category).filter((pro) => pro.id !== id);

  return (
    <div>
      <Slider {...SLIDER_SETTING}>
        {data.map((pro) => (
          <div className="h-full px-3" key={pro.id}>
            <ShopCards key={pro.id} {...pro} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
