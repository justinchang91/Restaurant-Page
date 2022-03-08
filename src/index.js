import {loadMainElements} from './load-elements';
import {loadHome} from './load-home';
//const container = document.createElement("div");
//container.textContent = "hello world";

// Get the content box
const content = document.querySelector("#content");
loadMainElements(content);
loadHome(content); // Initially use contents from home module
