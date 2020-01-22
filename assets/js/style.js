class Multiply {
    constructor() {
        this.result = document.querySelector('.result');
        this.input = document.querySelector('input');
        this.erro = document.querySelector('.erro');
    }

    multiply() {
        if (this.validationNumber(this.input.value)) {
            this.erroMsg('');
            this.clearResult();
            for (let i = 0; i <= 10; i++) {
                
                let multiplicacao = this.input.value * i;
                
                this.showResult(this.input.value, i, multiplicacao)
            }
            this.clearInput();
        }
    }

    validationNumber(num) {
        if (num >= 1 && num <= 10) {
            return true
        } else if (num.length == 0) {
            this.erroMsg('Por favor preencha o campo.');
            this.clearResult();
            this.clearInput();
        } else {
            this.erroMsg('Por favor preencha com números entre 1 é 10.');
            this.clearResult();
            this.clearInput();
        }
    }

    erroMsg(msg) {
        this.erro.innerHTML = `${msg}`;
    }

    showResult(valor, multiplicador, total) {
        this.result.innerHTML += `${valor} x ${multiplicador} = ${total}<br>`;
    }

    clearResult() {
        this.result.innerHTML = '';
    }

    clearInput() {
        this.input.value = '';
    }
}

const newMultiply = new Multiply();