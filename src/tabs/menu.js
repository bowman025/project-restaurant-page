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

export function createMenu() {
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("menu-container");
    const heading = document.createElement("h1");
    heading.textContent = "Our Selection of Cakes";
    containerMenu.appendChild(heading);
    const cakes = [
    {name: "BonBon", description: "A classic cake packed with all kinds of sugary treats.", price: "$5.99", image: cake1, id: 1},
    {name: "PistachiYO", description: "Pistachios taken to a whole new level.", price: "$5.99", image: cake2, id: 2},
    {name: "Mr. Butters", description: "Buttery delight to soothe you in the middle of the night.", price: "$6.99", image: cake3, id: 3},
    {name: "The Grapeller", description: "A flavor that is slow to develop, but once it does it never lets go.", price: "$6.99", image: cake4, id: 4},
    {name: "BirthdAI", description: "Perfect for birthdays. Comes with a free candle!", price: "$7.99", image: cake5, id: 5},
    {name: "RoboHeart", description: "Robot or human or anyone in between - this one celebrates love in all its forms.", price: "$7.99", image: cake6, id: 6},
    {name: "Cream-O", description: "The creamiest creamy cake you-ll ever taste. Take our word or try for yourself.", price: "$8.99", image: cake7, id: 7},
    {name: "Melonious Monk", description: "Remember jazz? Well, this is what it would taste like if it were a cake.", price: "$8.99", image: cake8, id: 8},
    {name: "Blueberry Blues", description: "Grab this one if you are feeling down, Charlie Brown.", price: "$9.99", image: cake9, id: 9},
    {name: "Code Red", description: "Not for the faint of heart! Order this one only if you haven't tasted sugar in days.", price: "$9.99", image: cake10, id: 10},
    ];
    cakes.forEach(cake => {
        const title = document.createElement("h2");
        title.classList.add("menu-title");
        title.textContent = cake.name;
        const paraDesc = document.createElement("p");
        paraDesc.classList.add("menu-desc");
        paraDesc.textContent = cake.description;
        const paraPrice = document.createElement("p");
        paraPrice.classList.add("menu-price");
        paraPrice.textContent = cake.price;
        const cakeImg = document.createElement("img");
        cakeImg.classList.add("menu-image");
        cakeImg.src = cake.image;
        cakeImg.alt = cake.name;
        const info = document.createElement("div");
        info.classList.add("menu-info");
        info.append(title, paraDesc, paraPrice);
        const card = document.createElement("div");
        card.classList.add("menu-card", `menu-card-${cake.id}`);
        card.append(cakeImg, info);
        containerMenu.append(card);
    });
    return containerMenu;
}