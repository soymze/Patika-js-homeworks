const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

function displayButtons() {
  const buttonsContainer = document.querySelector(".btn-container");
  const categories = ["all", "Korea", "China", "Japan"];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.setAttribute("data-category", category);
    button.classList.add("btn", "btn-primary", "m-2");

    button.addEventListener("click", () => {
      filterItems(category);
    });

    buttonsContainer.appendChild(button);
  });
}

function displayItems(items) {
  const container = document.querySelector(".section-center");
  container.innerHTML = "";

  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item", "d-flex", "align-items-center", "mb-3");

    const img = document.createElement("img");
    img.src = item.img;
    img.classList.add("img-fluid");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container", "ms-3");

    const titlePriceContainer = document.createElement("div");
    titlePriceContainer.classList.add(
      "title-price",
      "d-flex",
      "justify-content-between",
      "mb-2"
    );

    const title = document.createElement("h4");
    title.textContent = item.title;
    titlePriceContainer.appendChild(title);

    const price = document.createElement("h4");
    price.textContent = `$${item.price}`;
    titlePriceContainer.appendChild(price);

    const desc = document.createElement("p");
    desc.textContent = item.desc;
    textContainer.appendChild(titlePriceContainer);
    textContainer.appendChild(desc);

    div.appendChild(img);
    div.appendChild(textContainer);

    container.appendChild(div);
  });
}

function filterItems(category) {
  const filteredMenu =
    category === "all"
      ? menu
      : menu.filter((item) => item.category === category);
  displayItems(filteredMenu);
}

function setupButtons() {
  const buttons = document.querySelectorAll(".btn-container button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      filterItems(category);
    });
  });
}

displayButtons();
setupButtons();
filterItems("all");
