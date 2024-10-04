function adicionarNumero(numero) {
    document.getElementById('display').value += numero;
}

function adicionarOperacao(operacao) {
    document.getElementById('display').value += ' ' + operacao + ' ';
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcularPorcentagem() {
    try {
        let expressao = document.getElementById('display').value;
        let resultado = eval(expressao) / 100;
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function calcularResultado() {
    try {
        let expressao = document.getElementById('display').value;
        let resultado = eval(expressao);
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function imprimirTela() {
    window.print();
}