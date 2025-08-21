import { createMenu } from "./tabs/menu.js";
import { createAbout } from "./tabs/about.js";
import { createHome } from "./tabs/home.js";
import "./styles.css";

function createPage() {
    const content = document.querySelector("#content");
    const homeBtn = document.querySelector(".home-btn");
    homeBtn.addEventListener("click", () => {
        removeContent();
        createHome();
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
    createHome();
};
createPage();