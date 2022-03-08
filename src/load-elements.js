import './style.css';
import {loadHome} from './load-home';
import {loadMenu} from './load-menu';

function loadMainElements(content) {
    content.classList.add('content');

    const title = document.createElement("h1");
    title.textContent = "The Meatball Factory";
    content.appendChild(title);

    const navbar = document.createElement("nav");
    navbar.classList.add('nav-bar');

    const home = document.createElement("button");
    home.textContent = "Home";
    home.addEventListener('click', function() {
        content.removeChild(content.lastChild);
        loadHome(content);
    });

    const menu = document.createElement("button");
    menu.textContent = "Menu";
    menu.addEventListener('click', function() {
        content.removeChild(content.lastChild);
        loadMenu(content);
    });

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    
    content.appendChild(navbar);
}

export { loadMainElements };