let cardItems = [
  {
    title: "white t-shirt",
    img: "./White.webp",
    price: 40,
    quantity: 2,
    size: "L",
    color: "White",
    loved: true,
  },
  {
    title: "red t-shirt",
    img: "./red.jpg",
    price: 45,
    quantity: 3,
    size: "l",
    color: "red",
    loved: false,
  },
  {
    title: "black t-shirt",
    img: "./black.webp",
    price: 50,
    quantity: 4,
    size: "L",
    color: "black",
    loved: false,
  },
];
const cardWrapper = document.querySelector("#cardWrapper");
console.log(cardWrapper);
const total = document.querySelector(".total-quantity");
const totalPrice = document.querySelector("#total h3");
function fnAdd(v, i) {
  const div = document.createElement("div");
  div.setAttribute("class", "singleCard shadow");
  div.innerHTML = ` <div>
            <img class="shadow" src=${v.img} alt="first" />
            <div class="quantity">
              <button class="shadow-btn decrement">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-minus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
              </button>
              <input class="quantity-value" type="text" min="1" value=${
                v.quantity
              } />
              <button class="shadow-btn increment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="info">
            <h1>${v.title}</h1>
            <div>
              <div>
                <h6>price</h6>
                <span>${v.price}</span>
              </div>
              <div>
                <h6>sub Total</h6>
                <span class="sub-total">${v.price * v.quantity}</span>
              </div>
              <div>
                <h6>size</h6>
                <span>${v.size}</span>
              </div>
              <div>
                <h6>choosen color</h6>
                <span class="color shadow-btn"></span>
              </div>
            </div>
          </div>
          <div class="col btn-hundler">
            <button class="heart shadow-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-heart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                ></path>
              </svg>
            </button>
            <button class="delete shadow-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trash"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </button>
          </div>
`;
  cardWrapper.appendChild(div);
  function fnAdd(v, i) {
    console.log("hello" + i);
  }
}

cardItems.forEach(fnAdd);
total.innerHTML = 0;
totalPrice.innerHTML = 0;
function initialValues(v) {
  total.innerHTML = parseInt(total.innerHTML) + v.quantity;
  totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + v.quantity * v.price;
}
cardItems.forEach(initialValues);
const inc = document.querySelectorAll(".increment");
const dec = document.querySelectorAll(".decrement");

const inputs = document.querySelectorAll("input");
console.log(inc, inputs);

const subTotal = document.querySelectorAll(".sub-total");
const quantityValue = document.querySelectorAll(".quantity-value");

function subTotalfn(val, i) {
  subTotal[i].innerHTML = val * cardItems[i].price;
  return val * cardItems[i].price;
}

inc.forEach(function (v, i) {
  v.addEventListener("click", function addQuantity(e) {
    e.preventDefault();
    inputs[i].value++;
    subTotalfn(inputs[i].value, i);
    total.innerHTML++;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + parseInt(subTotalfn(inputs[i].value, i));
  });
});

dec.forEach(function (v, i) {
  v.addEventListener("click", function addQuantity(e) {
    e.preventDefault();
    if (inputs[i].value == 1) return;
    inputs[i].value--;
    subTotalfn(inputs[i].value, i);
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) - parseInt(subTotalfn(inputs[i].value, i));
  });
});
const deleteBtn = document.querySelectorAll(".delete");
const singleCard = document.querySelectorAll(".singleCard");
//console.log(deleteBtn, singleCard);
const main = document.querySelector("main");

function deleteItem(v, i) {
  console.log(v, i);
  v.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(i, singleCard[i]);
    singleCard[i].style.display = "none";
    total.innerHTML = total.innerHTML - inputs[i].value;
    //console.log(total)
    totalPrice.innerHTML =
      totalPrice.innerHTML - subTotalfn(inputs[i].value, i);
    if (totalPrice.innerHTML == 0) {
      main.innerHTML = "<h1>Your card is empty</h1>";
    }
  });
}
deleteBtn.forEach(deleteItem);
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/*
console.log(password);
function verifPassword(e) {
  e.preventDefault();
  const val = e.target.value;
  if (val.length < 8) {
    console.log("the password length shouldn't be less than 8");
  }
  if (val.length == 1) {
    console.log("the password field is empty");
  }
}
password.addEventListener("change", verifPassword);
*/
