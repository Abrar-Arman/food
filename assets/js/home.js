//handel to top arrow
const section = document.querySelector(".restaurants");
const arrowTop = document.querySelector(".to-top");
console.log(arrowTop);
window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop) {
    arrowTop.style.display = "flex";
    console.log( arrowTop.style);
  } else {
    arrowTop.style.display = "none";
  }
});
//
// // setTimeout(() => {
// //   document.getElementById("overlay").style.display = "block";
// //   document.getElementById("welcome").style.display = "block";
// //   console.log('hi')
// }, 3000);
// setTimeout(() => {
//   document.getElementById("overlay").style.display = "block";
//   document.getElementById("welcome").style.display = "block";
// }, 3000);
// slider
const populerItem = [
  {
    id: 1,
    img: "./assets/img/populer/img1.png",
    title: "Toffe’s Cake",
    location: "Top Sticks",
    price: "4",
  },
  {
    id: 2,
    img: "./assets/img/populer/img2.png",
    title: "Dancake",
    location: "Cake World",
    price: "1.99",
  },
  {
    id: 3,
    img: "./assets/img/populer/img3.png",
    title: "Crispy Sandwitch",
    location: "Fastfood Dine",
    price: "3",
  },
  {
    id: 4,
    img: "./assets/img/populer/img5.png",
    title: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    id: 5,
    img: "./assets/img/populer/soup.png",
    title: "Chocolate Mousse Cake",
    location: "Chocolate Bakery",
    price: "2.50",
  },
  {
    id: 6,
    img: "./assets/img/populer/img3.png",
    title: "Crispy Sandwitch",
    location: "Fastfood Dine",
    price: "3",
  },
  {
    id: 7,
    img: "./assets/img/populer/img5.png",
    title: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    id: 8,
    img: "./assets/img/populer/img8.png",
    title: "Toffe’s Cake",
    location: "Top Sticks",
    price: "4",
  },
  {
    id: 9,
    img: "./assets/img/populer/img2.png",
    title: "Dancake",
    location: "Cake World",
    price: "1.99",
  },
  {
    id: 10,
    img: "./assets/img/populer/soup.png",
    title: "Chocolate Mousse Cake",
    location: "Chocolate Bakery",
    price: "2.50",
  },
  {
    id: 11,
    img: "./assets/img/populer/img4.png",
    title: "Toffe’s Cake",
    location: "Top Sticks",
    price: "4",
  },
];
const sliderContent = document.querySelector(".slider-content");
const nextButton = document.querySelector(".btn-nxt");
const preButton = document.querySelector(".btn-pre");
let currentIndex = 0;
function renderPopulerItems(arr) {
  let list = [];
  let cntView = (arr.length % 5) + Math.floor(arr.length / 5);
  console.log(cntView);
  if (arr.length > 5) {
    let reminder = arr.length - currentIndex;
    if (cntView == 0) {
      currentIndex = 0;
      cntView = (arr.length % 5) + Math.floor(arr.length / 5);
    }
    if (currentIndex % 5 != 0) {
      reminder = 0;
      currentIndex = 0;
    }
    if (reminder > 0 && reminder < 5) {
      let cnt = 5 - reminder;
      currentIndex -= cnt;
      list = arr.slice(currentIndex, arr.length);
    } else if (reminder === 0) {
      list = arr.slice(currentIndex, currentIndex + 5);
    } else {
      list = arr.slice(currentIndex, currentIndex + 5);
      currentIndex += 5;
    }
    cntView--;
  } else {
    list = arr;
  }
  console.log(currentIndex);
  console.log(list);
  const content = list.map(
    (item) => `
     <div class="col-lg-2">
                        <div class="card w-100 mt-1">
                            <img src=${item.img} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <span>${item.location}</span>
                                <span>$ ${item.price}</span>
                                <button class="d-block w-100 text-white btn mt-1">Order Now</button>
                            </div>
                        </div>
                    </div>
      `
  );
  sliderContent.innerHTML = content.join("");
}
renderPopulerItems(populerItem);

