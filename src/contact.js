const divContent = document.querySelector('#content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    titleDiv.className = 'container';
    let h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderInfo(){
    let infoDiv = document.createElement('div');
    infoDiv.className = 'container';
    let h2 = document.createElement('h2');
    h2.textContent = 'The site was mainly created modifying the DOM using Js';

    infoDiv.appendChild(h2);
    divContent.appendChild(infoDiv);
}


const renderContact = () =>{
    renderTitle();
    renderInfo();
    return divContent;
}

export default renderContact