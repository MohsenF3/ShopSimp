import products from "../../products.json";
import ShopCards from "../shop/ShopCards";
import { Link } from "react-router-dom";
import { addProductsDelay } from "../../lib/utils";

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
      <div className="text-center mb-20">
        <h1 className="font-bold text-gray-950 text-3xl lg:text-5xl max-md:mt-10 mb-5">
          Our Products
        </h1>
      </div>
      <div className="container md:py-16">
        <div className="grid gap-5  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {randomProducts.map((pro) => (
            <ShopCards key={pro.id} {...pro} />
          ))}
        </div>
      </div>
      <div
        className="flex items-center justify-center mt-8 md:m-0"
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
