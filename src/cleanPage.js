const divContent = document.querySelector('#content');

const cleanPage = () =>{
    while(divContent.lastChild.textContent != 'Contact'){
        divContent.removeChild(divContent.lastChild);
    }

}

export default cleanPage