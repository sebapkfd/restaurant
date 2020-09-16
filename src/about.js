const divContent = document.querySelector('#content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    titleDiv.className = 'container';
    let h1 = document.createElement('h1');
    h1.textContent = 'About Us';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderInfo(){
    let infoDiv = document.createElement('div');
    infoDiv.className = 'container';
    let h2 = document.createElement('h2');
    h2.textContent = 'The purpose of this project was to help learn the use of Webpack!'

    infoDiv.appendChild(h2);
    divContent.appendChild(infoDiv);
}


const renderAbout = () =>{
    renderTitle();
    renderInfo();
    return divContent;
}

export default renderAbout