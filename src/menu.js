const divContent = document.querySelector('#content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    titleDiv.className = 'container';
    let h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderInfo(){
    let infoDiv = document.createElement('div');
    infoDiv.className = 'container';
    let h2 = document.createElement('h2');
    h2.textContent = 'And also use the knowledge from Js modules!'

    infoDiv.appendChild(h2);
    divContent.appendChild(infoDiv);
}


const renderMenu = () =>{
    renderTitle();
    renderInfo();
    return divContent;
}

export default renderMenu