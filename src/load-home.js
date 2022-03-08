import meatball from './meatball.jpg';
import './style.css';;

function loadHome(content) {

    const homeHolder = document.createElement('div');
    homeHolder.style['margin-top'] = '22px';
    
    const myMeatball = new Image();
    myMeatball.src = meatball;
    myMeatball.classList.add('meatball-img');
    homeHolder.appendChild(myMeatball);

    const heading = document.createElement("h2");
    heading.textContent = "Home of Toronto's Tastiest Meatballs";
    homeHolder.appendChild(heading);

    const intro = document.createElement("p");
    intro.textContent = "Located in the heart of Toronto's Little Italy, Meatball Factory \
                        has been happily serving Torontonians meatballs whose recipe dates back \
                        to 1937. Come try out our meatballs today!";
    homeHolder.appendChild(intro);

    content.appendChild(homeHolder);
}

export { loadHome };