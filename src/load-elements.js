function loadElements(content) {
    const title = document.createElement("h1");
    title.textContent = "Meatball Factory";
    content.appendChild(title);

    const navbar = document.createElement("nav");
    
    const home = document.createElement("button");
    home.textContent = "Home";
    
    const menu = document.createElement("button");
    menu.textContent = "Menu";
    
    const contact = document.createElement("button");
    contact.textContent = "Contact";
    
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    
    content.appendChild(navbar);

    const heading = document.createElement("h2");
    heading.textContent = "Home of Toronto's Tastiest Meatballs";
    content.appendChild(heading);

    const intro = document.createElement("p");
    intro.textContent = "Located in the heart of Toronto's Little Italy, Meatball Factory \
                        has been happily serving Torontonians meatballs whose recipe dates back \
                        to 1937. Come try out our meatballs today!";
    content.appendChild(intro);
}

export { loadElements };