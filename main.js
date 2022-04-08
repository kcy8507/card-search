let cardContainer = document.querySelector(".row");
let priceHigh = document.querySelector(".btn-up");
let priceLow = document.querySelector(".btn-down");

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  static priceCompareHigh(priceA, priceB) {
    return priceB.price - priceA.price;
  }

  static priceCompareLow(priceA, priceB) {
    return priceA.price - priceB.price;
  }

  static searchResult() {
    productss.filter((item) => item.title === searchValue);
  }
}

// let products = [
//   { id: 0, price: 10000, title: "로션" },
//   { id: 1, price: 15000, title: "스킨" },
//   { id: 2, price: 100000, title: "영양크림" },
//   { id: 3, price: 10000, title: "아이크림" },
//   { id: 4, price: 5000, title: "핸드크림" },
//   { id: 5, price: 45000, title: "바디워시" },
//   { id: 6, price: 65000, title: "트리트먼트" },
//   { id: 7, price: 98000, title: "수분팩" },
//   { id: 8, price: 6000, title: "풋크림" },
// ];

let productss = [
  new Product("로션", 10000),
  new Product("스킨", 5000),
  new Product("영양크림", 65000),
  new Product("아이크림", 304630),
  new Product("핸드크림", 2300),
  new Product("바디워시", 20000),
  new Product("트리트먼트", 65000),
  new Product("수분팩", 98000),
  new Product("풋크림", 6000),
  new Product("풋크림", 6000),
];

render();

function render() {
  console.log("render");
  productss.forEach(function (el, i) {
    let template = `
          <div class="col">
            <div class="card h-100">
              <img src="https://dummyimage.com/300x200/2e2e2e/fff" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">가격 : ${el.price}원</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">업로드 순서 : ${i}</small>
              </div>
            </div>
          </div>`;
    // console.log(template);
    // cardContainer.insertAdjacentHTML("beforeend", template);
    cardContainer.insertAdjacentHTML("afterbegin", template);
  });
  console.log("end");
}

priceHigh.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  productss.sort(Product.priceCompareHigh);
  render();
});

priceLow.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  productss.sort(Product.priceCompareLow);
  render();
});

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const searchValue = document.getElementById("searchValue").value;
  //   let resultArr = productss.filter((item) => item.title === searchValue);
  //   console.log("r", resultArr);
  //   console.log("s", searchValue);
  //   cardContainer.innerHTML = "";

  //   let searchRender = resultArr.forEach(function (el, i) {
  //     let template = `
  //           <div class="col">
  //             <div class="card h-100">
  //               <img src="https://dummyimage.com/300x200/2e2e2e/fff" class="card-img-top" alt="..." />
  //               <div class="card-body">
  //                 <h5 class="card-title">${el.title}</h5>
  //                 <p class="card-text">가격 : ${el.price}원</p>
  //               </div>
  //               <div class="card-footer">
  //                 <small class="text-muted">업로드 순서 : ${i}</small>
  //               </div>
  //             </div>
  //           </div>`;
  //     // console.log(template);
  //     cardContainer.insertAdjacentHTML("beforeend", template);
  //   });

  //   searchValue === "" ? render() : searchRender;

  //   console.log(searchRender);
  //   productss.map((el, i) => {
  //     if (searchValue === el.title) {
  //       cardContainer.innerHTML = "";
  //       console.log("있어");
  //       console.log(el.title);
  //       render();
  //     } else {
  //       return (cardContainer.innerHTML = "");
  //     }
  //     console.log("end");
  //   });
  let result = productss.filter((el) => el.title === searchValue);

  cardContainer.innerHTML = "";
  render();
  console.log(result);
});
