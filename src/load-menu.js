function loadMenu(content) {

    const menuHolder = document.createElement('div');
    menuHolder.style['margin-top'] = '22px';
    
    const bruh = document.createElement('div');
    bruh.textContent = "This is where the menu is supposed to be!";
    menuHolder.appendChild(bruh);

    content.appendChild(menuHolder);
}

export { loadMenu };