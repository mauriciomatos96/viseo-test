class OrderProduct {
  constructor(id, name, amount, productPrice) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.productPrice = productPrice;
    this.orderItemPrice = null;
    this.discount = null;
  }

  setOrderItemPrice(newValue) {
    this.orderItemPrice = newValue;
  }

  setDiscount(discount) {
    this.discount = discount;
  }
}

export default OrderProduct;
