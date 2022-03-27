import './menu-style.css';

function loadMenu(content) {

    const menuHolder = document.createElement('div');
    menuHolder.classList.add('menu-holder')
    
    const meatballMarinara = document.createElement('div');
    meatballMarinara.textContent = "Meatball Marinara";
    menuHolder.appendChild(meatballMarinara);

    const meatballAlfredo = document.createElement('div');
    meatballAlfredo.textContent = "Meatball Alfredo";
    menuHolder.appendChild(meatballAlfredo);

    const spicyMeatball = document.createElement('div');
    spicyMeatball.textContent = "Spicy Meatball";
    menuHolder.appendChild(spicyMeatball);

    const smashMeatball = document.createElement('div');
    smashMeatball.textContent = "Smash Meatball";
    menuHolder.appendChild(smashMeatball);

    const bigBall = document.createElement('div');
    bigBall.textContent = "Big Ball";
    menuHolder.appendChild(bigBall);

    // Append to main content div
    content.appendChild(menuHolder);
}

export { loadMenu };