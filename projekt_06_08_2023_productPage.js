let productName = "";
const data = JSON.parse(localStorage.getItem("data"));
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("productId"));
productName = data[productId - 1];

function createProductPage(product) {
  const productPage = document.getElementById("productPage");
  const createProductPage = document.createElement("div");
  createProductPage.classList.add("createProductPage");
  productPage.appendChild(createProductPage);
  const divImg = document.createElement("div");
  const image = document.createElement("img");
  image.classList.add("imgProductCard");
  image.src = product.image;
  divImg.appendChild(image);
  createProductPage.appendChild(divImg);
  divImg.classList.add("divImg");
  const headerTitle = document.createElement("h2");
  headerTitle.innerText = "Title";
  createProductPage.appendChild(headerTitle);

  const title = document.createElement("p");
  title.innerText = product.name;
  createProductPage.appendChild(title);

  const headerDescription = document.createElement("h2");
  headerDescription.innerText = "Description";
  createProductPage.appendChild(headerDescription);

  const description = document.createElement("p");
  description.innerText = product.description;
  createProductPage.appendChild(description);

  const headerCategory = document.createElement("h2");
  headerCategory.innerText = "Category";
  createProductPage.appendChild(headerCategory);

  const category = document.createElement("p");
  category.innerText = product.category;
  createProductPage.appendChild(category);

  const headerPrice = document.createElement("h2");
  headerPrice.innerText = "Price";
  createProductPage.appendChild(headerPrice);

  const price = document.createElement("p");
  price.innerText = product.price;
  createProductPage.appendChild(price);
}

createProductPage(productName);
