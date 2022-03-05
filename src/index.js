import {loadElements} from './load-elements'

//const container = document.createElement("div");
//container.textContent = "hello world";

const content = document.querySelector("#content");
loadElements(content);
console.log(content);