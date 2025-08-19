export const greetingMenu = "This is the Menu page. Howdy!";

import cake1 from "../assets/imgs/cake-1.png";
import cake2 from "../assets/imgs/cake-2.png";
import cake3 from "../assets/imgs/cake-3.png";
import cake4 from "../assets/imgs/cake-4.png";
import cake5 from "../assets/imgs/cake-5.png";
import cake6 from "../assets/imgs/cake-6.png";
import cake7 from "../assets/imgs/cake-7.png";
import cake8 from "../assets/imgs/cake-8.png";
import cake9 from "../assets/imgs/cake-9.png";
import cake10 from "../assets/imgs/cake-10.png";

const cakes = [
    {name: "Cake One", description: "This is some text about Cake One", price: "$9.99", image: cake1},
    {name: "Cake Two", description: "This is some text about Cake Two", price: "$9.99", image: cake2},
    {name: "Cake Three", description: "This is some text about Cake Three", price: "$9.99", image: cake3},
    {name: "Cake Four", description: "This is some text about Cake Four", price: "$9.99", image: cake4},
    {name: "Cake Five", description: "This is some text about Cake Five", price: "$9.99", image: cake5},
    {name: "Cake Six", description: "This is some text about Cake Six", price: "$9.99", image: cake6},
    {name: "Cake Seven", description: "This is some text about Cake Seven", price: "$9.99", image: cake7},
    {name: "Cake Eight", description: "This is some text about Cake Eight", price: "$9.99", image: cake8},
    {name: "Cake Nine", description: "This is some text about Cake Nine", price: "$9.99", image: cake9},
    {name: "Cake Ten", description: "This is some text about Cake Ten", price: "$9.99", image: cake10},
];

function createMenu() {
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("container-menu");

    cakes.forEach(cake => {
        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = cake.name;
        const paraDesc = document.createElement("p");
        paraDesc.classList.add("desc");
        paraDesc.textContent = cake.description;
        const paraPrice = document.createElement("p");
        paraPrice.classList.add("price");
        paraPrice.textContent = cake.price;
        const cakeImg = document.createElement("img");
        cakeImg.classList.add("image");
        cakeImg.src = cake.image;
        cakeImg.alt = cake.name;
        const text = document.createElement("div");
        text.classList.add("info");
        text.append(title, paraDesc, paraPrice);
        const card = document.createElement("div");
        card.classList.add("card");
        card.append(cakeImg, text);
        containerMenu.append(card);
    });
    const content = document.querySelector("#content");
    content.appendChild(containerMenu);
}

export { createMenu };