// Funções de abrir e fechar
function fechar(){
    let fecha = document.getElementById('Calculadora');
    fecha.style.display = 'none';
}

function abrir(){
    let abrir = document.getElementById('Calculadora');
    abrir.style.display = 'block';
}

// Seletores
const botoes = document.querySelectorAll('button');
const visor = document.getElementById('tela');
const limpar = document.getElementById('limpar');
const removerUm = document.getElementById('removeUm');

// Adiciona os números e operadores ao visor
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.innerText;

        // Ignora botões especiais
        if (valor === 'C' || valor === '=' || valor === 'x' || valor === '←') return;

        // Substitui vírgula por ponto
        if (valor === ',') {
            visor.innerText += '.';
        } 
        // Substitui "X" por "*"
        else if (valor === 'X') {
            visor.innerText += '*';
        } 
        // Substitui "÷" por "/"
        else if (valor === '÷') {
            visor.innerText += '/';
        } 
        else {
            visor.innerText += valor;
        }
    });
});

// Limpar visor (botão C)
limpar.addEventListener('click', () => {
    visor.innerText = '';
});

// Remover um caractere
removerUm.addEventListener('click', () => {
    visor.innerText = visor.innerText.slice(0, -1);
});

// Fazer o cálculo (botão =)
const igual = document.querySelector('.igual');
igual.addEventListener('click', () => {
    try {
        const resultado = eval(visor.innerText);
        visor.innerText = resultado;
    } catch (error) {
        visor.innerText = 'Erro';
    }
});



