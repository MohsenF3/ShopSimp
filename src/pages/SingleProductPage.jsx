import { useParams } from "react-router-dom";

import Star from "../components/Star";

import AddToCartForm from "../components/singleProduct/CartForm";
import ProductImage from "../components/singleProduct/ProductImage";
import SuggestedProducts from "../components/singleProduct/SuggestedProducts";
import { getProductById } from "../lib/utils";
import NotFound from "./NotFound";

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
      <div className="flex flex-col gap-10 md:flex-row lg:min-h-[calc(100vh-8rem)]">
        <div data-aos-delay="200" data-aos="fade-right">
          <ProductImage imgUrl={img} />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="mb-3 mt-1">
            <Star ratings={ratings} />
          </div>
          <h5 className="text-xl font-bold">${price}</h5>
          <p className="mb-3 mt-1 font-medium">{seller}</p>
          <p className="text-gray-500">
            Enthusiast build innovativ initiatives before lonterm high-impact
            awesome theme seo psd porta monetize covalent leadership after
            without resource.
          </p>

          <AddToCartForm id={id} />
        </div>
      </div>

      {/* suggested products */}
      <div className="mb-10 mt-16 overflow-hidden">
        <h3 className="mb-10 text-3xl font-medium">You might also like</h3>
        <SuggestedProducts category={category} id={id} />
      </div>
    </div>
  );
};

export default SingleProductPage;
