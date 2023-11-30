import { useState } from "react";
import { useParams } from "react-router-dom";

import allProducts from "../products.json";

import PageHeader from "../components/PageHeader";
import AddToCartForm from "../components/singleProduct/AddToCartForm";
import PopularPost from "../components/shop/PopularPost";
import Tags from "../components/shop/Tags";
import Reviews from "../components/singleProduct/Reviews";

const SingleProductPage = () => {
  const [products, setProducts] = useState(allProducts);
  // get the id of product
  const { id } = useParams();

  // get the product
  const result = products.filter((pro) => pro.id === id);
  const { name, price, img, ratings, ratingsCount, seller } = result[0];

  // create an dynamic Array base on rating
  const rate = Array.from({ length: ratings });

  return (
    <div>
      <div>
        <PageHeader title={"Our Shop Single"} curPage={"Single Product"} />
      </div>

      {/* main contetn */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  max-w-7xl py-16 px-5 mx-auto">
        {/* left side */}
        <div className="col-span-2">
          {/* product info */}
          <div className="flex flex-col md:flex-row gap-6 mb-16 md:mb-9">
            <div>
              <img src={img} alt="" className="rounded-sm" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{name}</h2>
              <div className="mt-1 mb-3">
                {rate.map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    &#9733;
                  </span>
                ))}
                <span className="ml-1 text-gray-500">
                  ({ratingsCount} review)
                </span>
              </div>
              <h5 className="text-xl font-bold">${price}</h5>
              <p className="font-medium mb-3 mt-1">{seller}</p>
              <p className="text-gray-500">
                Enthusiast build innovativ initiatives before lonterm
                high-impact awesome theme seo psd porta monetize covalent
                leadership after without resource.
              </p>

              {/* add to cart section */}
              <AddToCartForm id={id} name={name} price={price} img={img} />
            </div>
          </div>

          {/* reviews */}
          <div>
            <Reviews img={img} />
          </div>
        </div>
        {/* right side */}
        <div>
          {/* popular post section */}
          <aside>
            <PopularPost />
          </aside>

          {/* popular tag section */}
          <aside>
            <Tags />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
