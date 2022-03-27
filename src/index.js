import {loadMainElements} from './load-main-elements';
import {loadHome} from './home/load-home';
//const container = document.createElement("div");
//container.textContent = "hello world";

// Get the content box
const content = document.querySelector("#content");
loadMainElements(content);
loadHome(content); // Initially use contents from home module
