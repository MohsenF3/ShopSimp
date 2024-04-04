import { useParams } from "react-router-dom";

import Star from "../components/Star";

import AddToCartForm from "../components/singleProduct/CartForm";
import SuggestedProducts from "../components/singleProduct/SuggestedProducts";
import NotFound from "./NotFound";
import { getProductById } from "../lib/utils";
import ProductImage from "../components/singleProduct/ProductImage";

const SingleProductPage = () => {
  // get the id of product
  const { id } = useParams();

  if (!id) {
    return <NotFound />;
  }

  let product = getProductById(id);

  if (!product) {
    return <NotFound />;
  }

  const { name, price, img, ratings, seller, category } = product;

  return (
    <div className="container">
      <div className="flex md:flex-row flex-col gap-10 lg:min-h-[calc(100vh-8rem)]">
        <div data-aos-delay="200" data-aos="fade-right">
          <ProductImage imgUrl={img} />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="mt-1 mb-3">
            <Star ratings={ratings} />
          </div>
          <h5 className="text-xl font-bold">${price}</h5>
          <p className="font-medium mb-3 mt-1">{seller}</p>
          <p className="text-gray-500">
            Enthusiast build innovativ initiatives before lonterm high-impact
            awesome theme seo psd porta monetize covalent leadership after
            without resource.
          </p>

          <AddToCartForm id={id} />
        </div>
      </div>

      {/* suggested products */}
      <div className="overflow-hidden mb-10 mt-16">
        <h3 className="text-3xl font-medium mb-10">You might also like</h3>
        <SuggestedProducts category={category} id={id} />
      </div>
    </div>
  );
};

export default SingleProductPage;
