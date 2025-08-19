import {greetingHome} from "./tabs/home.js";
import {greetingMenu} from "./tabs/menu.js";
import {greetingAbout} from "./tabs/about.js";
import "./styles.css";

console.log("Hello! I am alive!");
console.log(greetingHome);
console.log(greetingMenu);
console.log(greetingAbout);

import { createMenu } from "./tabs/menu.js";

createMenu();