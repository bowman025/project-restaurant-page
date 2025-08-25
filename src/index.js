import { createMenu } from "./tabs/menu.js";
import { createAbout } from "./tabs/about.js";
import { createHome } from "./tabs/home.js";
import "./styles.css";

function createPage() {
    const content = document.querySelector("#content");
    const homeBtn = document.querySelector(".home-btn");
    homeBtn.addEventListener("click", () => {
        content.replaceChildren(createHome());
    });
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", () => {
        content.replaceChildren(createMenu());
    });
    const aboutBtn = document.querySelector(".about-btn");
    aboutBtn.addEventListener("click", () => {
        content.replaceChildren(createAbout());
    });
    content.appendChild(createHome());
};
createPage();