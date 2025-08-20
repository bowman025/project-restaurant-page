import {greetingHome} from "./tabs/home.js";
import {greetingMenu} from "./tabs/menu.js";
import {greetingAbout} from "./tabs/about.js";
import "./styles.css";

console.log("Hello! I am alive!");
console.log(greetingHome);
console.log(greetingMenu);
console.log(greetingAbout);

import { createMenu } from "./tabs/menu.js";
import { createAbout } from "./tabs/about.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
    console.log("home button says click.");
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
    removeContent();
    createMenu();
});

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
    removeContent();
    createAbout();
});

function removeContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
};