const { default: renderAbout } = require("./about");
const { default: cleanPage } = require("./cleanPage");
const { default: renderContact } = require("./contact");
const { default: renderHome } = require("./home");
const { default: renderMenu } = require("./menu");

const divContent = document.querySelector('#content');

const createNavbar = () =>{
    let homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        cleanPage();
        renderHome();
    });

    let aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', () => {
        cleanPage();
        renderAbout();
    });

    let menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        cleanPage();
        renderMenu()
    });

    let contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => {
        cleanPage();
        renderContact()
    });

    divContent.appendChild(homeButton);
    divContent.appendChild(aboutButton);
    divContent.appendChild(menuButton);
    divContent.appendChild(contactButton);
}

//maybe change it from buttons to list

export default createNavbar