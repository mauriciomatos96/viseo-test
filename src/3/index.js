import TemplateManager from "./TemplateManager";
import productListPage from "./templates/productListPage.js";
import productListItem from "./templates/productListItem.js"
import productDetail from "./templates/productDetail"
import apiConfig from "./apiConfig";

const renderPLPContainer = () => {
  const container = document.getElementById("plp");
  if (!container) {
    return;
  }

  container.appendChild(
    TemplateManager.render(productListPage("Kendrid Lamar´s songs"))
  );
};

const renderPLPItems = (items) => {
  const productListItemsId = document.getElementById("product-list-items")
  items.forEach(item => {
    const div = document.createElement("div")
    div.innerHTML = productListItem(item.displayName, item.price, item.id)
    productListItemsId.appendChild(div)
    fetch(`${apiConfig.baseUrl}/songs/${item.id}`, {
      method: "GET",
      headers: apiConfig.headers
    }).then(response => response.json())
      .then(json => console.log(json))
  });
};
const renderPDP = () => {
  const productDetail = document.getElementById("product-detail")
  console.log(productDetail)
};

const init = () => {
  const productListItems = [
    {
      displayName: "HUMBLE.",
      price: 9.99,
      id: "3039923"
    },
    {
      displayName: "N95",
      price: 9.99,
      id: "30499291"
    },
    {
      displayName: "Swimming Pools",
      price: 9.99,
      id: "3039923"
    },
    {
      displayName: "LOVE",
      price: 9.99,
      id: "3047141"
    }
  ];
  renderPLPContainer();
  renderPLPItems(productListItems);
};

init();