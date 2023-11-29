import { useState } from "react";

import { ReviewList } from "../../utilis/data";

import AddReview from "./AddReview";
import Description from "./description";
import ShowReviews from "./ShowReviews";

const Reviews = ({ img }) => {
  const [reviewList, setReviewList] = useState(ReviewList);
  const [review, serReview] = useState(false);

  return (
    <div>
      {/* btns */}
      <div className="border-b pb-2 mb-6">
        <button
          onClick={() => serReview(false)}
          className={`btn mr-5  text-white ${
            review
              ? "bg-green-500 hover:bg-green-600 "
              : "bg-gray-500 hover:bg-gray-600 scale-95"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => serReview(true)}
          className={`btn   text-white
          ${
            review
              ? "bg-gray-500 hover:bg-gray-600 scale-95"
              : "bg-green-500 hover:bg-green-600 "
          }
          `}
        >
          Reviews ({reviewList.length})
        </button>
      </div>
      {/* description */}
      {review ? "" : <Description img={img} />}

      {/* review */}
      <div className={` ${review ? "block" : " hidden"}`}>
        {/* show reviews */}
        <ShowReviews reviewList={reviewList} />
        {/* reviews form */}
        <AddReview setReviewList={setReviewList} />
      </div>
    </div>
  );
};

export default Reviews;
