import { Link } from "react-router-dom";
import { addProductsDelay } from "../../lib/utils";
import products from "../../products.json";
import ShopCards from "../shop/ShopCards";

const HomeProducts = () => {
  const getRandomProducts = () => {
    // Shuffle the array to ensure randomness
    const shuffledData = products.sort(() => Math.random() - 0.5);

    const productsWithDelay = addProductsDelay(shuffledData);

    // Select the first 12 items from the shuffled array
    return productsWithDelay.slice(0, 8);
  };

  const randomProducts = getRandomProducts();

  return (
    <div>
      <div className="mb-20 text-center">
        <h1 className="mb-5 text-3xl font-bold text-gray-950 max-md:mt-10 lg:text-5xl">
          Our Products
        </h1>
      </div>
      <div className="container md:py-16">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {randomProducts.map((pro) => (
            <ShopCards key={pro.id} {...pro} />
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
