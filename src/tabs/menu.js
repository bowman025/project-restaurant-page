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

const cakeOne = document.createElement("img");
cakeOne.classList.add("cake", "cake-1");
cakeOne.src = cake1;

const cakeTwo = document.createElement("img");
cakeTwo.classList.add("cake", "cake-2");
cakeTwo.src = cake2;

const cakeThree = document.createElement("img");
cakeThree.classList.add("cake", "cake-3");
cakeThree.src = cake3;

const cakeFour = document.createElement("img");
cakeFour.classList.add("cake", "cake-4");
cakeFour.src = cake4;

const cakeFive = document.createElement("img");
cakeFive.classList.add("cake", "cake-5");
cakeFive.src = cake5;

const cakeSix = document.createElement("img");
cakeSix.classList.add("cake", "cake-6");
cakeSix.src = cake6;

const cakeSeven = document.createElement("img");
cakeSeven.classList.add("cake", "cake-7");
cakeSeven.src = cake7;

const cakeEight = document.createElement("img");
cakeEight.classList.add("cake", "cake-8");
cakeEight.src = cake8;

const cakeNine = document.createElement("img");
cakeNine.classList.add("cake", "cake-9");
cakeNine.src = cake9;

const cardOne = document.createElement("div");
cardOne.classList.add("card", "card-1");
cardOne.appendChild(cakeOne);

const cardTwo = document.createElement("div");
cardTwo.classList.add("card", "card-2");
cardTwo.appendChild(cakeTwo);

const cardThree = document.createElement("div");
cardThree.classList.add("card", "card-3");
cardThree.appendChild(cakeThree);

const cardFour = document.createElement("div");
cardFour.classList.add("card", "card-4");
cardFour.appendChild(cakeFour);

const cardFive = document.createElement("div");
cardFive.classList.add("card", "card-5");
cardFive.appendChild(cakeFive);

const cardSix = document.createElement("div");
cardSix.classList.add("card", "card-6");
cardSix.appendChild(cakeSix);

const cardSeven = document.createElement("div");
cardSeven.classList.add("card", "card-7");
cardSeven.appendChild(cakeSeven);

const cardEight = document.createElement("div");
cardEight.classList.add("card", "card-8");
cardEight.appendChild(cakeEight);

const cardNine = document.createElement("div");
cardNine.classList.add("card", "card-9");
cardNine.appendChild(cakeNine);

const container = document.createElement("div");
container.classList.add("container");
container.append(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine);

export {container};