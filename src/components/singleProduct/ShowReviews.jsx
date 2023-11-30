import { FaStar } from "react-icons/fa";

import defaultImg from "../../assets/images/clients/avater.jpg";

const ShowReviews = ({ reviewList }) => {
  return (
    <ul>
      {reviewList.map(({ imgUrl, name, date, desc, rating }) => {
        const renderStars = () => {
          const stars = [];
          for (let i = 1; i <= 5; i++) {
            stars.push(
              <FaStar
                key={i}
                color={i <= rating ? "#ffc107" : "#e4e5e9"}
                size={20}
              />
            );
          }
          return stars;
        };

        return (
          <li
            key={name}
            className="flex  gap-5 mb-8 border-b pb-2 min-h-[7rem]"
          >
            <div className=" w-1/6">
              {imgUrl ? (
                <img src={imgUrl} alt="" />
              ) : (
                <img src={defaultImg} alt="" className=" w-full  " />
              )}
            </div>

            <div className="w-full">
              <div className="flex flex-wrap items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className=" capitalize">{name}</h3>
                  <span className="text-sm">Posted on {date}</span>
                </div>
                <div className="flex">{renderStars()}</div>
              </div>
              <p className="capitalize max-w-xl">{desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowReviews;
