const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

const product = document.querySelector(".product");

const addCart = () => {
  const items = document.querySelector(".value").innerText;

  document.querySelector(".value").innerText = (+items + 1).toString();
};

plus.addEventListener("click", addCart);
minus.addEventListener("click", () => {
  const items = document.querySelector(".value").innerText;
  let value = document.querySelector(".value").innerHTML;
  if (+value <= 0) {
    return alert("There are no items in the cart");
  }
  document.querySelector(".value").innerHTML = (+items - 1).toString();
});

const changeImage = (classes, element, allElements) => {
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("active");
  }

  if (classes.includes("thumbnail1")) {
    element.classList.add("active");
    product.innerHTML =
      ' <img src="./images/image-product-1.jpg" alt="shoe" /> ';
  }
  if (classes.includes("thumbnail2")) {
    element.classList.add("active");
    product.innerHTML =
      ' <img src="./images/image-product-2.jpg" alt="shoe" /> ';
  }
  if (classes.includes("thumbnail3")) {
    element.classList.add("active");
    product.innerHTML =
      ' <img src="./images/image-product-3.jpg" alt="shoe" /> ';
  }
  if (classes.includes("thumbnail4")) {
    element.classList.add("active");
    product.innerHTML =
      ' <img src="./images/image-product-4.jpg" alt="shoe" /> ';
  }
};

const thumbnails = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", () =>
    changeImage(thumbnails[i].className, thumbnails[i], thumbnails)
  );
}
