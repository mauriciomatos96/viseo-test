const filterProductsWithoutStock = (productFilter) => {
  for (let i = 0; i < productFilter.length; i++) {
    if (productFilter[i].stock <= 0) {
      productFilter.splice(i, 1);
    }
  }
  return productFilter
};

const displayProducts = (productsList) => {

  const ul = document.getElementById("products")

  productsList.forEach(product => {
    const li = document.createElement("li")
    li.innerHTML = product.name
    ul.appendChild(li);
  });
};

const getPLPProducts = () => {
  const products = [
    {
      id: 1,
      name: "iPhone",
      stock: 8
    },
    {
      id: 2,
      name: "Smart Watch",
      stock: 0
    },
    {
      id: 3,
      name: "Netflix Card",
      stock: 100
    }
  ];
  const filteredProducts = filterProductsWithoutStock(products);
  return filteredProducts;
};

const PLPProducts = getPLPProducts();
displayProducts(PLPProducts);