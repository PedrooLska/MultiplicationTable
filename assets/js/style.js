const result = document.querySelector('#result');
const input = document.querySelector('#input');
const erro = document.querySelector('#erro');
const multiply = () => {
    if (validationNumber(input.value)) {
        erroMsg('');
        clearResult();
        for (let i = 0; i <= 10; i++) {
            let multiplicacao = input.value * i;
            showResult(input.value, i, multiplicacao)
        }
        clearInput();
    }
}
const validationNumber = (num) => {
    if (num >= 1 && num <= 10) {
        return true
    } else if (num.length == 0) {
        erroMsg('Por favor preencha o campo.');
        clearResult();
        clearInput();
    } else {
        erroMsg('Por favor preencha com números entre 1 é 10.');
        clearResult();
        clearInput();
    }
}
const erroMsg = (msg) => {
    erro.style.display = 'block'
    erro.innerHTML = `${msg}`
}
const showResult = (valor, multiplicador, total) => {
    result.style.display = 'block'
    result.innerHTML += `${valor} x ${multiplicador} = ${total}<br>`
};
const clearResult = () => result.innerHTML = '';
const clearInput = () => input.value = '';