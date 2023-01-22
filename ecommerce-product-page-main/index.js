const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

const product = document.querySelector(".product");

//display or not display add to cart btn

const manipulationIcons = document.querySelector(".cartPlusMinusIcons");
const btn = document.querySelector(".addCart");
const total = document.querySelector(".cartTotal").innerText;
const displayOrHideCartIcons = (val) => {
  if (val <= 0) {
  

    manipulationIcons.style.display = "none";
    btn.style.display = 'block'
  } else {
    manipulationIcons.style.display = "flex";
    btn.style.display = 'none'
 
  }
};

//manipulate cart

const addCart = () => {
  const items = document.querySelector(".value").innerText;
  const cartTotal = document.querySelector(".cartTotal").innerText;
  const newTotal = (+items + 1).toString();

  document.querySelector(".value").innerText = newTotal;
  document.querySelector(".cartTotal").innerText = newTotal;

displayOrHideCartIcons(+newTotal)
};

plus.addEventListener("click", addCart);
minus.addEventListener("click", () => {
  const items = document.querySelector(".value").innerText;
  const cartTotal = document.querySelector(".cartTotal").innerText;

  const newTotal = (+items - 1).toString();
  document.querySelector(".value").innerHTML = newTotal;
  document.querySelector(".cartTotal").innerText = newTotal;

  displayOrHideCartIcons(+newTotal);
});

//Change product image

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

btn.addEventListener("click", addCart);
displayOrHideCartIcons(0)
