const homeCartTamplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");

let allProducts;

const stopNavigation = (e) => {
  e.preventDefault();
  const idEl = e.target.dataset.id;
  const item = allProducts.find((product) => product.id == idEl);
  console.log({ ...item, amount: 1 });
};

export const upDateHomeUI = ({ products }) => {
  allProducts = products;
  allProducts.forEach((product) => {
    const { thumbnail, title, price, description, rating, id } = product;
    const clone = homeCartTamplate.content.cloneNode(true);
    const img = clone.querySelector("img");
    const productTitle = clone.querySelector("h2");
    const productDescription = clone.querySelector("p");
    const productRating = clone.querySelector("h5");
    const productPrice = clone.querySelector("span");
    const button = clone.querySelector("button");
    const productCard = clone.querySelector("a");

    productCard.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    productTitle.textContent = title;
    productDescription.innerHTML = `<i>${description.slice(0, 90)}...</i>`;
    productRating.innerHTML = `Rating: ★${rating}`;
    productPrice.textContent = `Price: $${price}`;
    button.addEventListener("click", stopNavigation);
    button.setAttribute("data-id", id);

    productsContainer.appendChild(clone);
  });
};

const titleEl = document.getElementById("title");
const thumbnailEl = document.getElementById("thumblain");
const carouselEl = document.getElementById("carousel");
const carouselItem = document.getElementById("carousel-item");
const descriptionEl = document.getElementById("description");
const categoryEl = document.getElementById("category");
const priceEl = document.getElementById("price");
const discountPercentageEl = document.getElementById("discountPercentage");

export const upDateProductUI = (product) => {
  const { title, images, description, category, price, discountPercentage } =
    product;

  if (images.length > 1) {
    images.forEach((imgSrc) => {
      carouselEl.classList.remove("hidden");
      const clone = carouselItem.content.cloneNode(true);
      const image = clone.querySelector("img");

      image.src = imgSrc;

      carouselEl.appendChild(clone);
    });
  } else {
    thumbnailEl.src = images[0];
  }

  discountPercentageEl.textContent = discountPercentage;
  priceEl.textContent = price;
  categoryEl.textContent = category;
  descriptionEl.textContent = description;
  titleEl.textContent = title;
};
