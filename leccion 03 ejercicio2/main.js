'use strict'

const lightElement = document.querySelector('.button1');
const darkElement = document.querySelector('.button2');
const textElement = document.querySelector('.text1');

function handleButton() {
    //si tenemos chequeado el claro añadimos .claro y quitamos .oscuro
    //si chequeamos oscuro será al revés
    if (lightElement.checked) {
        lightElement.classList.add("claro");
        darkElement.classList.remove("claro");
    } else {
        lightElement.classList.remove("claro");
        darkElement.classList.add("claro");
    }

}

lightElement.addEventListener('click', handleButton);
darkElement.addEventListener('click', handleButton);