import products from "../../products.json";

export const addProductsDelay = (data) => {
  let delayCounter = 100; // Counter for aosDelay
  const productsWithDelay = data.map((product) => {
    const productWithDelay = { ...product, aosDelay: delayCounter };
    delayCounter += 100; // Increase delay for next product
    return productWithDelay;
  });

  return productsWithDelay;
};

export const filterByCategory = (category) => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const filterByName = (name, data = products) => {
  return data.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};
