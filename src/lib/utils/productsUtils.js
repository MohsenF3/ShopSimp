import products from "../../products.json";

export const filterByCategory = (category) => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );
};

export const filterByName = (name, data = products) => {
  return data.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
};

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
