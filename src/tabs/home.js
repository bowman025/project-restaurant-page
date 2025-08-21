export const greetingHome = "This is the Home page. Yo!";

import place from "../assets/imgs/place.png";
import cakes from "../assets/imgs/cakes.png";

export function createHome() {
const containerHome = document.createElement("div");
containerHome.classList.add("home-container");
const heading = document.createElement("h1");
heading.classList.add("home-title");
heading.textContent = "Welcome to Lilly's Sweet Treats!";
const placeCard = document.createElement("div");
placeCard.classList.add("home-card", "home-place-card");
const placeImg = document.createElement("img");
placeImg.classList.add("home-image", "home-place-image");
placeImg.src = place;
const placeInfo = document.createElement("div");
placeInfo.classList.add("home-place-info");
const placeTitle = document.createElement("h2");
placeTitle.classList.add("home-place-title");
placeTitle.textContent = "Placeholder title";
const placeText = document.createElement("p");
placeText.classList.add("home-place-text");
placeText.textContent = "Placeholder text.";
placeInfo.append(placeTitle, placeText);
placeCard.append(placeImg, placeInfo);
const cakeCard = document.createElement("div");
cakeCard.classList.add("home-card", "home-cake-card");
const cakeImg = document.createElement("img");
cakeImg.classList.add("home-image", "home-cake-image");
cakeImg.src = cakes;
const cakeInfo = document.createElement("div");
cakeInfo.classList.add("home-cake-info");
const cakeTitle = document.createElement("h2");
cakeTitle.classList.add("home-cake-title");
cakeTitle.textContent = "Placeholder title";
const cakeText = document.createElement("p");
cakeText.classList.add("home-cake-text");
cakeText.textContent = "Placeholder text.";
cakeInfo.append(cakeTitle, cakeText);
cakeCard.append(cakeInfo, cakeImg);
const bottomCard = document.createElement("div");
bottomCard.classList.add("home-card", "home-bottom-card");
const bottomInfo = document.createElement("p");
bottomInfo.classList.add("home-bottom-info")
bottomInfo.textContent = "Placeholder text";
bottomCard.append(bottomInfo);
containerHome.append(heading, placeCard, cakeCard, bottomCard);

const content = document.querySelector("#content");
content.appendChild(containerHome);
}