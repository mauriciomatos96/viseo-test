import OrderProduct from "./OrderProduct";

const applyProductDiscounts = (productsList) => {
  let originalOrderPrice = 0
  let discount = 0
  for (let i = 0; i < productsList.length; i++) {

    productsList[i].setOrderItemPrice(productsList[i].productPrice * productsList[i].amount)
    if (productsList[i].amount > 10 && getProductStock(productsList[i].id) > 100) {
      productsList[i].setDiscount((productsList[i].orderItemPrice * 15) / 100)
    } else if (productsList[i].amount > 10) {
      productsList[i].setDiscount((productsList[i].orderItemPrice * 10) / 100)
    } else if (getProductStock(productsList[i].id) > 100) {
      productsList[i].setDiscount((productsList[i].orderItemPrice * 5) / 100)
    }
    originalOrderPrice += productsList[i].orderItemPrice
    discount += productsList[i].discount
  }
  productsList.total = originalOrderPrice - discount;
  productsList.savings = discount
  return productsList;
};

const getProductStock = (productId) => {
  const stockList = {
    1: 100,
    2: 5,
    3: 500
  };
  return stockList[productId];
};

const getCheckoutOrderPreview = () => {
  const order = {
    id: 1,
    userId: 1,
    products: [
      new OrderProduct(1, "iPhone", 2, 1000),
      new OrderProduct(2, "Smart Watch", 1, 200),
      new OrderProduct(3, "Netflix Card", 15, 20)
    ],
    total: 0,
    savings: 0
  };

  order.products = applyProductDiscounts(order.products);
  return order;
};

console.log(getCheckoutOrderPreview());
