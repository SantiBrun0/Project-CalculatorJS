window.addEventListener('load', () => {
    const display = document.querySelector('.calculator-display');
    const keyPadButtons = document.getElementsByClassName('keypad-button');

    const keyPadButtonsArray = Array.from(keyPadButtons);

    keyPadButtonsArray.forEach( (button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);
        })
    }
)})

let calculadora = (button, display) => {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break

        case '=':
            calcular(display)
            break
        
        default:
            actualizar(display, button)
            break
    }
}

let calcular = (display) => {
    display.innerHTML = eval(display.innerHTML)
}

let actualizar = (display, button) => {
    if (display.innerHTML == 0) {
        display.innerHTML = ''
    }
    display.innerHTML += button.innerHTML
}

let borrar = (display) => {
    display.innerHTML = 0
}