nextButton.addEventListener("click", () => {
  renderPopulerItems(populerItem);
});
//resturents
let populerRestrunt = [
  {
    id: 1,
    foodImg: "./assets/img/featured/food/img1.png",
    resturentImg: "./assets/img/featured/resturent/img1.png",
    title: "Foodworld",
    buttonCon: "Opens tomorrow",
    discount: "20%",
    rating: null,
  },
  {
    id: 2,
    foodImg: "./assets/img/featured/food/img2.png",
    resturentImg: "./assets/img/featured/resturent/img2.png",
    title: "Pizzahub",
    buttonCon: "Opens tomorrow",
    discount: "15%",
    rating: null,
  },
  {
    id: 3,
    foodImg: "./assets/img/featured/food/img4.png",
    resturentImg: "./assets/img/featured/resturent/img3.png",
    title: "Donuts hut",
    buttonCon: "Opens tomorrow",
    discount: "10%",
    rating: null,
  },
  {
    id: 4,
    foodImg: "./assets/img/featured/food/img5.png",
    resturentImg: "./assets/img/featured/resturent/img4.png",
    title: "Donuts hut",
    buttonCon: "Opens tomorrow",
    discount: "15%",
    rating: null,
  },
  {
    id: 5,
    foodImg: "./assets/img/featured/food/image6.png",
    resturentImg: "./assets/img/featured/resturent/img5.png",
    title: "Ruby Tuesday",
    buttonCon: "Open Now",
    discount: "10%",
    rating: null,
  },
  {
    id: 6,
    foodImg: "./assets/img/featured/food/Image3.png",
    resturentImg: "./assets/img/featured/resturent/img6.png",
    title: "Kuakata Fried Chicken",
    buttonCon: "Open Now",
    discount: "20%",
    rating: null,
  },
  {
    id: 7,
    foodImg: "./assets/img/featured/food/img7.png",
    resturentImg: "./assets/img/featured/resturent/img7.png",
    title: "Red Square",
    buttonCon: "Opens tomorrow",
    discount: "10%",
    rating: null,
  },
  {
    id: 8,
    foodImg: "./assets/img/featured/food/img9.png",
    resturentImg: "./assets/img/featured/resturent/img8.png",
    title: "Taco Bell",
    buttonCon: "Opens tomorrow",
    discount: "10%",
    rating: null,
  },
  {
    id: 9,
    foodImg: "./assets/img/featured/food/img1.png",
    resturentImg: "./assets/img/featured/resturent/img1.png",
    title: "Foodworld",
    buttonCon: "Opens tomorrow",
    discount: "20%",
    rating: null,
  },
  {
    id: 10,
    foodImg: "./assets/img/featured/food/img2.png",
    resturentImg: "./assets/img/featured/resturent/img2.png",
    title: "Pizzahub",
    buttonCon: "Opens tomorrow",
    discount: "15%",
    rating: null,
  },
  {
    id: 11,
    foodImg: "./assets/img/featured/food/img4.png",
    resturentImg: "./assets/img/featured/resturent/img3.png",
    title: "Donuts hut",
    buttonCon: "Opens tomorrow",
    discount: "10%",
    rating: null,
  },
  {
    id: 12,
    foodImg: "./assets/img/featured/food/img5.png",
    resturentImg: "./assets/img/featured/resturent/img4.png",
    title: "Donuts hut",
    buttonCon: "Opens tomorrow",
    discount: "15%",
  },
];
const resturebtFood = document.querySelector(".restaurants .row");
const view = document.querySelector(".view span");
function renderPopulerRestrunt(arr) {
  const content = arr.map(
    (item, ind) => `
         <div class="col-md-6 col-lg-3">
                    <div class="card w-100 mt-1 ">
                        <div class="over-lay position-relative">
                            <img src=${
                              item.foodImg
                            } class="card-img-top" alt="" >
                            <div class="extra-info pt-1 position-absolute w-100 h-100 start-0 top-0  d-flex justify-content-center align-items-start gap-2">
                                <span class="d-inline-block rounded-1">${
                                  item.discount
                                } off</span>
                                <span class="d-inline-block rounded-1">Fast</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="resturent d-flex gap-2 justify-content-between">
                                <img src=${item.resturentImg} alt="">
                                <div class="info">
                                    <span>${item.title}</span>
                                     <span class='gold'>${
                                       item.rating != null
                                         ? `${item.rating}  rating`
                                         : ""
                                     }</span>
                                    <div class="rating ${
                                      item.rating ? "d-none" : ""
                                    }">
                                        <i onclick='makeRating(${
                                          item.id
                                        },${1},${ind})' class="fa-regular fa-star ${
      item?.rating >= 1 ? "gold" : ""
    }"></i>
                                        <i  onclick='makeRating(${
                                          item.id
                                        },${2},${ind})' class="fa-regular fa-star ${
      item?.rating >= 2 ? "gold" : ""
    }"></i>
                                        <i  onclick='makeRating(${
                                          item.id
                                        },${3},${ind})' class="fa-regular fa-star ${
      item?.rating >= 3 ? "gold" : ""
    }"></i>
                                        <i  onclick='makeRating(${
                                          item.id
                                        },${4},${ind})' class="fa-regular fa-star ${
      item?.rating >= 4 ? "gold" : ""
    }"></i>
                                        <i  onclick='makeRating(${
                                          item.id
                                        },${5},${ind})' class="fa-regular fa-star ${
      item?.rating == 5 ? "gold" : ""
    }"></i>

                                    </div>
                                </div>
                            </div>
                            <button class="d-block mt-2 px-3 text-white btn rounded-4 ${
                              item.buttonCon == "Opens tomorrow"
                                ? "open-tommorrow"
                                : "open-now"
                            }">${item.buttonCon}</button>
                        </div>
                    </div>
                </div>
      `
  );
  resturebtFood.innerHTML = content.join("");
}
let counter = 0;
//first render display 8 iteme
renderPopulerRestrunt(populerRestrunt.slice(0, 8), 1);
view.addEventListener("click", () => {
  renderPopulerRestrunt(
    counter % 2 == 0 ? populerRestrunt : populerRestrunt.slice(0, 8),
    counter
  );
  if (counter % 2 == 0) {
    view.textContent = "Show less";
  } else {
    view.textContent = "View All";
  }
  counter++;
});
function makeRating(id, rating, ind) {
  const updateArr = populerRestrunt.map((item) =>
    item.id == id ? { ...item, rating } : item
  );
  populerRestrunt = updateArr;
  renderPopulerRestrunt(
    ind <= 7 ? populerRestrunt.slice(0, 8) : populerRestrunt
  );
}
console.log('jjjjjj')