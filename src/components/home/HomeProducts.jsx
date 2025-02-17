import { Link } from "react-router-dom";
import { shuffleArray } from "../../lib/utils";
import products from "../../products.json";
import ShopCards from "../shop/ShopCards";

const getRandomProducts = () => {
  // Shuffle the array to ensure randomness
  const shuffledData = shuffleArray(products);

  // Select the first 8 products from the shuffled array
  return shuffledData.slice(0, 8);
};

const HomeProducts = () => {
  const randomProducts = getRandomProducts();

  return (
    <div>
      <div className="mb-20 text-center">
        <h1 className="mb-5 text-3xl font-bold text-gray-950 max-md:mt-10 lg:text-5xl">
          Our New Products
        </h1>
      </div>
      <div className="container md:py-16">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {randomProducts.map((product, index) => (
            <ShopCards key={product.id} index={index} {...product} />
          ))}
        </div>
      </div>
      <div
        className="mt-8 flex items-center justify-center md:m-0"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <Link to="/shop" className="btn">
          Explore More Products
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
