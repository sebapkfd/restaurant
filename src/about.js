const divContent = document.querySelector('#content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = 'Hello';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderInfo(){
    let infoDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = 'This is the About Us page!'

    infoDiv.appendChild(h2);
    divContent.appendChild(infoDiv);
}


const renderAbout = () =>{
    renderTitle();
    renderInfo();
    return divContent;
}

export default renderAbout